export interface LocationInfo {
  slug: string;
  name: string;
  shortName: string;
  county: string;
  description: string;
  context: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationInfo[] = [
  {
    slug: "deerfield-beach-fl",
    name: "Deerfield Beach",
    shortName: "Deerfield Beach",
    county: "Broward County",
    description:
      "Deerfield Beach is the home base of Prestige Appliance LLC. We provide appliance repair service to homes throughout Deerfield Beach, FL — from the coastal neighborhoods near the pier to the residential communities west of Federal Highway.",
    context:
      "Deerfield Beach is a coastal city in northern Broward County, known for its award-winning Blue Wave beach, the International Fishing Pier, and quiet residential neighborhoods. Prestige Appliance LLC is based right here in Deerfield Beach, so when your refrigerator stops cooling or your washer won't drain, you're calling a local company that knows the area and can respond quickly.",
    faqs: [
      {
        q: "Is Prestige Appliance LLC actually located in Deerfield Beach?",
        a: "Yes. Prestige Appliance LLC is based in Deerfield Beach, FL. We are a local appliance repair company serving Deerfield Beach and nearby South Florida communities. Call (954) 234-9371 to schedule service.",
      },
      {
        q: "How quickly can you come to my Deerfield Beach home?",
        a: "Because we are based in Deerfield Beach, we can often respond quickly to service calls in the area. Call us at (954) 234-9371 and we will discuss the earliest available appointment.",
      },
      {
        q: "Do you serve the neighborhoods near the Deerfield Beach pier?",
        a: "Yes. We serve Deerfield Beach neighborhoods from the coastal area near the pier and pier to the residential communities further west. Call (954) 234-9371 to confirm service for your address.",
      },
    ],
  },
  {
    slug: "boca-raton-fl",
    name: "Boca Raton",
    shortName: "Boca Raton",
    county: "Palm Beach County",
    description:
      "Prestige Appliance LLC provides appliance repair service to homes in Boca Raton, FL — just north of our Deerfield Beach base. From downtown Boca to the residential communities west of I-95, we service refrigerators, washers, dryers, dishwashers, ovens, and more.",
    context:
      "Boca Raton is a city in southern Palm Beach County, immediately north of Deerfield Beach. Known for its upscale communities, Mizner Park, and Florida Atlantic University, Boca Raton has a wide range of homes — from waterfront condos to single-family residences. Because we are based in neighboring Deerfield Beach, Prestige Appliance LLC is just a short drive away for Boca Raton appliance repair.",
    faqs: [
      {
        q: "Do you serve Boca Raton for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Boca Raton, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit to your Boca Raton home.",
      },
      {
        q: "Can you repair appliances in Boca Raton condos and apartments?",
        a: "Yes. We service appliances in Boca Raton condos, apartments, and single-family homes. Call us at (954) 234-9371 to describe your appliance and the issue.",
      },
      {
        q: "How far is Boca Raton from your location?",
        a: "Boca Raton is immediately north of our Deerfield Beach base, so we can typically reach Boca Raton homes quickly. Call (954) 234-9371 to discuss availability.",
      },
    ],
  },
  {
    slug: "pompano-beach-fl",
    name: "Pompano Beach",
    shortName: "Pompano Beach",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Pompano Beach, FL — just south of our Deerfield Beach base. We service refrigerators, washers, dryers, dishwashers, ovens, stoves, and more throughout Pompano Beach.",
    context:
      "Pompano Beach is a coastal city in Broward County, immediately south of Deerfield Beach. Known for its beach, the Hillsboro Lighthouse, and the Pompano Beach Pier, the city includes a mix of waterfront homes, condos, and residential neighborhoods. Prestige Appliance LLC is based right next door in Deerfield Beach, making Pompano Beach a short drive for our technicians.",
    faqs: [
      {
        q: "Do you serve Pompano Beach for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Pompano Beach, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit.",
      },
      {
        q: "Can you repair both kitchen and laundry appliances in Pompano Beach?",
        a: "Yes. We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Pompano Beach homes. Call (954) 234-9371 to describe your appliance issue.",
      },
      {
        q: "How quickly can you reach Pompano Beach?",
        a: "Pompano Beach is immediately south of our Deerfield Beach base, so we can often reach Pompano Beach homes quickly. Call (954) 234-9371 to discuss the earliest available appointment.",
      },
    ],
  },
  {
    slug: "coconut-creek-fl",
    name: "Coconut Creek",
    shortName: "Coconut Creek",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Coconut Creek, FL — a residential community just west of our Deerfield Beach base. We service all major household appliances for Coconut Creek residents.",
    context:
      "Coconut Creek is a city in Broward County, just west of Deerfield Beach. Known for its residential communities, parks, and the Seminole Casino Coconut Creek, the city is home to many single-family homes and condos. Because we are based in neighboring Deerfield Beach, Prestige Appliance LLC can reach Coconut Creek homes quickly for appliance repair.",
    faqs: [
      {
        q: "Do you serve Coconut Creek for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Coconut Creek, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit.",
      },
      {
        q: "Can you repair appliances in Coconut Creek condos and homes?",
        a: "Yes. We service appliances in both Coconut Creek condos and single-family homes. Call us at (954) 234-9371 to describe your appliance and the problem.",
      },
      {
        q: "How far is Coconut Creek from your location?",
        a: "Coconut Creek is just west of our Deerfield Beach base, so we can typically reach Coconut Creek homes quickly. Call (954) 234-9371 to discuss availability.",
      },
    ],
  },
  {
    slug: "coral-springs-fl",
    name: "Coral Springs",
    shortName: "Coral Springs",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Coral Springs, FL. From refrigerators that won't cool to dryers that won't heat, our technicians service all major household appliances for Coral Springs residents.",
    context:
      "Coral Springs is a city in Broward County, northwest of Deerfield Beach. Known for its family-friendly neighborhoods, parks, and top-rated schools, Coral Springs is one of the larger residential communities in northern Broward County. Prestige Appliance LLC serves Coral Springs from our nearby Deerfield Beach base.",
    faqs: [
      {
        q: "Do you serve Coral Springs for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Coral Springs, FL. Call (954) 234-9371 to schedule a service visit to your Coral Springs home.",
      },
      {
        q: "What appliances do you repair in Coral Springs?",
        a: "We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Coral Springs homes. Call (954) 234-9371 to describe your appliance issue.",
      },
      {
        q: "Can you come out the same day in Coral Springs?",
        a: "Same-day availability depends on our current schedule. Call us at (954) 234-9371 and we will discuss the earliest available appointment for your Coral Springs home.",
      },
    ],
  },
  {
    slug: "margate-fl",
    name: "Margate",
    shortName: "Margate",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Margate, FL. Whether your refrigerator has stopped cooling or your washer won't drain, our technicians service all major household appliances for Margate residents.",
    context:
      "Margate is a city in Broward County, just west of Pompano Beach and near Deerfield Beach. A primarily residential community with parks and neighborhoods, Margate is a short drive from our Deerfield Beach base, allowing Prestige Appliance LLC to respond quickly to appliance repair calls.",
    faqs: [
      {
        q: "Do you serve Margate for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Margate, FL. Call (954) 234-9371 to schedule a service visit to your Margate home.",
      },
      {
        q: "What appliances do you repair in Margate?",
        a: "We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Margate homes. Call (954) 234-9371 to describe your issue.",
      },
      {
        q: "How quickly can you reach Margate?",
        a: "Margate is near our Deerfield Beach base, so we can often reach Margate homes quickly. Call (954) 234-9371 to discuss the earliest available appointment.",
      },
    ],
  },
];

export const locationSlugs = locations.map((l) => l.slug);

export function getLocation(slug: string): LocationInfo | undefined {
  return locations.find((l) => l.slug === slug);
}
