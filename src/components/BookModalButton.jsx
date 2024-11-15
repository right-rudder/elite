import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const BookModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleModal = () => {
    console.log(btnStyle);
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("firstName");
    setUserName(name);

    console.log("Form data:", formData);

    const url =
      "https://services.leadconnectorhq.com/hooks/3YxJwd7Old9QsiOu2G7q/webhook-trigger/GX48X5gaBu9ZPfTm5GPO";

    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            toggleModal();
            document.body.style.overflow = "auto";
          }, 8100);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error(
          "Network error occurred while submitting the form:",
          error
        );
      });
  };

  return (
    <>
      <button
        className={btnStyle}
        onClick={() => {
          toggleModal();
          document.body.style.overflow = "hidden";
        }}
      >
        {btnText}
      </button>
      {showModal && (
        <div id="book-modal" className="relative z-50">
          <div className="fixed inset-0 h-full w-full bg-slate-900 bg-opacity-95 flex items-center justify-center">
            {!formSubmitted && (
              <div className="bg-white p-12 max-w-xl my-4 text-black h-3/4 rounded-md overflow-y-auto">
                <p className="text-xl text-center font-bold leading-7 text-accent-700 uppercase">
                  QUIZ
                </p>
                <h2 className="text-3xl text-primary-950 text-center font-bold mb-1">
                  Is Flight Training for You?
                </h2>
                <p className="text-center italic text-base mt-0 mb-6">
                  Please fill out the form below to get started.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 font-light">
                  <div className="mb-4">
                    <label
                      htmlFor="first-name"
                      className="block mb-1 font-bold"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="last-name" className="block mb-1 font-bold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 font-bold">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>

                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" />
                    </label>
                  </p>

                  <button type="submit" className="btn-accent w-full mt-8">
                    Get the guide
                  </button>
                </form>
              </div>
            )}

            {formSubmitted && (
              <div className="bg-white p-12 max-w-xl m-4 text-black rounded-sm-md h-full overflow-y-auto text-center">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for filling the Quiz.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div className="text-green-700 text-5xl">✓</div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting Elite Flight Training & Aircraft
                  Management. We are looking forward to working with you soon.
                  We will review your message and get back with you within 1-5
                  business days. <br />
                  <br />
                  You can also give us a call at{" "}
                  <a className="text-red-500" href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </a>{" "}
                  or
                  <br />
                  email us at{" "}
                  <a className="text-red-500" href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </p>
              </div>
            )}

            <button
              className="bg-accent-700 p-1 rounded-full absolute top-28 right-2"
              onClick={() => {
                toggleModal();
                document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose className="text-2xl text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookModalButton;