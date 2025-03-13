import { useState, useEffect } from "react";
import Accordion from "./accordion";

export default function FAQs({ faqs, type }) {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      console.log("closing", e.target.id);
      setOpen("");
    } else {
      console.log("opening", e.target.id);
      setOpen(e.target.id);
    }
  };

  // Create FAQ schema for structured data
  useEffect(() => {
    // Create the FAQPage schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: {
          "@type": "Answer",
          // Use the content or paragraph1 property, depending on what's available
          text: faq.content || faq.paragraph1 || "",
        },
      })),
    };

    // Add the schema to the document
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return (
    <section className="bg-muted-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-center capitalize text-xl font-bold leading-7 tracking-tight text-accent-700">
            {type}
          </p>
          <h2 className="text-center capitalize text-4xl font-bold leading-10 tracking-tight text-primary-950">
            Frequently asked questions
          </h2>
          <dl className="flex flex-col gap-2 mt-6">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                index={index}
                faq={faq}
                toggled={faq.title === open}
                onShow={handleClick}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
