const forSaleInfo = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Aircraft for Sale | Elite Flight Training & Aircraft Management",
    pageDescription:
      "Our Aircraft Brokerage Department at Elite Flight Training will assist you in the sale of your aircraft for a nominal fee. Avoid the tire kickers and liability issues by allowing us to professionally represent your interests from start to finish. We will get the job done within a reasonable amount of time and ensure a smooth transaction.  Contact us today for more information.",
    pageKeywords:
      "aircraft for sale, aircraft brokerage, aircraft sales, aircraft management, aircraft broker, aircraft for sale near me, aircraft for sale in illinois, aircraft for sale in indiana, aircraft for sale in wisconsin, aircraft for sale in michigan, aircraft for sale in iowa, aircraft for sale in missouri, aircraft for sale in kentucky, aircraft for sale in tennessee, aircraft for sale in ohio, aircraft for sale in minnesota, aircraft for sale in north dakota, aircraft for sale in south dakota, aircraft for sale in nebraska, aircraft for sale in kansas, aircraft for sale in oklahoma, aircraft for sale in arkansas, aircraft for sale in louisiana, aircraft for sale in mississippi, aircraft for sale in alabama, aircraft for sale in georgia, aircraft for sale in florida, aircraft for sale in south carolina, aircraft for sale in north carolina, aircraft for sale in virginia, aircraft for sale in west virginia, aircraft for sale in pennsylvania, aircraft for sale in new york, aircraft for sale in vermont, aircraft for sale in new hampshire, aircraft for sale in maine, aircraft for sale in massachusetts, aircraft for sale in rhode island, aircraft for sale in connecticut, aircraft for sale in new jersey, aircraft for sale in delaware, aircraft for sale in maryland, aircraft for sale in washington dc",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/greg-rosenke-p41WCA9p-ZY-unsplash.jpg",
      imageAlt: "elite flight training student in the cockpit of a Cessna 172",
      headerH1: `Aircraft</br><span class="text-primary-100">For Sale</span>`,
      paragraph:
        "Elite will assist you in the sale of your aircraft for a nominal fee. Avoid the tire kickers and liability issues by allowing us to professionally represent your interests from start to finish.",
      buttons: [
        {
          name: "Contact Us",
          link: "/contact",
          primary: false,
        },
        {
          name: "Call Now",
          link: "tel:8159393575",
          primary: false,
        },
      ],
    },

    fleetGrid: {
      upperHeading: "Explore",
      heading: "Previously Sold Aircraft",
      description: `Our fleet of aircraft is designed to provide you with a diverse range of training options, from single-engine aircraft to multi-engine aircraft. Each aircraft is meticulously maintained to ensure your safety and comfort during your training. Explore our fleet below to learn more about each aircraft and its capabilities.`,
      aircraft: [
        {
          title: "Cirrus SR20",
          aircraftYear: "2007",
          saleStatus: "Sold",
          imagePath: "/src/assets/elite-flight-training-sale-Cirrus-sold.png",
          imageAlt:
            "Elite Flight Training & Aircraft Management Cirrus SR20 aircraft sold by us",
          description:
            "An American piston-engine, four- or five-seat composite monoplane built by Cirrus Aircraft of Duluth, Minnesota. It was the first production general aviation aircraft equipped with a parachute to lower the airplane safely to the ground in an emergency.",
          link: "/our-fleet/cessna-172",
          linkText: "Details",
        },
        {
          title: "Cessna 150",
          aircraftYear: "1972",
          saleStatus: "Sold",
          imagePath:
            "/src/assets/elite-flight-training-sale-Cesnna-150-sold.png",
          imageAlt:
            "Elite Flight Training & Aircraft Management Cessna 150 aircraft sold by us",
          description:
            "A two-seat tricycle gear general aviation airplane that was designed for flight training, touring and personal use. The Cessna 150 is the fifth most produced civilian plane ever, with more than 23,839 aircraft produced.",
          link: "/our-fleet/piper-warrior",
          linkText: "Details",
        },
        {
          title: "Cessna Cardinal 177B",
          aircraftYear: "1972",
          saleStatus: "Sold",
          imagePath:
            "/src/assets/elite-flight-training-sale-Cessna-Cardinal-177B.png",
          imageAlt:
            "Elite Flight Training & Aircraft Management Cessna Cardinal 177B aircraft sold by us",
          description:
            "A light single-engine, high-wing general aviation aircraft intended to replace the Cessna 172 Skyhawk. First announced in 1967, it was produced by the Cessna Aircraft Company between 1968 and 1978.",
          link: "/our-fleet/piper-twin-comanche",
          linkText: "Details",
        },
      ],
    },
  },
};
export default forSaleInfo;
