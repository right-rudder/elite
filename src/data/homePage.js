const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Flight Training in Kankakee, IL | Elite Flight Training & Aircraft Management",
    pageDescription:
      "Elite Flight Training & Aircraft Management offers flight training in Kankakee, IL. We offer private pilot training, instrument rating training, commercial pilot training, and more. Contact us today!",
    pageKeywords:
      "flight training, flight school, pilot training, private pilot training, instrument rating training, commercial pilot training, Kankakee, IL",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/zander-betterton-24R77S3ZA5s-unsplash.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management flight over Kankakee, IL",
      headerH1: `Come Fly<br>With Us`,
      paragraph:
        "Start your aviation journey with Elite Flight Training. Whether you're looking to fly for fun or pursue a career in aviation, Our programs and instructors to help you achieve your goals.",
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

    whyElite: {
      upperHeading: "Why Elite Flight Training",
      heading: "Our Commitment",
      descriptions: [
        "Founded in 2014 with a vision to bring a flight school to the south suburbs of Chicago,  Elite Flight Training continues to be one of the only complete flight institutions in the area.  Join us and make your flying dreams come true!",
        "Elite Flight Training and Aircraft Management, LLC is located in Kankakee, just 50 miles south of Chicago. We offer professional and customized flight training programs including one of Chicagoland's only Multi-Engine Accelerated course.",
        "Our team of experienced instructors are dedicated to providing you with the best training experience possible. We are committed to helping you achieve your goals and become a safe, competent pilot.",
      ],
      bullets: [
        {
          title: "Experience in Aviation",
          descriptions: [
            "Our instructors are seasoned professionals with years of experience in the aviation industry.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Individualized Attention",
          descriptions: [
            "We provide personalized training to ensure you receive the attention you need to succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Excellent Customer Service",
          descriptions: [
            "Our team is dedicated to providing you with the best customer service experience possible.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "Structured Lessons",
          descriptions: [
            "Our programs are designed to provide you with a structured learning experience that will help you succeed.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imagePath: "/src/assets/elite-flight-training-cfi-training.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management cessna 172 waiting for takeoff",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "Can You Become a Pilot?",
      descriptions: [
        "Many aspiring pilots hesitate due to concerns about cost, time, and safety. These concerns often arise from online research and general uncertainty. We understand these valid concerns and encourage you to speak with a Elite Flight Training team member to address any questions that may have arisen during your research.",
        "At Elite Flight Training, you don't need to make a substantial financial commitment upfront. It all begins with an affordable discovery flight, costing only a few hundred dollars. Pursuing your pilot's license is indeed a significant time investment, but it's a life changing achievement with long lasting rewards. Safety is our utmost priority at Elite, ensuring your journey to becoming a pilot is both fulfilling and safe.",
        `Wondering if a pilot's life is right for you? Discover if the world of aviation is right for you by taking our "Is Flying Right for Me?" quiz. This quiz is designed to help you explore your interests and determine if the skies are where you belong. Get started on your aviation journey by clicking below to take the quiz.`,
      ],
      imageLegend: `Luke Poulos<br><small class="text-white font-normal text-sm">Founder & CEO</small>`,
      imagePath: "/src/assets/benjamin-chambon-7LJLXYpqGl4-unsplash.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management cessna 172 instrument panel",
      quizModal: true,
    },

    blogfeed: {
      upperHeading: "Our Blog",
      heading: "Elite Flight News",
      description:
        "Stay up to date with the latest news, pilot resources and updates from Elite Flight Training & Aircraft Management.",
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/avel-chuklanov-QbTBCUJLqKY-unsplash(1).jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-accent-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
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

    testimonials: {
      upperHeading: "The Elite Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at Elite Flight Training our students have a fun and comfortable environment to practice in. We are proud of the relationships we have built with our students and guests.",
        "Check out what they have to say about their experiences with Us.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://search.google.com/local/writereview?placeid=ChIJYR6NGmjpDYgR_m6mDUwAToY",
      reviews: [
        {
          body: "I absolutely love the facility and instructors at Elite. I'm able to easily keep current as a pilot and have easy access to aircraft just to take some friends up! The training is excellent if not better than when I was at a university for my aviation education. The one on one aspect here is a plus, not to mention the multi engine rating program is the most affordable I've seen in the country so far!",
          author: "Kevin D.",
        },
        {
          body: "Great flying school with very knowledgeable, supporting and patient instructors. Kaleb and Bryan are outstanding professionals and would recommend to anyone who would like to fulfill a dream of flying.",
          author: "Tomas M.",
        },
        {
          body: "My daughter did her first discovery flight over the weekend with Elite Flight Training out of Kankakee airport. She had Kellen as her instructor, such an amazing experience! A+++ instructors!!! Awesomeness!!! If you're thinking of taking flight instruction this is the place!!! Best part for papa is i got to come along for the ride!",
          author: "Zack K.",
        },
        {
          body: "Went to Elite Flight training to build some multi engine hours in their Twin Comanche. Very well equipped airplane and fun to fly. Best value for twin time I have found. Highly recommend Elite!",
          author: "G. Colby",
        },
        {
          body: "5/5. The training costs is more on the affordable end in terms of normal pricing for aviation training and the CFIs are very friendly! All three make you feel safe to fly a plane.",
          author: "Andrew B.",
        },
        {
          body: "Great local flight school, great instructors, airplanes, etc. I had a great experience with Elite for my PPL and highly recommend them to anyone who is interested in learning to fly!",
          author: "Carter G.",
        },
        {
          body: "Wonderful place to train as a pilot. Friendly, courteous, flexible, and dedicated to safe instruction.  Brian Rose is a great instructor and keeps you on track with your training goals.  I recommended Elite to the flying club for members to gain further certifications, especially multi-engine.",
          author: "Jason C.",
        },
      ],
    },
  },
};
export default homePage;
