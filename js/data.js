
// Products and categories data

// Categories data
const categories = [
  {
    id: 1,
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    count: 10
  },
  {
    id: 2,
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    count: 8
  },
  {
    id: 3,
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    count: 6
  },
  {
    id: 4,
    name: 'Cameras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
    count: 4
  }
];

// Products data
const products = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    category: 'Laptops',
    price: 1999.99,
    originalPrice: 2199.99,
    description: 'The ultimate pro laptop with the most powerful Apple chip, impressive graphics, and a stunning Liquid Retina XDR display.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    rating: 4.8,
    reviewCount: 245,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      'Apple M1 Pro or M1 Max chip',
      'Up to 64GB unified memory',
      'Up to 8TB SSD storage',
      '16-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port, SDXC card slot',
      'Magic Keyboard with Touch ID',
      'Up to 21 hours battery life'
    ],
    specs: {
      'Processor': 'Apple M1 Pro or M1 Max',
      'Memory': 'Up to 64GB',
      'Storage': 'Up to 8TB SSD',
      'Display': '16-inch Liquid Retina XDR',
      'Graphics': 'Up to 32-core GPU',
      'Battery': 'Up to 21 hours',
      'Weight': '2.1 kg',
      'Operating System': 'macOS'
    }
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    category: 'Smartphones',
    price: 999.99,
    originalPrice: null,
    description: 'The most advanced iPhone features a stunning Super Retina XDR display, A15 Bionic chip, and pro-level camera system.',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    images: [
      'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80',
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    ],
    rating: 4.9,
    reviewCount: 312,
    isNew: true,
    isSale: false,
    inStock: true,
    features: [
      'A15 Bionic chip',
      'Pro camera system with 12MP cameras',
      'Up to 1TB storage',
      '6.1-inch or 6.7-inch Super Retina XDR display with ProMotion',
      'Ceramic Shield front',
      'IP68 water resistance',
      'Up to 28 hours video playback'
    ],
    specs: {
      'Chip': 'A15 Bionic',
      'Capacity': 'Up to 1TB',
      'Display': '6.1-inch or 6.7-inch Super Retina XDR',
      'Camera': '12MP TrueDepth front camera, 12MP Pro camera system',
      'Water Resistance': 'IP68',
      'Battery': 'Up to 28 hours video playback',
      'Operating System': 'iOS 15'
    }
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4',
    category: 'Headphones',
    price: 349.99,
    originalPrice: 399.99,
    description: 'Industry-leading noise canceling headphones with premium sound quality, smart listening features, and all-day comfort.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1279&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80'
    ],
    rating: 4.7,
    reviewCount: 178,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      'Industry-leading noise cancellation',
      'Exceptional sound quality with Edge-AI',
      'Speak-to-chat automatically pauses playback',
      'Wearing detection pauses when headphones are removed',
      'Up to 30 hours battery life',
      'Multi-device connection',
      'Touch controls and voice assistant compatibility'
    ],
    specs: {
      'Type': 'Wireless Noise Cancelling',
      'Battery Life': 'Up to 30 hours',
      'Quick Charge': '5 hours playback from 10 min charge',
      'Bluetooth': '5.0',
      'Audio Format': 'LDAC, AAC, SBC',
      'Weight': '254g',
      'Color Options': 'Black, Silver, Blue'
    }
  },
  {
    id: 4,
    name: 'Sony Alpha a7 III',
    category: 'Cameras',
    price: 1799.99,
    originalPrice: 1999.99,
    description: 'A full-frame mirrorless camera with advanced features, exceptional image quality, and remarkable low-light performance.',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    images: [
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1589715472774-0dacd4c1ed42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    ],
    rating: 4.9,
    reviewCount: 156,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      '24.2MP full-frame Exmor R CMOS sensor',
      'BIONZ X image processor',
      '693-point phase-detection AF system',
      '10 fps continuous shooting',
      '4K HDR video recording',
      '5-axis in-body image stabilization',
      'Dual SD card slots'
    ],
    specs: {
      'Sensor': '24.2MP full-frame CMOS',
      'Processor': 'BIONZ X',
      'Autofocus': '693-point phase-detection',
      'ISO Range': '100-51,200 (expandable)',
      'Video': '4K HDR',
      'Stabilization': '5-axis in-body',
      'Weight': '650g',
      'Battery Life': 'Approx. 710 shots'
    }
  },
  {
    id: 5,
    name: 'Dell XPS 13',
    category: 'Laptops',
    price: 1299.99,
    originalPrice: 1499.99,
    description: 'A compact and powerful laptop with InfinityEdge display, exceptional performance, and premium design.',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1569&q=80'
    ],
    rating: 4.7,
    reviewCount: 132,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      'Intel Core i7 processor',
      '16GB RAM and 512GB SSD',
      '13.4-inch InfinityEdge display',
      'Thunderbolt 4 ports',
      'Backlit keyboard',
      'Fingerprint reader',
      'Up to 12 hours battery life'
    ],
    specs: {
      'Processor': 'Intel Core i7',
      'Memory': '16GB LPDDR4x',
      'Storage': '512GB SSD',
      'Display': '13.4-inch FHD+ or 4K',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 12 hours',
      'Weight': '1.2 kg',
      'Operating System': 'Windows 11'
    }
  },
  {
    id: 6,
    name: 'Samsung Galaxy S21 Ultra',
    category: 'Smartphones',
    price: 1199.99,
    originalPrice: 1299.99,
    description: 'The ultimate smartphone with a pro-grade camera system, 8K video, and the most advanced S Pen experience.',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1612542085812-6341e6422a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1610945264803-c22b65087303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    ],
    rating: 4.8,
    reviewCount: 208,
    isNew: true,
    isSale: true,
    inStock: true,
    features: [
      '108MP pro-grade camera',
      'Space Zoom with 100x zoom',
      '6.8-inch Dynamic AMOLED 2X display',
      'Exynos 2100 or Snapdragon 888 processor',
      '5G connectivity',
      'IP68 water resistance',
      'S Pen compatibility'
    ],
    specs: {
      'Processor': 'Exynos 2100 or Snapdragon 888',
      'RAM': '12GB or 16GB',
      'Storage': 'Up to 512GB',
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Camera': '108MP main, 12MP ultrawide, two 10MP telephoto',
      'Battery': '5000mAh',
      'Operating System': 'Android 11'
    }
  },
  {
    id: 7,
    name: 'Bose QuietComfort Earbuds',
    category: 'Headphones',
    price: 279.99,
    originalPrice: null,
    description: 'True wireless earbuds with world-class noise cancellation, high-fidelity audio, and comfortable secure fit.',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1650170496638-b2a1153ff3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80'
    ],
    rating: 4.6,
    reviewCount: 98,
    isNew: true,
    isSale: false,
    inStock: true,
    features: [
      'World-class noise cancellation',
      'High-fidelity audio',
      'Comfortable secure fit',
      'Weather and sweat resistant',
      'Touch controls',
      'Up to 6 hours battery life, 18 hours with charging case',
      'Voice assistant compatibility'
    ],
    specs: {
      'Type': 'True Wireless Earbuds',
      'Battery Life': 'Up to 6 hours, 18 hours with case',
      'Charging': 'USB-C and wireless charging',
      'Connectivity': 'Bluetooth 5.1',
      'Water Resistance': 'IPX4',
      'Noise Cancellation': 'Adjustable 11 levels',
      'Weight': '8.5g per earbud'
    }
  },
  {
    id: 8,
    name: 'Canon EOS R5',
    category: 'Cameras',
    price: 3899.99,
    originalPrice: null,
    description: 'A professional-grade mirrorless camera with revolutionary 8K video recording, 45MP full-frame sensor, and advanced autofocus.',
    image: 'https://images.unsplash.com/photo-1613656741959-1cd49206325e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1613656741959-1cd49206325e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1604699229817-63bbcba69d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1616615272969-a0e6238fc200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&q=80'
    ],
    rating: 4.9,
    reviewCount: 76,
    isNew: true,
    isSale: false,
    inStock: true,
    features: [
      '45MP full-frame CMOS sensor',
      '8K RAW video recording',
      'In-body image stabilization',
      'Dual Pixel CMOS AF II with 1,053 AF points',
      '20 fps electronic shutter',
      'Dual card slots',
      'WiFi and Bluetooth connectivity'
    ],
    specs: {
      'Sensor': '45MP full-frame CMOS',
      'Processor': 'DIGIC X',
      'Autofocus': 'Dual Pixel CMOS AF II',
      'ISO Range': '100-51,200 (expandable)',
      'Video': '8K RAW, 4K 120p',
      'Stabilization': 'In-body, 8 stops',
      'Weather Sealing': 'Dust and moisture resistant',
      'Battery Life': 'Approx. 490 shots'
    }
  },
  {
    id: 9,
    name: 'HP Spectre x360',
    category: 'Laptops',
    price: 1499.99,
    originalPrice: 1699.99,
    description: 'A versatile 2-in-1 laptop with stunning OLED display, powerful performance, and sleek gem-cut design.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    rating: 4.7,
    reviewCount: 112,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      'Intel Core i7 processor',
      '16GB RAM and 1TB SSD',
      '13.5-inch OLED touchscreen display',
      '2-in-1 convertible design',
      'Thunderbolt 4 ports',
      'HP MPP 2.0 Tilt Pen included',
      'Up to 17 hours battery life'
    ],
    specs: {
      'Processor': 'Intel Core i7',
      'Memory': '16GB',
      'Storage': '1TB SSD',
      'Display': '13.5-inch 3K2K OLED',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 17 hours',
      'Weight': '1.3 kg',
      'Operating System': 'Windows 11'
    }
  },
  {
    id: 10,
    name: 'Google Pixel 6 Pro',
    category: 'Smartphones',
    price: 899.99,
    originalPrice: 999.99,
    description: 'A premium smartphone with Google Tensor chip, pro-level camera system, and the most advanced Google features.',
    image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae3904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    images: [
      'https://images.unsplash.com/photo-1635870723802-e88d76ae3904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      'https://images.unsplash.com/photo-1640437830863-8f7e403fb0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80',
      'https://images.unsplash.com/photo-1652967235094-c7757f3a3476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    rating: 4.7,
    reviewCount: 145,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      'Google Tensor chip',
      'Professional 50MP camera system',
      '6.7-inch QHD+ LTPO display',
      'Live Translate',
      'Magic Eraser photo editing',
      'IP68 water resistance',
      'All-day battery with fast charging'
    ],
    specs: {
      'Processor': 'Google Tensor',
      'RAM': '12GB',
      'Storage': 'Up to 512GB',
      'Display': '6.7-inch QHD+ LTPO OLED',
      'Camera': '50MP main, 12MP ultrawide, 48MP telephoto',
      'Battery': '5003mAh',
      'Operating System': 'Android 12'
    }
  },
  {
    id: 11,
    name: 'Apple AirPods Pro',
    category: 'Headphones',
    price: 249.99,
    originalPrice: null,
    description: 'Wireless earbuds with active noise cancellation, spatial audio, and a customizable fit for all-day comfort.',
    image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    images: [
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=683&q=80'
    ],
    rating: 4.8,
    reviewCount: 186,
    isNew: false,
    isSale: false,
    inStock: true,
    features: [
      'Active Noise Cancellation',
      'Transparency mode',
      'Spatial audio with dynamic head tracking',
      'Adaptive EQ',
      'Force sensor controls',
      'Sweat and water resistant',
      'Up to 4.5 hours of listening time, 24 hours with charging case'
    ],
    specs: {
      'Type': 'In-ear wireless earbuds',
      'Chip': 'H1 headphone chip',
      'Battery Life': 'Up to 4.5 hours, 24 hours with case',
      'Charging': 'Lightning and wireless charging',
      'Water Resistance': 'IPX4',
      'Noise Cancellation': 'Active Noise Cancellation',
      'Weight': '5.4g per earbud'
    }
  },
  {
    id: 12,
    name: 'Nikon Z6 II',
    category: 'Cameras',
    price: 1999.99,
    originalPrice: 2199.99,
    description: 'A versatile full-frame mirrorless camera with exceptional low-light performance, 4K video, and high-speed shooting.',
    image: 'https://images.unsplash.com/photo-1598123114987-45b5640ffc25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    images: [
      'https://images.unsplash.com/photo-1598123114987-45b5640ffc25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1586253633269-33fc5036451f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    rating: 4.8,
    reviewCount: 92,
    isNew: false,
    isSale: true,
    inStock: true,
    features: [
      '24.5MP BSI CMOS sensor',
      'Dual EXPEED 6 processors',
      'In-body image stabilization',
      '14 fps continuous shooting',
      '4K UHD video recording',
      '273-point hybrid AF system',
      'Dual memory card slots'
    ],
    specs: {
      'Sensor': '24.5MP full-frame BSI CMOS',
      'Processor': 'Dual EXPEED 6',
      'Autofocus': '273-point hybrid AF',
      'ISO Range': '100-51,200 (expandable)',
      'Video': '4K UHD 60p, 1080p 120p',
      'Stabilization': '5-axis in-body',
      'Weight': '705g',
      'Battery Life': 'Approx. 340 shots'
    }
  }
];

// Function to get featured products
function getFeaturedProducts() {
  return products.filter(product => product.isNew || product.isSale).slice(0, 3);
}

// Function to get products by category
function getProductsByCategory(category) {
  if (!category || category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

// Function to get product by ID
function getProductById(id) {
  return products.find(product => product.id === id);
}

// Function to get related products
function getRelatedProducts(product) {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
}

// Function to search products
function searchProducts(query) {
  query = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
}

// Function to filter products by price range
function filterProductsByPrice(minPrice, maxPrice) {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}
