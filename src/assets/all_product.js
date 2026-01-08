// src/assets/all_product.js

// ================= IMAGE IMPORTS =================

// 🔊 Speakers
import product1 from "./product1.jpg";
import product1_2 from "./product1_2.jpg";
import product1_3 from "./product1_3.jpg";

import product2 from "./product2.jpg";
import product2_2 from "./product2_2.jpg";
import product2_3 from "./product2_3.jpg";

import product4 from "./product4.jpg";
import product4_2 from "./product4_2.jpg";
import product4_3 from "./product4_3.jpg";

// 🎧 Headphones
import product3 from "./product3.jpg";
import product3_2 from "./product3_2.jpg";
import product3_3 from "./product3_3.jpg";

// 🎥 Webcam
import product5 from "./product5.jpg";
import product5_2 from "./product5_2.jpg";
import product5_3 from "./product5_3.jpg";

// 🔌 USB Switch
import product6 from "./product6.jpg";
import product6_2 from "./product6_2.jpg";
import product6_3 from "./product6_3.jpg";

// 🔌 USB-C Hub
import product7 from "./product7.jpg";
import product7_2 from "./product7_2.jpg";
import product7_3 from "./product7_3.jpg";

// 🖥️ Gaming PC
import product8 from "./product8.jpg";
import product8_2 from "./product8_2.jpg";
import product8_3 from "./product8_3.jpg";

// 🔌 Docking Station
import product9 from "./product9.jpg";
import product9_2 from "./product9_2.jpg";
import product9_3 from "./product9_3.jpg";

// 🖨️ 3D Printer
import product10 from "./product10.jpg";
import product10_2 from "./product10_2.jpg";
import product10_3 from "./product10_3.jpg";

// ================= PRODUCT DATA =================
// ✅ main_image = main picture
// ✅ thumbnails = only extra images
// ✅ images = [main, ...thumbnails] (kept for your older code too)

