export interface Product {
  id: string;
  name: string;
  mukhi: string;
  deity: string;
  benefit: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const products: Product[] = [
  {
    id: "1-mukhi",
    name: "1 Mukhi Rudraksha",
    mukhi: "Ek Mukhi",
    deity: "Lord Shiva",
    benefit: "Spiritual awakening, focus & liberation",
    price: 149,
    originalPrice: 199,
    image: img("photo-1545389336-cf090694435e"),
    badge: "Rare",
    rating: 4.9,
    reviews: 212,
  },
  {
    id: "5-mukhi",
    name: "5 Mukhi Rudraksha Mala",
    mukhi: "Panch Mukhi · 108 beads",
    deity: "Kalagni Rudra",
    benefit: "Calm mind, blood pressure & daily japa",
    price: 39,
    originalPrice: 59,
    image: img("photo-1611652022419-a9419f74343d"),
    badge: "Bestseller",
    rating: 4.8,
    reviews: 1840,
  },
  {
    id: "7-mukhi",
    name: "7 Mukhi Rudraksha",
    mukhi: "Saat Mukhi",
    deity: "Goddess Mahalakshmi",
    benefit: "Wealth, abundance & new opportunities",
    price: 79,
    image: img("photo-1518241353330-0f7941c2d9b5"),
    rating: 4.8,
    reviews: 634,
  },
  {
    id: "gauri-shankar",
    name: "Gauri Shankar Rudraksha",
    mukhi: "Naturally joined twin bead",
    deity: "Shiva & Parvati",
    benefit: "Harmony in relationships & family unity",
    price: 119,
    originalPrice: 159,
    image: img("photo-1507003211169-0a1dd7228f2d"),
    badge: "Limited",
    rating: 4.9,
    reviews: 318,
  },
  {
    id: "9-mukhi",
    name: "9 Mukhi Rudraksha",
    mukhi: "Nau Mukhi",
    deity: "Goddess Durga",
    benefit: "Courage, protection & fearlessness",
    price: 99,
    image: img("photo-1544367567-0f2fcb009e0b"),
    rating: 4.7,
    reviews: 287,
  },
  {
    id: "11-mukhi",
    name: "11 Mukhi Rudraksha",
    mukhi: "Gyarah Mukhi",
    deity: "Lord Hanuman",
    benefit: "Willpower, meditation & self-discipline",
    price: 129,
    image: img("photo-1506905925346-21bda4d32df4"),
    rating: 4.8,
    reviews: 196,
  },
  {
    id: "siddha-mala",
    name: "Siddha Mala (1–14 Mukhi)",
    mukhi: "Complete collector set",
    deity: "All deities",
    benefit: "Total wellbeing — the ultimate collection",
    price: 999,
    originalPrice: 1299,
    image: img("photo-1545389336-cf090694435e"),
    badge: "Premium",
    rating: 5.0,
    reviews: 89,
  },
  {
    id: "bracelet",
    name: "Rudraksha Power Bracelet",
    mukhi: "5 Mukhi · elastic fit",
    deity: "Kalagni Rudra",
    benefit: "Everyday calm & grounding, unisex",
    price: 25,
    originalPrice: 35,
    image: img("photo-1611652022419-a9419f74343d"),
    badge: "New",
    rating: 4.7,
    reviews: 942,
  },
];
