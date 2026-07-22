export type Bike = {
  slug: string;
  name: string;
  category: string;
  dailyRate: number;
  seats: number;
  engine: string;
  blurb: string;
  image: string;
};

export const BIKES: Bike[] = [
  {
    slug: "street-glide",
    name: "Harley-Davidson Street Glide",
    category: "Touring",
    dailyRate: 189,
    seats: 2,
    engine: "Milwaukee-Eight 117",
    blurb:
      "The classic American tourer. Batwing fairing, booming audio, and all-day comfort for coastal cruises down to Marco Island.",
    image: "/bikes/street-glide.jpg",
  },
  {
    slug: "rebel-500",
    name: "Honda Rebel 500",
    category: "Cruiser",
    dailyRate: 99,
    seats: 2,
    engine: "471cc parallel twin",
    blurb:
      "Light, low, and easygoing. The perfect first rental for exploring downtown Fort Myers and the beach causeways.",
    image: "/bikes/rebel-500.jpg",
  },
  {
    slug: "ninja-650",
    name: "Kawasaki Ninja 650",
    category: "Sport",
    dailyRate: 119,
    seats: 2,
    engine: "649cc parallel twin",
    blurb:
      "Sharp looks, friendly power. Carve the curves out toward Alva and the Caloosahatchee backroads.",
    image: "/bikes/ninja-650.jpg",
  },
  {
    slug: "r1250gs",
    name: "BMW R 1250 GS",
    category: "Adventure",
    dailyRate: 179,
    seats: 2,
    engine: "1254cc boxer twin",
    blurb:
      "The go-anywhere legend. Loaded with luggage for multi-day runs to the Everglades and the Keys.",
    image: "/bikes/r1250gs.jpg",
  },
  {
    slug: "vespa-gts",
    name: "Vespa GTS 300",
    category: "Scooter",
    dailyRate: 79,
    seats: 2,
    engine: "278cc single",
    blurb:
      "Island-hopping made stylish. Ideal for Sanibel, Captiva, and Fort Myers Beach parking that bikes only dream of.",
    image: "/bikes/vespa-gts.jpg",
  },
  {
    slug: "ryker-900",
    name: "Can-Am Ryker 900",
    category: "Trike",
    dailyRate: 149,
    seats: 1,
    engine: "900cc Rotax triple",
    blurb:
      "Three wheels, zero balance required. No motorcycle endorsement needed in Florida — twist and go.",
    image: "/bikes/ryker-900.jpg",
  },
];
