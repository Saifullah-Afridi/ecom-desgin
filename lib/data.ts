export const products = [
  {
    id: "1",
    name: "Vertical striped Shirt",
    image: "/products/product1.png",
    rating: 5.0,
    price: 212,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: "2",
    name: "Casual Cotton T-Shirt",
    image: "/products/product2.png",
    rating: 4.5,
    price: 89,
    originalPrice: 120,
    discount: 26,
  },
  {
    id: "3",
    name: "Classic Denim Jacket",
    image: "/products/product3.png",
    rating: 4.8,
    price: 199,
    originalPrice: 280,
    discount: 29,
  },
  {
    id: "4",
    name: "Premium Wool Coat",
    image: "/products/product4.png",
    rating: 5.0,
    price: 450,
    originalPrice: 600,
    discount: 25,
  },
  {
    id: "5",
    name: "Slim Fit Chinos",
    image: "/products/product5.png",
    rating: 4.2,
    price: 145,
    originalPrice: 200,
    discount: 27,
  },
  {
    id: "6",
    name: "Summer Linen Shirt",
    image: "/products/product6.png",
    rating: 4.7,
    price: 95,
    originalPrice: 140,
    discount: 32,
  },
  {
    id: "7",
    name: "Black Formal Trousers",
    image: "/products/product7.png",
    rating: 4.9,
    price: 178,
    originalPrice: 230,
    discount: 22,
  },
  {
    id: "8",
    name: "Checkered Casual Shirt",
    image: "/products/product8.png",
    rating: 4.3,
    price: 110,
    originalPrice: 160,
    discount: 31,
  },
];

// export interface ProductDetails {
//   id: string;
//   name: string;
//   image: string;
//   gallery: string[];
//   rating: number;
//   reviews: number;
//   price: number;
//   originalPrice: number;
//   discount?: number;
//   description: string;
//   colors: string[];
//   sizes: string[];
//   stock: number;
//   sku: string;
//   category: string;
//   material: string;
//   careInstructions: string[];
//   reviews_list: {
//     id: string;
//     author: string;
//     rating: number;
//     date: string;
//     comment: string;
//     verified: boolean;
//   }[];
//   specifications: {
//     label: string;
//     value: string;
//   }[];
// }

