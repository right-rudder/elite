const pilotTrainingGuide = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Pilot Training Guide | Elite Flight Training & Aircraft Management",
    pageDescription:
      "Learn more about how to become a pilot with Elite Flight Training. We offer a variety of programs to help you achieve your aviation dreams and become a pilot.",
    pageKeywords:
      "grow flight school, scale flight school, grow and scale flight school, aviation business, aviation training,Right Rudder Marketing, Aviation marketing, Flight school marketing, Aviation digital marketing, SEO for aviation, Digital marketing for flight schools, Aviation marketing agency, Lead generation for aviation companies, Increase flight school enrollment, Aviation advertising services, Content marketing for aviation businesses, Aviation marketing strategies, Aviation SEO services",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/jenny-schwanke-p9oFqB1wGfg-unsplash.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management Piper Warrior cockpit",
      headerH1: `Pilot Training </br><span class="text-primary-100">Guide</span>`,
      paragraph:
        "Learn more about how to become a pilot with Elite Flight Training. We offer a variety of programs to help you achieve your aviation dreams and become a pilot.",
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

    careerBento: {
      upperHeading: "How to Get Started",
      heading: "Pilot Career Path",
      description:
        "If you've thought about becoming a pilot, now is the perfect time to get started. Elite Flight Training Aviation Academy is your place to start training and get your pilot certificate and ratings.",
      boxes: [
        {
          upperTitle: "Experience",
          title: "Take a Discovery Flight",
          copy: "The best way to see if flying is right for you is to take a discovery flight. This brief introductory flight, led by one of our seasoned instructors, offers a first hand glimpse into the world of piloting. During this experience, you'll take the controls of the plane, acquaint yourself with maneuvers, and view the south Florida coast from a new perspective.",
          imagePath: "/src/assets/greg-rosenke-0DizjoNOCrw-unsplash.jpg",
          imageAlt:
            "Elite Flight Training aviation academy student flying over miami",
          button: {
            name: "Schedule Today",
            link: "/discovery-flight",
            primary: true,
          },
        },
        {
          upperTitle: "Training",
          title: "Start Flight Training",
          copy: "Our team of experienced instructors will work with you to craft a training regimen that perfectly suits your goals, schedule, and preferred learning style.",
          imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
          imageAlt:
            "Elite Flight Training & Aircraft Management Cessna 172 flying on the sky",
          button: {
            name: "Private Pilot",
            link: "/flight-training/private-pilot-training",
            primary: true,
          },
        },
        {
          upperTitle: "Training",
          title: "Advanced Flight Training",
          copy: "From instrument training to multi engine training, commercial training, and beyond, Elite Flight Training offers a comprehensive selection of advanced training options.",
          imagePath: "/src/assets/alexander-almegaard-QEJ8jxeeH1E-unsplash.jpg",
          imageAlt:
            "Elite Flight Training & Aircraft Management clouds in the sky IFR training",
          button: {
            name: "Our Courses",
            link: "/flight-training-pilot-programs",
            primary: true,
          },
        },
        {
          upperTitle: "Instructor",
          title: "Become a Certified Flight Instructor",
          copy: "Once you've completed your training, you can become a certified flight instructor and help others achieve their aviation dreams. Our CFI training program will prepare you for this exciting career path. We offer CFI and CFII training.",
          imagePath: "/src/assets/avel-chuklanov-ZEiqbaQhmvE-unsplash.jpg",
          imageAlt:
            "Elite Flight Training & Aircraft Management student pilot and instructor flying over Kankakee, IL",
          button: {
            name: "CFI Training",
            link: "/flight-training/certified-flight-instructor-cfi",
            primary: true,
          },
        },
      ],
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
export default pilotTrainingGuide;
