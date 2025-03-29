
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export const categories = [
  {
    id: 1,
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    count: 12
  },
  {
    id: 2,
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    count: 8
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    count: 6
  },
  {
    id: 4,
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    count: 4
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "TechPro Ultrabook X15",
    category: "Laptops",
    price: 1299.99,
    description: "The sleek TechPro Ultrabook X15 combines powerful performance with a stunning display. Perfect for professionals and creatives who need reliability and speed in a lightweight package.",
    features: [
      "15.6-inch 4K UHD IPS Display",
      "Intel Core i7 Processor",
      "16GB DDR4 RAM",
      "512GB SSD Storage",
      "NVIDIA GeForce RTX 3050 Graphics",
      "Up to 12 hours of battery life"
    ],
    specs: {
      "Processor": "Intel Core i7-11800H",
      "Memory": "16GB DDR4 3200MHz",
      "Storage": "512GB NVMe SSD",
      "Display": "15.6\" 4K UHD (3840 x 2160) IPS",
      "Graphics": "NVIDIA GeForce RTX 3050 4GB GDDR6",
      "Operating System": "Windows 11 Home",
      "Battery": "4-Cell 70WHr",
      "Weight": "3.5 lbs (1.6 kg)"
    },
    rating: 4.7,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "SmartX Pro Phone",
    category: "Smartphones",
    price: 899.99,
    originalPrice: 999.99,
    description: "Experience the future with the SmartX Pro Phone. Featuring a revolutionary camera system, lightning-fast processor, and all-day battery life.",
    features: [
      "6.7-inch Dynamic AMOLED 2X Display",
      "Triple Camera System with 108MP Main",
      "5G Connectivity",
      "4500mAh Battery with Fast Charging",
      "8GB RAM + 256GB Storage",
      "Water and Dust Resistant (IP68)"
    ],
    specs: {
      "Processor": "Snapdragon 8 Gen 2",
      "Memory": "8GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Display": "6.7\" Dynamic AMOLED 2X, 120Hz",
      "Main Camera": "108MP + 12MP Ultrawide + 10MP Telephoto",
      "Selfie Camera": "40MP",
      "Battery": "4500mAh",
      "OS": "Android 13",
      "Weight": "196g"
    },
    rating: 4.9,
    reviewCount: 286,
    image: "https://images.unsplash.com/photo-1583573636246-18cb2246697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1583573636246-18cb2246697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isFeatured: true,
    isSale: true
  },
  {
    id: 3,
    name: "AudioPhase Wireless Headphones",
    category: "Headphones",
    price: 249.99,
    description: "Immerse yourself in sound with AudioPhase Wireless Headphones. Industry-leading noise cancellation, premium sound quality, and all-day comfort.",
    features: [
      "Active Noise Cancellation Technology",
      "Up to 30 Hours Battery Life",
      "Premium Sound with Deep Bass",
      "Touch Controls",
      "Voice Assistant Compatible",
      "Comfortable Over-Ear Design"
    ],
    specs: {
      "Driver Size": "40mm",
      "Frequency Response": "4Hz-40,000Hz",
      "Bluetooth": "5.2",
      "Battery Life": "30 Hours (ANC on), 40 Hours (ANC off)",
      "Charging Time": "3 Hours",
      "Weight": "254g"
    },
    rating: 4.6,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isFeatured: true
  },
  {
    id: 4,
    name: "VisualPro DSLR Camera",
    category: "Cameras",
    price: 699.99,
    description: "Capture life's moments with exceptional clarity using the VisualPro DSLR. Featuring advanced autofocus, 4K video, and intuitive controls for professionals and enthusiasts alike.",
    features: [
      "24.2MP APS-C CMOS Sensor",
      "4K UHD Video Recording",
      "45-Point All Cross-Type AF System",
      "3.0-inch Vari-Angle Touchscreen LCD",
      "Built-in Wi-Fi and Bluetooth",
      "ISO 100-25600 (Expandable to 51200)"
    ],
    specs: {
      "Sensor": "24.2MP APS-C CMOS",
      "Processor": "DIGIC 8",
      "Autofocus": "45-Point All Cross-Type AF",
      "ISO Range": "100-25600 (Expandable to 51200)",
      "Video": "4K UHD at 24p",
      "Screen": "3.0\" Vari-Angle Touchscreen LCD",
      "Battery Life": "Approx. 1300 shots",
      "Weight": "701g (Body Only)"
    },
    rating: 4.5,
    reviewCount: 85,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isNew: true
  },
  {
    id: 5,
    name: "CodeBook Pro 16",
    category: "Laptops",
    price: 1799.99,
    description: "The ultimate development machine. CodeBook Pro 16 delivers exceptional performance for coding, video editing, and 3D rendering in a sleek aluminum chassis.",
    features: [
      "16-inch Liquid Retina XDR Display",
      "M2 Pro Chip with 10-Core CPU",
      "32GB Unified Memory",
      "1TB SSD Storage",
      "Up to 22 Hours of Battery Life",
      "Three Thunderbolt 4 Ports"
    ],
    specs: {
      "Processor": "M2 Pro with 10-Core CPU, 16-Core GPU",
      "Memory": "32GB Unified Memory",
      "Storage": "1TB SSD",
      "Display": "16\" Liquid Retina XDR, 3456 x 2234",
      "Battery": "Up to 22 Hours",
      "Operating System": "macOS",
      "Weight": "4.7 lbs (2.1 kg)"
    },
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isNew: true
  },
  {
    id: 6,
    name: "NexusAir Wireless Earbuds",
    category: "Headphones",
    price: 129.99,
    originalPrice: 159.99,
    description: "Experience true wireless freedom with NexusAir Earbuds. Crystal clear sound, seamless connectivity, and comfortable all-day wear.",
    features: [
      "Active Noise Cancellation",
      "Water and Sweat Resistant (IPX4)",
      "Up to 8 Hours Playback (24 with Case)",
      "Wireless Charging Case",
      "Touch Controls",
      "Voice Assistant Support"
    ],
    specs: {
      "Driver Size": "11mm",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "8 Hours (Earbuds), 24 Hours (with Case)",
      "Charging": "USB-C and Wireless",
      "Water Resistance": "IPX4",
      "Weight": "5.4g per Earbud"
    },
    rating: 4.4,
    reviewCount: 218,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    inStock: true,
    isSale: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 3): Product[] => {
  return products
    .filter(product => product.isFeatured)
    .slice(0, limit);
};

export const getNewProducts = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
};

export const getSaleProducts = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.isSale)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
