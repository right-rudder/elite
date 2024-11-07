const rentalsInfo = {
  data: {
    //SEO Header Stuff
    pageTitle: "Aircraft Rentals | Elite Flight Training & Aircraft Management",
    pageDescription:
      "Looking to soar through the skies on your own? Elite Flight Training offers reliable and high-performance aircraft rentals. Our fleet consists of well-maintained and modern aircraft, ensuring a safe and comfortable flying experience. Whether you need a plane for leisure travel or business trips, we have the perfect aircraft for you. Our rates are competitive, and our rental process is seamless, allowing you to focus on what you love most - flying.",
    pageKeywords:
      "Aircraft Rentals, Aircraft Rental, Aircraft Rental Services, Aircraft Rental Company, Aircraft Rental Near Me, Aircraft Rental Chicago, Aircraft Rental Illinois, Aircraft Rental Kankakee, Aircraft Rental Services Near Me, Aircraft Rental Services Chicago, Aircraft Rental Services Illinois, Aircraft Rental Services Kankakee, Aircraft Rental Company Near Me, Aircraft Rental Company Chicago, Aircraft Rental Company Illinois, Aircraft Rental Company Kankakee",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/elite-flight-training-plane-front.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management aircraft ready for takeoff",
      headerH1: `Aircraft<br>Rentals`,
      paragraph:
        "Looking to soar through the skies on your own? Elite Flight Training offers reliable and high-performance aircraft rentals. Our fleet consists of well-maintained and modern aircraft, ensuring a safe and comfortable flying experience.",
      buttons: [
        {
          name: "Contact Us",
          link: "/contact",
          primary: false,
        },
        {
          name: "Call Us",
          link: "tel:8159393575",
          primary: false,
        },
      ],
    },

    brokerage: {
      upperHeading: "Aircraft Rental Services",
      heading: "Looking to Rent & Fly?",
      descriptions: [
        "Have an itch to get up in the air?  Take one of our awe-inspiring aircraft out for a spin, Captain!  You're in charge, so feel free to plan a local flight or cross country expedition.  Either way, we can help you plan and facilitate your flying adventure.",
        "Imagine seeing the world from a whole new perspective.  Well, Elite Flight Training has a beautiful fleet of aircraft that are available for rent — located just 50 miles south of Chicago. Rent an aircraft to 'buzz the tower' (not literally, please), or sit back and relax as an experienced pilot provides an unforgettable scenic tour.",
        "Whether you need a plane for leisure travel or business trips, we have the perfect aircraft for you. Our rates are competitive, and our rental process is seamless, allowing you to focus on what you love most - flying.",
        `Just a heads up, our office hours are from 9 am to 6 pm every day. But here’s the thing, we only take appointments. This way, we can give each of our clients the best service and make sure they feel special. If you want to book an appointment or ask about our services, just give us a call at <a href="tel:8159393575" class="text-accent-600 hover:underline">+1-815-939-3575</a> or shoot us an email at <a href="mailto:eliteproaviation@gmail.com" class="text-accent-600 hover:underline">eliteproaviation@gmail.com</a> whenever you’re free. We’re here to help!`,
      ],

      finalButton: {
        name: "Contact Us",
        link: "/contact",
        primary: true,
      },
      // imageLegend: "Elite Flight Training & Aircraft Management aircraft",
      imagePath: "/src/assets/jenny-schwanke-p9oFqB1wGfg-unsplash.jpg",
      imageAlt:
        "Elite Flight Training & Aircraft Management aircraft instrument panel",
    },
  },
};
export default rentalsInfo;
