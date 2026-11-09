export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    name: "Eli G.",
    date: "May 2025",
    rating: 5,
    text: "Junior was great at the repair. Very honest. Gave me great tips about appliance repair and shopping for new appliances. Will keep Prestige as my number 1 contact for repairs.",
  },
  {
    name: "Edward L.",
    date: "July 2024",
    rating: 5,
    text: "Highly recommended!",
    service: "Refrigerator, Freezer & Ice Maker Repair",
  },
  {
    name: "Terry C.",
    date: "February 2023",
    rating: 5,
    text: "Prompt, very friendly, very professional and diagnosed the problem with my washing machine and was able to repair it right away. I would highly recommend Prestige Appliance Company for sure!",
  },
  {
    name: "Jeffery S.",
    date: "January 2023",
    rating: 5,
    text: "They diagnosed my problem with refrigerator. They definitely can be a company you can count on! Compassionate and honest. Most dependable people!",
  },
  {
    name: "Maria B.",
    date: "January 2023",
    rating: 5,
    text: "On time and efficient.",
    service: "Refrigerator, Freezer & Ice Maker Repair",
  },
  {
    name: "James P.",
    date: "January 2023",
    rating: 5,
    text: "Great service from these folks. Timely and honest customer service. Will recommend to others. Will use again myself if needed.",
  },
  {
    name: "Alexander J.",
    date: "January 2023",
    rating: 5,
    text: "They were very thorough and honest. They diagnosed my problem after a comprehensive check of my refrigerator, showed me the part that needed to be replaced, and recommended that I could save hundreds of dollars by easily replacing the part on my own.",
  },
  {
    name: "Nathaniel B.",
    date: "January 2023",
    rating: 5,
    text: "They are an amazing company, explained everything thoroughly, respectful and know their stuff. Made sure I was aware of everything that was happening. They are really, really good at what they do!",
  },
];
