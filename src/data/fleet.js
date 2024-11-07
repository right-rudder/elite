const ourFleet = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Fleet | Elite Flight Training & Aircraft Management",
    pageDescription:
      "We have a fleet of modern aircraft for your training needs. Our fleet includes Cessna 172, Piper Warrior and Piper Twin Comanche.",
    pageKeywords:
      "flight training, aircraft management, elite flight training, elite aircraft management, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training, Elite flight academy, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight, Elite Flight Training & Aircraft Management, Elite flight school, Elite Flight Training training, Elite flight training, Elite Flight Training, Elite flight",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/elite-flight-training-fleet-cessna-172-2.jpg",
      imageAlt: "elite flight training student in the cockpit of a Cessna 172",
      headerH1: `Our</br><span class="text-primary-100">Fleet</span>`,
      paragraph:
        "We have a fleet of modern aircraft for your training needs. Our fleet includes Cessna 172, Piper Warrior and Piper Twin Comanche.",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
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
        "We offer a variety of aircraft for training, including the Cessna 172, the Piper Warrior and the Piper Twin Comanche. Our fleet is maintained to the highest standards, ensuring that you can train with confidence and peace of mind.",
      ],
    },

    fleetGrid: {
      upperHeading: "Explore",
      heading: "Our Aircraft",
      description: `Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      aircraft: [
        {
          title: "Cessna 172",
          imagePath: "/src/assets/elite-flight-training-fleet-cessna-172.jpg",
          imageAlt:
            "Elite Flight Training Cessna 172 parked at the airport by our flight school",
          description:
            "Start your aviation adventure with our robust fleet of Cessna 172 aircraft. These reliable and versatile planes are perfectly suited for those taking their first steps into the world of flight.",
          link: "/our-fleet/cessna-172",
          linkText: "Details",
        },
        {
          title: "Piper Warrior",
          imagePath:
            "/src/assets/elite-flight-training-fleet-piper-warrior.jpg",
          imageAlt:
            "Elite Flight Training Piper Warrior parked at the airport by our flight school",
          description:
            "Our Piper Warrior aircraft are ideal for those looking to advance their skills and experience in the world of aviation. These planes offer a comfortable and reliable platform for your training needs.",
          link: "/our-fleet/piper-warrior",
          linkText: "Details",
        },
        {
          title: "Piper Twin Comanche",
          imagePath:
            "/src/assets/elite-flight-training-fleet-piper-twin-comanche.jpg",
          imageAlt:
            "Elite Flight Training Piper Twin Comanche parked at the airport by our flight school",
          description:
            "For those seeking a multi-engine training experience, our Piper Twin Comanche aircraft are the perfect choice. These versatile planes offer a unique training opportunity for aspiring pilots.",
          link: "/our-fleet/piper-twin-comanche",
          linkText: "Details",
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
export default ourFleet;
