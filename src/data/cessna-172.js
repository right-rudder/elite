const cessnaInfo = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Cessna 172 | Our Fleet | Elite Flight Training & Aircraft Management",
    pageDescription:
      "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. These reliable and versatile planes are perfectly suited for those taking their first steps into the world of flight. Our Cessna 172s provide an ideal learning environment for aspiring pilots.",
    pageKeywords:
      "aircraft, fleet, training, Cessna 172, Elite Flight Training & Aircraft Management fleet, flight training, pilot training, aviation training, Cessna 172 training, Cessna 172 aircraft",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/elite-flight-training-fleet-cessna-172-2.jpg",
      imageAlt:
        "elite flight training & aircraft management trains professional pilots in Kankakee, Illinois",
      headerH1: `Cessna</br><span class="text-primary-100">172</span>`,
      paragraph:
        "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. Our Cessna 172 provides an ideal learning environment for aspiring pilots.",
      buttons: [
        {
          name: "Rent Now",
          link: "/aircraft-rental",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Fly With Confidence`,
      paragraphs: [
        "At Elite Flight Training & Aircraft Management, we take pride in our exceptional fleet of aircraft, designed to provide you with the highest quality flight training experience. Whether you're just beginning your aviation journey or advancing your skills, our versatile aircraft and training tools are here to support your goals.",
        "Our Cessna 172 aircraft are the perfect choice for those looking to take their first steps into the world of flight. With their reliable performance and user-friendly controls, the Cessna 172 provides an ideal learning environment for aspiring pilots. Discover the joy of flight with our Cessna 172 and reserve your spot now.",
      ],
    },

    aircraftInfo: {
      title: `Cessna<span class="text-accent-600">172</span>`,
      images: [
        {
          imagePath: "/src/assets/elite-flight-training-fleet-cessna-172.jpg",
          imageAlt: "Elite Flight Training & Aircraft Management Cessna 172",
        },
        {
          imagePath: "/src/assets/elite-flight-training-fleet-cessna-172-2.jpg",
          imageAlt: "Elite Flight Training & Aircraft Management Cessna 172",
        },
        {
          imagePath: "/src/assets/greg-rosenke-p41WCA9p-ZY-unsplash.jpg",
          imageAlt: "elite flight training & aircraft management cessna 172",
        },
      ],
      features: {
        title: "Avionics and Features:",
        firstParagraph:
          "Immerse yourself in a learning environment where technology meets training. Our Cessna 172s are equipped with:",
        list: [
          "Advanced Garmin 430 navigation systems",
          "Aspen, dual G5 PFDs",
          "Garmin MFDs",
        ],
        secondParagraph:
          "These tools ensure that you’re not just a pilot, but an expert navigator too, ready to traverse the skies with confidence.",
        finalParagraph: `Beyond the basics, our instrument capable Cessna 172s allow you to continue your journey beyond the private certificate and into an Instrument Rating certification. Discover the joy of flight with our Cessna 172s and reserve your spot now.`,
      },
      descriptions: [
        "Embark on an aviation journey starting with our Cessna 172 aircraft – a reliable companion for those stepping into the world of flight. Experience the open skies in a spacious cockpit designed as an environment where you can truly feel comfortable as you get started in the world of flight.",
        "The Cessna 172 offers simplicity in control, allowing you to navigate the skies effortlessly as you take your initial flights. With top notch stability, this aircraft is perfect for any level, from student to certified pilot.",
      ],
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: true,
        },
        {
          name: "Contact Us",
          link: "/contact",
          primary: true,
        },
      ],
    },

    bookCTA: {
      upperHeading: "Still looking for more information on pilot training?",
      headerH1: `Get Your <span class="text-primary-700">FREE</span><br> Pilot Training Guide!`,
      paragraph:
        "We have a free booklet which explains everything you need to know for your pilot certificate.",
      buttons: [
        {
          name: "Download Now",
          link: "/book-download",
          primary: true,
        },
      ],
      imagePath: "/src/assets/sun-city-book-mock-up.webp",
      imageAlt: "Right Rudder Marketing team on the runway",
    },

    quizCTA: {
      reverse: true,
      upperHeading: "Take Our Quiz",
      heading: "Do You Have What It Takes To Be A Pilot?",
      descriptions: [
        "Are you fascinated by the world of aviation? Have you dreamed of flying and exploring the skies? Do you often look upward at passing aircraft, wondering if you yourself could be in the cockpit?",
        "Begin your journey in aviation with our brief quiz. Our quiz is designed to look at your aviation related knowledge and aptitude, alongside your unique personality traits and interests, to provide insights into whether a future in aviation aligns with your aspirations.",
      ],
      imagePath: "/src/assets/benjamin-chambon-7LJLXYpqGl4-unsplash.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management cessna 172 instrument panel",
      quizModal: true,
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Doing a discovery flight is the best way to determine if being a pilot is right for you. Whether you're trying it out for fun or want to fly professionally, doing a discovery flight will allow you to see Kankakee from a new perspective.",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};
export default cessnaInfo;
