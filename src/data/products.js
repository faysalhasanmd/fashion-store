// src/data/products.js
// Dummy product data for Oxivos Fashion Store frontend task
//
// NOTE on colorImages:
// - Some URLs are from plus.unsplash.com (Unsplash+ premium) or
//   media.istockphoto.com (signed/watermarked). These may not load
//   reliably when hotlinked. Test each product page after pasting
//   this in, and swap out any broken/watermarked image.

const products = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    image:
      "https://images.unsplash.com/photo-1774527929685-0372244a6232?q=80&w=687&auto=format&fit=crop",
    colorImages: {
      White:
        "https://images.unsplash.com/photo-1774527929685-0372244a6232?q=80&w=687&auto=format&fit=crop",
      Red: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?q=80&w=687&auto=format&fit=crop", // 🟡 Unsplash+ premium — verify it loads
      Gray: "https://images.unsplash.com/photo-1711385893232-992709cee0ef?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.5,
    colors: ["White", "Red", "Gray"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description:
      "A timeless cotton panjabi crafted for everyday comfort and traditional elegance. Breathable fabric, perfect for both casual and semi-formal occasions.",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jacket",
    category: "Jackets",
    price: 2890,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      Blue: "https://plus.unsplash.com/premium_photo-1698260795242-0a3eb6e150e7?q=80&w=687&auto=format&fit=crop", // 🟡 Unsplash+ premium — verify it loads
    },
    rating: 4.7,
    colors: ["Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description:
      "A rugged yet stylish slim-fit denim jacket that pairs perfectly with any casual outfit. Built to last with premium stitching.",
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    category: "Dresses",
    price: 2190,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    colorImages: {
      Red: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      Yellow:
        "https://plus.unsplash.com/premium_photo-1664476946415-19cdad721c53?w=600&auto=format&fit=crop&q=60", // 🟡 Unsplash+ premium — verify it loads
      White:
        "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.6,
    colors: ["Red", "Yellow", "White"],
    sizes: ["S", "M", "L"],
    inStock: true,
    description:
      "Light, breezy, and covered in delicate floral prints — this summer dress is designed for warm days and effortless style.",
  },
  {
    id: 4,
    name: "Basic White T-Shirt",
    category: "T-Shirts",
    price: 590,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    colorImages: {
      Black:
        "https://images.unsplash.com/photo-1627225925683-1da7021732ea?w=600&auto=format&fit=crop&q=60",
      Red: "https://media.istockphoto.com/id/172688640/photo/red-blank-short-sleeved-t-shirt-front-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=rf1IRiD1DKjjCQbi5d5exC4lnCPnHGVRbJjHFuFhQAg=", // 🟡 iStock — verify it loads
    },
    rating: 4.3,
    colors: ["White", "Black", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    description:
      "A wardrobe essential — soft, breathable cotton t-shirt with a clean fit that goes with everything.",
  },
  {
    id: 5,
    name: "Formal Slim Fit Shirt",
    category: "Shirts",
    price: 1690,
    image:
      "https://plus.unsplash.com/premium_photo-1679941667221-d5914d9a47e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    colorImages: {
      White:
        "https://plus.unsplash.com/premium_photo-1679941667221-d5914d9a47e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
      "Sky Blue":
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60",
      Maroon:
        "https://plus.unsplash.com/premium_photo-1669782051654-f8805ea71993?w=600&auto=format&fit=crop&q=60", // 🟡 Unsplash+ premium — verify it loads
    },
    rating: 4.4,
    colors: ["White", "Sky Blue", "Maroon"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description:
      "Sharp, tailored, and office-ready. This slim fit formal shirt is made from wrinkle-resistant fabric for an all-day polished look.",
  },
  {
    id: 6,
    name: "High-Waist Wide Leg Trousers",
    category: "Trousers",
    price: 1990,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    colorImages: {
      Dusty_Pink:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      Orange:
        "https://images.unsplash.com/photo-1652184513381-9755426e7fd2?w=600&auto=format&fit=crop&q=60",
      Black:
        "https://images.unsplash.com/photo-1715541448068-7a6af59ff4a4?w=600&auto=format&fit=crop&q=60",
      White:
        "https://images.unsplash.com/photo-1762343932192-4f49063268d3?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.5,
    colors: ["Dusty Pink", "Orange", "Black", "White"],
    sizes: ["S", "M", "L"],
    inStock: false,
    description:
      "Elegant wide-leg trousers with a flattering high-waist cut. A versatile piece that transitions effortlessly from day to night.",
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    category: "Hoodies",
    price: 1790,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    colorImages: {
      White:
        "https://images.unsplash.com/photo-1688111421205-a0a85415b224?w=600&auto=format&fit=crop&q=60",
      Orange:
        "https://plus.unsplash.com/premium_photo-1705883268316-e7270ceaffcf?w=600&auto=format&fit=crop&q=60", // 🟡 Unsplash+ premium — verify it loads
    },
    rating: 4.8,
    colors: ["Grey", "White", "Orange"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    description:
      "Cozy, oversized, and made for lounging or streetwear looks alike. Heavyweight fleece fabric keeps you warm without the bulk.",
  },
  {
    id: 8,
    name: "Chino Shorts",
    category: "Shorts",
    price: 990,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
    colorImages: {
      Pink: "https://plus.unsplash.com/premium_photo-1689575249309-79f1308d6180?w=600&auto=format&fit=crop&q=60", // 🟡 Unsplash+ premium — verify it loads
      White:
        "https://images.unsplash.com/photo-1697319452360-ee47502e39f6?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.2,
    colors: ["Khaki", "Pink", "White"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description:
      "Comfortable chino shorts with a tailored fit — ideal for casual summer outings or weekend errands.",
  },
  {
    id: 9,
    name: "Silk Blend Saree",
    category: "Saree",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80",
    colorImages: {
      Yellow:
        "https://images.unsplash.com/photo-1609748341932-f0206c09412b?w=600&auto=format&fit=crop&q=60",
      Green:
        "https://images.unsplash.com/photo-1610030469245-ab65c4583802?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.9,
    colors: ["Red", "Yellow", "Green"],
    sizes: ["Free Size"],
    inStock: true,
    description:
      "A graceful silk-blend saree with intricate border work, perfect for festive occasions and celebrations.",
  },
  {
    id: 10,
    name: "Leather Ankle Boots",
    category: "Footwear",
    price: 3290,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80",
    colorImages: {
      Chestnut_Brown:
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80",
      Brown:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=60",
      // Assumed "Master" meant the Black variant — rename the color/key below if that's wrong
      Wheat:
        "https://media.istockphoto.com/id/2242351185/photo/woman-in-stylish-leather-ankle-boots-on-city-street-after-rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=81QPcont6dNcw5KLqwyi6pMPTF7CCe2Piosk6bcwE04=", // 🟡 iStock — verify it loads
    },
    rating: 4.6,
    colors: ["Chestnut Brown", "Brown", "Wheat"],
    sizes: ["40", "41", "42", "43"],
    inStock: true,
    description:
      "Premium genuine leather ankle boots with a durable sole — built for both style and everyday wear.",
  },
  {
    id: 11,
    name: "Knitted Cardigan",
    category: "Sweaters",
    price: 2390,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    colorImages: {
      Green:
        "https://images.unsplash.com/photo-1605131546231-a5f385db4a6b?w=600&auto=format&fit=crop&q=60",
      Olive:
        "https://images.unsplash.com/photo-1758981400298-78cd18eb6793?q=80&w=687&auto=format&fit=crop",
    },
    rating: 4.4,
    colors: ["Beige", "Olive", "Green"],
    sizes: ["S", "M", "L"],
    inStock: false,
    description:
      "A soft knitted cardigan that adds warmth and texture to any outfit. Effortlessly layers over t-shirts or dresses.",
  },
  {
    id: 12,
    name: "Structured Tote Bag",
    category: "Accessories",
    price: 1590,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    colorImages: {
      Red: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      Black:
        "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?w=600&auto=format&fit=crop&q=60",
      Gray: "https://media.istockphoto.com/id/2227249721/photo/wallet-hanbag.webp?a=1&b=1&s=612x612&w=0&k=20&c=8MntLHnKj3G4xRG7gQJYZLcJuipKb6MPprpuZ_Vd1TU=", // 🟡 iStock — verify it loads
      // Assumed "Master" meant the Tan (default) variant
      Tan: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60",
    },
    rating: 4.5,
    colors: ["Red", "Tan", "Black", "Gray"],
    sizes: ["One Size"],
    inStock: true,
    description:
      "A spacious, structured tote bag crafted from durable vegan leather — the perfect finishing touch for any outfit.",
  },
];

export default products;