// export const productDetails: Record<string, ProductDetails> = {
//   "1": {
//     id: "1",
//     name: "Vertical striped Shirt",
//     image: "/images/new-arr-1.jpg",
//     gallery: [
//       "/images/new-arr-1.jpg",
//       "/images/new-arr-1-alt1.jpg",
//       "/images/new-arr-1-alt2.jpg",
//       "/images/new-arr-1-alt3.jpg",
//     ],
//     rating: 5.0,
//     reviews: 124,
//     price: 212,
//     originalPrice: 260,
//     discount: 20,
//     description:
//       "Experience timeless style with our Vertical striped Shirt. Crafted from premium cotton blend, this shirt features classic vertical stripes that elongate the silhouette. Perfect for both casual outings and semi-formal occasions. The breathable fabric ensures comfort throughout the day.",
//     colors: ["Black", "White", "Navy", "Gray"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 45,
//     sku: "VERT-STRIPE-001",
//     category: "Shirts",
//     material: "100% Cotton",
//     careInstructions: [
//       "Machine wash in cold water",
//       "Use mild detergent",
//       "Do not bleach",
//       "Tumble dry on low heat",
//       "Iron on medium heat if needed",
//     ],
//     specifications: [
//       { label: "Fabric", value: "100% Cotton" },
//       { label: "Weight", value: "180 gsm" },
//       { label: "Fit", value: "Regular" },
//       { label: "Sleeve Type", value: "Long Sleeve" },
//       { label: "Pattern", value: "Vertical Stripes" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r1",
//         author: "Sarah Johnson",
//         rating: 5,
//         date: "2024-01-15",
//         comment:
//           "Excellent quality and fit! The stripes are perfectly aligned and the fabric is very comfortable. Highly recommended!",
//         verified: true,
//       },
//       {
//         id: "r2",
//         author: "Michael Chen",
//         rating: 5,
//         date: "2024-01-10",
//         comment:
//           "Great shirt at a good price. The colors are true to the picture and it arrived quickly.",
//         verified: true,
//       },
//       {
//         id: "r3",
//         author: "Emma Wilson",
//         rating: 4,
//         date: "2024-01-08",
//         comment:
//           "Nice quality, but it shrank a bit after the first wash. Recommend washing in cold water.",
//         verified: true,
//       },
//     ],
//   },
//   "2": {
//     id: "2",
//     name: "Casual Cotton T-Shirt",
//     image: "/images/new-arr-2.jpg",
//     gallery: [
//       "/images/new-arr-2.jpg",
//       "/images/new-arr-2-alt1.jpg",
//       "/images/new-arr-2-alt2.jpg",
//     ],
//     rating: 4.5,
//     reviews: 89,
//     price: 89,
//     originalPrice: 120,
//     discount: 26,
//     description:
//       "The ultimate everyday essential. Our Casual Cotton T-Shirt is made from soft, breathable 100% cotton that feels great against your skin. Versatile enough to pair with anything in your wardrobe.",
//     colors: ["White", "Black", "Navy", "Red", "Gray"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 120,
//     sku: "CASUAL-TEE-002",
//     category: "T-Shirts",
//     material: "100% Organic Cotton",
//     careInstructions: [
//       "Machine wash in warm water",
//       "Turn inside out before washing",
//       "Use mild detergent",
//       "Tumble dry on medium heat",
//       "Do not iron if not necessary",
//     ],
//     specifications: [
//       { label: "Fabric", value: "100% Organic Cotton" },
//       { label: "Weight", value: "150 gsm" },
//       { label: "Fit", value: "Regular" },
//       { label: "Sleeve Type", value: "Short Sleeve" },
//       { label: "Neckline", value: "Crew Neck" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r4",
//         author: "David Brown",
//         rating: 5,
//         date: "2024-01-12",
//         comment:
//           "Perfect basic tee! Comfortable, well-made, and the fit is just right.",
//         verified: true,
//       },
//       {
//         id: "r5",
//         author: "Lisa Anderson",
//         rating: 4,
//         date: "2024-01-05",
//         comment:
//           "Good quality shirt. Colors are vibrant. A little snug in the arms but overall very happy.",
//         verified: true,
//       },
//     ],
//   },
//   "3": {
//     id: "3",
//     name: "Classic Denim Jacket",
//     image: "/images/new-arr-3.jpg",
//     gallery: [
//       "/images/new-arr-3.jpg",
//       "/images/new-arr-3-alt1.jpg",
//       "/images/new-arr-3-alt2.jpg",
//       "/images/new-arr-3-alt3.jpg",
//     ],
//     rating: 4.8,
//     reviews: 156,
//     price: 199,
//     originalPrice: 280,
//     discount: 29,
//     description:
//       "The iconic denim jacket that never goes out of style. This classic piece features a perfect fit and quality construction that will last for years. Layer it over any outfit for an instant cool-factor boost.",
//     colors: ["Light Blue", "Dark Blue", "Black", "Medium Blue"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 67,
//     sku: "DENIM-JACK-003",
//     category: "Jackets",
//     material: "100% Cotton Denim",
//     careInstructions: [
//       "Turn inside out before washing",
//       "Wash with similar colors",
//       "Use cold water",
//       "Do not bleach",
//       "Air dry or tumble dry on low",
//     ],
//     specifications: [
//       { label: "Fabric", value: "100% Cotton Denim" },
//       { label: "Weight", value: "450 gsm" },
//       { label: "Fit", value: "Classic" },
//       { label: "Closure", value: "Button" },
//       { label: "Pockets", value: "Yes (4)" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r6",
//         author: "James Martinez",
//         rating: 5,
//         date: "2024-01-18",
//         comment:
//           "Outstanding denim jacket! Great fit, excellent quality, and the price is unbeatable.",
//         verified: true,
//       },
//       {
//         id: "r7",
//         author: "Patricia Lee",
//         rating: 5,
//         date: "2024-01-14",
//         comment:
//           "Beautiful jacket. Worth every penny. Will definitely buy again!",
//         verified: true,
//       },
//       {
//         id: "r8",
//         author: "Robert Taylor",
//         rating: 4,
//         date: "2024-01-11",
//         comment:
//           "Good quality but runs a bit large. Recommend sizing down one size.",
//         verified: true,
//       },
//     ],
//   },
//   "4": {
//     id: "4",
//     name: "Premium Wool Coat",
//     image: "/images/new-arr-4.jpg",
//     gallery: [
//       "/images/new-arr-4.jpg",
//       "/images/new-arr-4-alt1.jpg",
//       "/images/new-arr-4-alt2.jpg",
//       "/images/new-arr-4-alt3.jpg",
//     ],
//     rating: 5.0,
//     reviews: 98,
//     price: 450,
//     originalPrice: 600,
//     discount: 25,
//     description:
//       "Elevate your winter wardrobe with our Premium Wool Coat. Crafted from high-quality wool blend, this sophisticated coat provides warmth without bulk. Perfect for professional settings or casual outings during cold weather.",
//     colors: ["Black", "Camel", "Navy", "Charcoal"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 32,
//     sku: "WOOL-COAT-004",
//     category: "Outerwear",
//     material: "80% Wool, 20% Synthetic",
//     careInstructions: [
//       "Dry clean only recommended",
//       "Can be hand washed in cool water with wool detergent",
//       "Do not wring, squeeze gently",
//       "Air dry flat",
//       "Store in cool, dry place",
//     ],
//     specifications: [
//       { label: "Fabric", value: "80% Wool, 20% Synthetic" },
//       { label: "Weight", value: "700 gsm" },
//       { label: "Fit", value: "Tailored" },
//       { label: "Length", value: "Knee Length" },
//       { label: "Lining", value: "Silk" },
//       { label: "Care", value: "Dry Clean Recommended" },
//     ],
//     reviews_list: [
//       {
//         id: "r9",
//         author: "Catherine White",
//         rating: 5,
//         date: "2024-01-16",
//         comment:
//           "Absolutely stunning coat! Looks expensive and feels premium. Very happy with this purchase.",
//         verified: true,
//       },
//       {
//         id: "r10",
//         author: "Thomas Davis",
//         rating: 5,
//         date: "2024-01-13",
//         comment:
//           "Excellent quality wool coat. Keeps me warm and looks sophisticated. Highly recommend!",
//         verified: true,
//       },
//     ],
//   },
//   "5": {
//     id: "5",
//     name: "Slim Fit Chinos",
//     image: "/images/new-arr-5.jpg",
//     gallery: [
//       "/images/new-arr-5.jpg",
//       "/images/new-arr-5-alt1.jpg",
//       "/images/new-arr-5-alt2.jpg",
//     ],
//     rating: 4.2,
//     reviews: 67,
//     price: 145,
//     originalPrice: 200,
//     discount: 27,
//     description:
//       "A wardrobe staple that works for every occasion. Our Slim Fit Chinos offer a modern, streamlined silhouette while maintaining comfort. Perfect for the office, weekend outings, or casual dinners.",
//     colors: ["Khaki", "Navy", "Black", "Olive", "Burgundy"],
//     sizes: ["28", "30", "32", "34", "36", "38"],
//     stock: 85,
//     sku: "CHINO-SLIM-005",
//     category: "Pants",
//     material: "98% Cotton, 2% Spandex",
//     careInstructions: [
//       "Machine wash in warm water",
//       "Use mild detergent",
//       "Turn inside out to prevent fading",
//       "Tumble dry on low heat",
//       "Iron on medium heat for crisp look",
//     ],
//     specifications: [
//       { label: "Fabric", value: "98% Cotton, 2% Spandex" },
//       { label: "Weight", value: "280 gsm" },
//       { label: "Fit", value: "Slim" },
//       { label: "Rise", value: "Mid-Rise" },
//       { label: "Pockets", value: "Yes (4)" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r11",
//         author: "Kevin Robinson",
//         rating: 5,
//         date: "2024-01-17",
//         comment:
//           "Great fit and quality. These chinos are perfect for work or casual wear.",
//         verified: true,
//       },
//       {
//         id: "r12",
//         author: "Nancy Garcia",
//         rating: 4,
//         date: "2024-01-09",
//         comment:
//           "Nice chinos. The fit is true to size. A bit stiff at first but softens after a few wears.",
//         verified: true,
//       },
//     ],
//   },
//   "6": {
//     id: "6",
//     name: "Summer Linen Shirt",
//     image: "/images/new-arr-6.jpg",
//     gallery: [
//       "/images/new-arr-6.jpg",
//       "/images/new-arr-6-alt1.jpg",
//       "/images/new-arr-6-alt2.jpg",
//     ],
//     rating: 4.7,
//     reviews: 102,
//     price: 95,
//     originalPrice: 140,
//     discount: 32,
//     description:
//       "Stay cool and stylish this summer with our breathable Linen Shirt. Made from 100% pure linen, this shirt keeps you comfortable in hot weather while maintaining a relaxed, sophisticated look.",
//     colors: ["White", "Light Blue", "Beige", "Sage Green"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 110,
//     sku: "LINEN-SHIRT-006",
//     category: "Shirts",
//     material: "100% Pure Linen",
//     careInstructions: [
//       "Machine wash in cool water",
//       "Hang dry preferred",
//       "Can tumble dry on low",
//       "Iron on high heat while damp for best results",
//       "Do not bleach",
//     ],
//     specifications: [
//       { label: "Fabric", value: "100% Pure Linen" },
//       { label: "Weight", value: "140 gsm" },
//       { label: "Fit", value: "Relaxed" },
//       { label: "Sleeve Type", value: "Short Sleeve" },
//       { label: "Neckline", value: "Crew Neck" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r13",
//         author: "Jennifer Harris",
//         rating: 5,
//         date: "2024-01-19",
//         comment:
//           "Perfect summer shirt! So breathable and comfortable. Love the colors available.",
//         verified: true,
//       },
//       {
//         id: "r14",
//         author: "Mark Thompson",
//         rating: 4,
//         date: "2024-01-06",
//         comment:
//           "Great linen shirt. As expected, it wrinkles easily but that's the nature of linen. Very happy with purchase.",
//         verified: true,
//       },
//     ],
//   },
//   "7": {
//     id: "7",
//     name: "Black Formal Trousers",
//     image: "/images/new-arr-7.jpg",
//     gallery: [
//       "/images/new-arr-7.jpg",
//       "/images/new-arr-7-alt1.jpg",
//       "/images/new-arr-7-alt2.jpg",
//     ],
//     rating: 4.9,
//     reviews: 134,
//     price: 178,
//     originalPrice: 230,
//     discount: 22,
//     description:
//       "Make a statement in our Black Formal Trousers. Tailored to perfection with impeccable finishes, these trousers are ideal for business meetings, formal events, and professional settings. The perfect foundation for any formal wardrobe.",
//     colors: ["Black", "Navy", "Charcoal", "Dark Gray"],
//     sizes: ["28", "30", "32", "34", "36", "38"],
//     stock: 56,
//     sku: "FORMAL-TROU-007",
//     category: "Pants",
//     material: "100% Polyester",
//     careInstructions: [
//       "Dry clean recommended for best results",
//       "Can be hand washed in cool water",
//       "Use gentle detergent",
//       "Do not wring",
//       "Hang to dry",
//     ],
//     specifications: [
//       { label: "Fabric", value: "100% Polyester" },
//       { label: "Weight", value: "320 gsm" },
//       { label: "Fit", value: "Tailored" },
//       { label: "Rise", value: "Mid-Rise" },
//       { label: "Closure", value: "Zip & Button" },
//       { label: "Care", value: "Dry Clean Recommended" },
//     ],
//     reviews_list: [
//       {
//         id: "r15",
//         author: "Susan Clark",
//         rating: 5,
//         date: "2024-01-20",
//         comment:
//           "Perfect formal trousers! Tailored fit is excellent and the material feels premium.",
//         verified: true,
//       },
//       {
//         id: "r16",
//         author: "Richard Miller",
//         rating: 5,
//         date: "2024-01-07",
//         comment:
//           "High quality trousers at a great price. Exactly what I was looking for for my work wardrobe.",
//         verified: true,
//       },
//       {
//         id: "r17",
//         author: "Elizabeth Moore",
//         rating: 4,
//         date: "2024-01-02",
//         comment:
//           "Great trousers. Fit is slightly snug around the waist initially but stretches nicely.",
//         verified: true,
//       },
//     ],
//   },
//   "8": {
//     id: "8",
//     name: "Checkered Casual Shirt",
//     image: "/images/new-arr-8.jpg",
//     gallery: [
//       "/images/new-arr-8.jpg",
//       "/images/new-arr-8-alt1.jpg",
//       "/images/new-arr-8-alt2.jpg",
//       "/images/new-arr-8-alt3.jpg",
//     ],
//     rating: 4.3,
//     reviews: 78,
//     price: 110,
//     originalPrice: 160,
//     discount: 31,
//     description:
//       "Add a touch of casual charm to your wardrobe with our Checkered Casual Shirt. Featuring a timeless checkered pattern, this shirt is versatile enough for weekend hangouts or casual workplace settings. Comfortable, stylish, and easy to care for.",
//     colors: ["Red & White", "Blue & White", "Green & White", "Brown & Tan"],
//     sizes: ["XS", "S", "M", "L", "XL", "XXL"],
//     stock: 78,
//     sku: "CHECK-SHIRT-008",
//     category: "Shirts",
//     material: "65% Cotton, 35% Polyester",
//     careInstructions: [
//       "Machine wash in warm water",
//       "Wash with similar colors",
//       "Use mild detergent",
//       "Tumble dry on medium heat",
//       "Iron on medium heat if needed",
//     ],
//     specifications: [
//       { label: "Fabric", value: "65% Cotton, 35% Polyester" },
//       { label: "Weight", value: "200 gsm" },
//       { label: "Fit", value: "Regular" },
//       { label: "Sleeve Type", value: "Long Sleeve" },
//       { label: "Pattern", value: "Checkered" },
//       { label: "Care", value: "Machine Wash" },
//     ],
//     reviews_list: [
//       {
//         id: "r18",
//         author: "Daniel Wilson",
//         rating: 4,
//         date: "2024-01-21",
//         comment:
//           "Nice casual shirt. Pattern is clear and colors are vibrant. Very happy with the purchase.",
//         verified: true,
//       },
//       {
//         id: "r19",
//         author: "Michelle Jackson",
//         rating: 4,
//         date: "2024-01-04",
//         comment:
//           "Good quality checkered shirt. Fits well and is very comfortable for casual wear.",
//         verified: true,
//       },
//     ],
//   },
// };