const all_product = [
  {
    id: 1,
    name: "Portable Bluetooth Speaker 20W RGB",
    brand: "dotn",
    category: "speaker",
    main_image: product1,
    thumbnails: [product1_2, product1_3],
    images: [product1, product1_2, product1_3],
    new_price: 27.99,
    old_price: 129.99,
    rating: 5.0,
    stock: 20,
    description:
      "20W loud stereo Bluetooth speaker with RGB lights, TWS pairing, 3 EQ modes, built-in mic and IPX7 waterproof design.",
    features: ["Bluetooth 5.4", "RGB Lights", "IPX7 Waterproof", "TWS Pairing"],
  },

  {
    id: 2,
    name: "Portable Bluetooth Speaker 20W",
    brand: "Generic",
    category: "speaker",
    main_image: product2,
    thumbnails: [product2_2, product2_3],
    images: [product2, product2_2, product2_3],
    new_price: 19.99,
    old_price: 49.99,
    rating: 4.6,
    stock: 25,
    description:
      "Compact 20W wireless Bluetooth speaker for travel, home and outdoor use.",
    features: ["Bluetooth", "Portable", "Stereo Sound"],
  },

  {
    id: 3,
    name: "JLab JBuds Lux ANC Headphones",
    brand: "JLab",
    category: "headphones",
    main_image: product3,
    thumbnails: [product3_2, product3_3],
    images: [product3, product3_2, product3_3],
    new_price: 49.99,
    old_price: 79.99,
    rating: 4.6,
    stock: 15,
    description:
      "Wireless over-ear headphones with Smart Active Noise Cancelling, 70+ hours playtime, multipoint Bluetooth and custom EQ.",
    features: ["Active Noise Cancelling", "70h Battery", "Multipoint", "Foldable"],
  },

  {
    id: 4,
    name: "Portable Bluetooth Speaker with 20W Loud Stereo Sound",
    brand: "dotn",
    category: "speaker",
    main_image: product4,
    thumbnails: [product4_2, product4_3],
    images: [product4, product4_2, product4_3],
    new_price: 27.99,
    old_price: 129.99,
    rating: 5.0,
    reviews: 54,
    badge: "Amazon's Choice",
    stock: 25,
    description:
      "Portable Bluetooth speaker with 20W loud stereo sound, RGB lights, TWS pairing, built-in mic and IPX7 waterproof protection.",
    features: [
      "20W Loud Stereo Sound",
      "Bluetooth 5.4",
      "RGB Lights",
      "TWS Pairing",
      "Built-in Microphone",
      "IPX7 Waterproof",
    ],
  },

  {
    id: 5,
    name: "j5create 360 AI-Powered Meeting Webcam",
    brand: "j5create",
    model: "JVU368",
    category: "webcam",
    main_image: product5,
    thumbnails: [product5_2, product5_3],
    images: [product5, product5_2, product5_3],
    new_price: 204.99,
    old_price: 249.99,
    rating: 4.0,
    reviews: 83,
    stock: 12,
    description:
      "360° AI-powered meeting webcam with smart tracking, auto-framing, built-in speakerphone and 1080P Full HD video.",
    features: [
      "360° Camera",
      "AI Smart Tracking",
      "Auto-Framing",
      "1080P Full HD",
      "Built-in Speakerphone",
      "Remote Control Included",
    ],
  },

  {
    id: 6,
    name: "BENFEI USB 3.0 Switch with Remote Control",
    brand: "BENFEI",
    category: "usb_switch",
    main_image: product6,
    thumbnails: [product6_2, product6_3],
    images: [product6, product6_2, product6_3],
    new_price: 15.19,
    old_price: 18.99,
    rating: 4.3,
    reviews: 728,
    badge: "Limited time deal",
    stock: 50,
    description:
      "USB 3.0 switch allowing two computers to share USB devices including mouse, keyboard and printer.",
    features: [
      "2 Computers Sharing",
      "3× USB 3.0",
      "1× USB-C",
      "Remote Switch Button",
      "5Gbps Transfer Speed",
      "Plug & Play",
    ],
  },

  {
    id: 7,
    name: "USB C HUB 11-in-1 Docking Station",
    brand: "SZPACMATE",
    category: "usb_hub",
    main_image: product7,
    thumbnails: [product7_2, product7_3],
    images: [product7, product7_2, product7_3],
    new_price: 15.18,
    old_price: 18.07,
    rating: 4.3,
    reviews: 6115,
    badge: "Amazon's Choice",
    stock: 40,
    description:
      "11-in-1 USB C hub with HDMI, VGA, Ethernet, USB ports, SD/TF reader and Power Delivery.",
    features: ["11-in-1 Hub", "4K HDMI", "VGA Support", "USB 3.0 Ports", "PD Charging", "Ethernet RJ45"],
  },

  {
    id: 8,
    name: "Vibox VIII-100 Gaming PC Bundle",
    brand: "Vibox",
    category: "gaming_pc",
    main_image: product8,
    thumbnails: [product8_2, product8_3],
    images: [product8, product8_2, product8_3],
    new_price: 1299.95,
    old_price: 1499.95,
    rating: 4.5,
    reviews: 106,
    badge: "Amazon's Choice",
    stock: 6,
    description:
      "High-performance gaming PC with Intel i9-12900KF, RTX 5060, 16GB RAM, 1TB SSD and 23-inch monitor.",
    features: ["Intel i9-12900KF", "RTX 5060 8GB", "16GB RAM", "1TB SSD", "Windows 11", "Monitor Included"],
  },

  {
    id: 9,
    name: "Lemorele USB C Docking Station 10-in-1",
    brand: "Lemorele",
    category: "usb_hub",
    main_image: product9,
    thumbnails: [product9_2, product9_3],
    images: [product9, product9_2, product9_3],
    new_price: 24.69,
    old_price: 31.99,
    rating: 4.2,
    reviews: 7098,
    badge: "1 sustainability feature",
    stock: 30,
    description:
      "10-in-1 USB-C docking station with dual HDMI, VGA, USB ports, 100W PD and audio output.",
    features: ["10-in-1 Dock", "Dual HDMI + VGA", "4K Support", "PD 100W", "USB 3.0", "SD/TF Reader"],
  },

  {
    id: 10,
    name: "FLASHFORGE AD5X Multi-Material 3D Printer (4-Color)",
    brand: "FLASHFORGE",
    model: "AD5X",
    category: "3d_printer",
    main_image: product10,
    thumbnails: [product10_2, product10_3],
    images: [product10, product10_2, product10_3],
    new_price: 399.0,
    old_price: 499.0,
    rating: 4.3,
    reviews: 340,
    badge: "1K+ bought in past month",
    stock: 8,
    description:
      "Multi-material 3D printer with 4-color printing, up to 600mm/s speed, 1-click printing, full-auto calibration, filament backup, and DIY IFS creations support.",
    features: [
      "4-Color Printing",
      "Multi-Material Support",
      "Up to 600mm/s Print Speed",
      "1-Click Print",
      "Full-Auto Calibration",
      "Filament Backup",
      "Productivity Booster",
    ],
  },
];

export default all_product;
