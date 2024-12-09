 const items = [
    {
      "product_id": "P001",
      "product_title": "Samsung Galaxy S23 Ultra",
      "product_image": "https://i.ibb.co.com/QjRkNyw/mob.jpg",
      "category": "Smartphones",
      "price": 1299,
      "description": "Experience the ultimate smartphone with the iPhone 15 Pro Max.",
      "specification": [
        "6.7-inch Super Retina XDR display",
        "A17 Bionic chip",
        "Triple-camera system (48MP Main, 12MP Telephoto, 12MP Ultrawide)",
        "LiDAR Scanner",
        "Up to 2TB storage"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": "P002",
      "product_title": "Samsung Galaxy S23 Ultra",
      "product_image": "https://i.ibb.co.com/QjRkNyw/mob.jpg",
      "category": "Smartphones",
      "price": 1199,
      "description": "The Samsung Galaxy S23 Ultra comes with premium features for power users.",
      "specification": [
        "6.8-inch AMOLED display",
        "Snapdragon 8 Gen 2",
        "Quad-camera system (200MP Main, 12MP Ultrawide, 10MP Telephoto)",
        "5000mAh battery",
        "1TB storage option"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": "P003",
      "product_title": "Google Pixel 8 Pro",
      "product_image": "/src/Pages/images/pexels-david-jusko-2674423-20765271.jpg",
      "category": "Smartphones",
      "price": 999,
      "description": "Google's latest flagship with advanced AI features and incredible camera.",
      "specification": [
        "6.7-inch LTPO OLED display",
        "Google Tensor G3",
        "Triple-camera system (50MP Main, 48MP Ultrawide, 48MP Telephoto)",
        "5000mAh battery",
        "512GB storage option"
      ],
      "availability": true,
      "rating": 4.6
    },
    {
      "product_id": "P004",
      "product_title": "OnePlus 11",
      "product_image": "https://i.ibb.co.com/2jBR0CN/1.jpg",
      "category": "Smartphones",
      "price": 699,
      "description": "OnePlus 11 offers flagship-level performance at an affordable price.",
      "specification": [
        "6.7-inch AMOLED display",
        "Snapdragon 8 Gen 2",
        "Triple-camera system (50MP Main, 48MP Ultrawide, 32MP Telephoto)",
        "5000mAh battery",
        "256GB storage option"
      ],
      "availability": true,
      "rating": 4.5
    },
    {
      "product_id": "P005",
      "product_title": "MacBook Pro 16-inch",
      "product_image": "https://i.ibb.co.com/T22RCL2/mob2.jpg",
      "category": "Laptops",
      "price": 2499,
      "description": "Powerful performance with the M2 Max chip in the MacBook Pro 16-inch.",
      "specification": [
        "16-inch Liquid Retina XDR display",
        "M2 Max chip",
        "Up to 96GB RAM",
        "8TB SSD storage",
        "All-day battery life"
      ],
      "availability": true,
      "rating": 4.9
    },
    {
      "product_id": "P006",
      "product_title": "Dell XPS 15",
      "product_image": "https://i.ibb.co.com/qsk6bNz/lap3.jpg",
      "category": "Laptops",
      "price": 1899,
      "description": "The Dell XPS 15 is a powerful laptop for professionals and creators.",
      "specification": [
        "15.6-inch 4K OLED display",
        "Intel Core i9 13th Gen",
        "64GB RAM",
        "2TB SSD",
        "GeForce RTX 4070"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": "P007",
      "product_title": "HP Spectre x360",
      "product_image": "https://i.ibb.co.com/G9vk9yp/lap.jpg",
      "category": "Laptops",
      "price": 1599,
      "description": "A versatile 2-in-1 laptop with stunning design and performance.",
      "specification": [
        "13.5-inch OLED touchscreen",
        "Intel Core i7 13th Gen",
        "16GB RAM",
        "1TB SSD",
        "360-degree hinge"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": "P008",
      "product_title": "Asus ROG Zephyrus G14",
      "product_image": "https://i.ibb.co.com/G9vk9yp/lap.jpg",
      "category": "Laptops",
      "price": 1699,
      "description": "A compact gaming laptop with powerful specs and unique design.",
      "specification": [
        "14-inch QHD display",
        "AMD Ryzen 9",
        "32GB RAM",
        "1TB SSD",
        "GeForce RTX 4060"
      ],
      "availability": true,
      "rating": 4.6
    },
    {
      "product_id": "P009",
      "product_title": "Apple AirPods Pro 2",
      "product_image": "https://i.ibb.co.com/MVs36LK/wash.jpg",
      "category": "Accessories",
      "price": 249,
      "description": "Enhanced noise cancellation and immersive sound experience.",
      "specification": [
        "Active noise cancellation",
        "Spatial audio",
        "MagSafe charging",
        "6-hour battery life"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": "P010",
      "product_title": "Samsung Galaxy Watch 6",
      "product_image": "https://i.ibb.co.com/CQBKcWk/wash4.jpg",
      "category": "Accessories",
      "price": 399,
      "description": "Advanced fitness tracking and smartwatch features.",
      "specification": [
        "1.5-inch Super AMOLED display",
        "Heart rate and ECG monitoring",
        "Samsung Health integration",
        "Up to 40 hours battery life"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": "P011",
      "product_title": "Logitech MX Master 3S",
      "product_image": "https://i.ibb.co.com/bXwsxTy/wash3.jpg",
      "category": "Accessories",
      "price": 99,
      "description": "A premium mouse for productivity and comfort.",
      "specification": [
        "Ultrafast scrolling",
        "Bluetooth and USB receiver",
        "8 customizable buttons",
        "70-day battery life"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": "P012",
      "product_title": "Sony WH-1000XM5",
      "product_image": "https://i.ibb.co.com/z2tR0C9/wash2.jpg",
      "category": "Accessories",
      "price": 399,
      "description": "Industry-leading noise cancellation with superior audio quality.",
      "specification": [
        "Active noise cancellation",
        "30-hour battery life",
        "Bluetooth 5.2",
        "Quick charge support"
      ],
      "availability": true,
      "rating": 4.9
    }
  ]
       

  export default items;