export interface ProductDetails {
  id: string;
  name: string;
  image: string;
  gallery: string[];
  rating: number;
  price: number;
  originalPrice: number;
  discount?: number;
  description: string;
  colors: {
    hex: string;
  }[];
  sizes: string[];
  stock: number;
}

export const productDetails: ProductDetails[] = [
  {
    id: "1",
    name: "One Life Graphic T-shirt",
    image: "/products/product1.png",
    gallery: [
      "/products/product1.png",
      "/products/product1-alt1.png",
      "/products/product1-alt2.png",
    ],
    rating: 4.5,
    price: 300,
    originalPrice: 300,
    discount: 0,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: [{ hex: "#4A4A4A" }, { hex: "#1ee4" }, { hex: "#36454F" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 45,
  },
  {
    id: "2",
    name: "Casual Cotton T-Shirt",
    image: "/products/product2.png",
    gallery: [
      "/products/product2.png",
      "/products/product2-alt1.png",
      "/products/product2-alt2.png",
    ],
    rating: 4.5,
    price: 89,
    originalPrice: 120,
    discount: 26,
    description:
      "The ultimate everyday essential. Our Casual Cotton T-Shirt is made from soft, breathable 100% cotton that feels great against your skin. Versatile enough to pair with anything in your wardrobe.",
    colors: [{ hex: "#000000" }, { hex: "#000033" }, { hex: "#36454F" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 120,
  },
  {
    id: "3",
    name: "Classic Denim Jacket",
    image: "/products/product3.png",
    gallery: [
      "/products/product3.png",
      "/products/product3-alt1.png",
      "/products/product3-alt2.png",
    ],
    rating: 4.8,
    price: 199,
    originalPrice: 280,
    discount: 29,
    description:
      "The iconic denim jacket that never goes out of style. This classic piece features a perfect fit and quality construction that will last for years. Layer it over any outfit for an instant cool-factor boost.",
    colors: [{ hex: "#00004D" }, { hex: "#000033" }, { hex: "#000000" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 67,
  },
  {
    id: "4",
    name: "Premium Wool Coat",
    image: "/products/product4.png",
    gallery: [
      "/products/product4.png",
      "/products/product4-alt1.png",
      "/products/product4-alt2.png",
    ],
    rating: 5.0,
    price: 450,
    originalPrice: 600,
    discount: 25,
    description:
      "Elevate your winter wardrobe with our Premium Wool Coat. Crafted from high-quality wool blend, this sophisticated coat provides warmth without bulk. Perfect for professional settings or casual outings during cold weather.",
    colors: [{ hex: "#000000" }, { hex: "#36454F" }, { hex: "#000033" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 32,
  },
  {
    id: "5",
    name: "Slim Fit Chinos",
    image: "/products/product5.png",
    gallery: [
      "/products/product5.png",
      "/products/product5-alt1.png",
      "/products/product5-alt2.png",
    ],
    rating: 4.2,
    price: 145,
    originalPrice: 200,
    discount: 27,
    description:
      "A wardrobe staple that works for every occasion. Our Slim Fit Chinos offer a modern, streamlined silhouette while maintaining comfort. Perfect for the office, weekend outings, or casual dinners.",
    colors: [{ hex: "#556B2F" }, { hex: "#000033" }, { hex: "#000000" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 85,
  },
  {
    id: "6",
    name: "Summer Linen Shirt",
    image: "/products/product6.png",
    gallery: [
      "/products/product6.png",
      "/products/product6-alt1.png",
      "/products/product6-alt2.png",
    ],
    rating: 4.7,
    price: 95,
    originalPrice: 140,
    discount: 32,
    description:
      "Stay cool and stylish this summer with our breathable Linen Shirt. Made from 100% pure linen, this shirt keeps you comfortable in hot weather while maintaining a relaxed, sophisticated look.",
    colors: [{ hex: "#36454F" }, { hex: "#00004D" }, { hex: "#654321" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 110,
  },
  {
    id: "7",
    name: "Black Formal Trousers",
    image: "/products/product7.png",
    gallery: [
      "/products/product7.png",
      "/products/product7-alt1.png",
      "/products/product7-alt2.png",
    ],
    rating: 4.9,
    price: 178,
    originalPrice: 230,
    discount: 22,
    description:
      "Make a statement in our Black Formal Trousers. Tailored to perfection with impeccable finishes, these trousers are ideal for business meetings, formal events, and professional settings.",
    colors: [{ hex: "#000000" }, { hex: "#000033" }, { hex: "#36454F" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 56,
  },
  {
    id: "8",
    name: "Checkered Casual Shirt",
    image: "/products/product8.png",
    gallery: [
      "/products/product8.png",
      "/products/product8-alt1.png",
      "/products/product8-alt2.png",
    ],
    rating: 4.3,
    price: 110,
    originalPrice: 160,
    discount: 31,
    description:
      "Add a touch of casual charm to your wardrobe with our Checkered Casual Shirt. Featuring a timeless checkered pattern, this shirt is versatile enough for weekend hangouts or casual workplace settings.",
    colors: [{ hex: "#8B0000" }, { hex: "#000080" }, { hex: "#004D00" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 78,
  },
];
