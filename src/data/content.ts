export const siteContent = {
  hero: {
    badgeLabel: "Exclusive",
    badgeText: "Premium Residential & Commercial Listings",
    title: "Discover Luxury Living",
    titleLine2: "With Valdore Estates",
    description: "Explore our handpicked selection of ultra-premium properties designed for sophisticated lifestyles. Exceptional locations, unmatched craftsmanship, and seamless client support.",
    primaryButtonText: "View Properties",
    primaryButtonHref: "#properties",
    secondaryButtonText: "Inquire Now",
    secondaryButtonHref: "https://wa.me/94760534425",
    ctaButtonText: "Contact Broker",
    ctaButtonHref: "https://wa.me/94760534425",
    navLinks: [
      { label: "Home", href: "/#", isActive: true },
      { label: "Properties", href: "/#properties" },
      { label: "About Us", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/#contact" }
    ]
  },
  marquee: {
    tagline: "The Valdore Collection",
    titleLine1: "A Curated Portfolio",
    titleLine2: "of Masterpieces",
    description: "Explore our exclusive off-market and publicly listed properties, showcasing the pinnacle of architectural achievement.",
    ctaText: "Explore Collection"
  },
  impact: {
    title: "A Legacy of",
    titleHighlight: "Excellence",
    subtitle: "We don't just sell properties; we curate generational wealth and architectural masterpieces for the world's most discerning clientele. Our track record speaks to our uncompromising dedication to luxury.",
    primaryButtonText: "Consult an Expert",
    secondaryButtonText: "Our Story",
    stats: [
      { value: "$2B+", label: "Global Sales Volume" },
      { value: "15+", label: "Years of Mastery" },
      { value: "50+", label: "Exclusive Partners" }
    ]
  },
  about: {
    years: "25",
    yearsTextLine1: "Years of",
    yearsTextLine2: "Excellence",
    subtitle: "Our Philosophy",
    title: "Redefining the Art of Luxury Living.",
    paragraph1: "Founded on the principles of organic minimalism, Valdore Estates is more than a real estate brokerage—it is an architectural curator for the world's most discerning individuals. We believe that true luxury lies in simplicity, quality materials, and harmony with nature.",
    paragraph2: "Every property in our exclusive portfolio is meticulously vetted to ensure it meets our exacting standards. From breathtaking coastal retreats to sophisticated urban penthouses, we represent homes that are masterpieces of design and craftsmanship.",
    buttonText: "Speak With A Director",
    buttonHref: "#contact"
  },
  services: {
    title: "Bespoke",
    titleHighlight: "Services",
    subtitle: "Beyond brokering estates, Valdore offers a suite of premium concierge services to cater to every facet of luxury lifestyle management.",
    items: [
      {
        title: "Private Acquisitions",
        description: "Discreet and exclusive representation for high-net-worth individuals seeking off-market legacy properties."
      },
      {
        title: "Design Consultation",
        description: "Partnering with elite architectural firms to ensure properties reflect true organic minimalist principles."
      },
      {
        title: "Turnkey Management",
        description: "Comprehensive estate management services ensuring a seamless transition and perfect maintenance."
      }
    ]
  },
  contact: {
    title: "Private",
    titleHighlight: "Inquiries",
    text: "For discrete viewings, off-market opportunities, or representation, please reach out to our dedicated team of luxury property advisors. We ensure utmost confidentiality and exceptional service.",
    headquartersTitle: "Global Headquarters",
    headquartersAddressLine1: "9800 Wilshire Blvd, Suite 200",
    headquartersAddressLine2: "Beverly Hills, CA 90212",
    directLineTitle: "Direct Line",
    directLineNumber: "+1 (310) 555-0198",
    emailTitle: "Email",
    emailAddress: "inquiries@valdore.com",
    formTitle: "Request a Consultation",
    formSubmitText: "Submit Inquiry"
  },
  footer: {
    description: "Curators of ultra-premium real estate for the world's most discerning individuals. Organic minimalism meets ultimate luxury.",
    copyrightText: "Valdore Estates. All Rights Reserved.",
    navLinks: [
      { label: "Properties", href: "/#properties" },
      { label: "About Us", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Contact", href: "/#contact" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Fair Housing", href: "#" }
    ]
  }
};

export const propertiesData = [
  {
    id: 1,
    title: 'The Apex Residence',
    location: 'Beverly Hills, CA',
    priceDisplay: '$24,500,000',
    priceNumeric: 24500000,
    type: 'House',
    beds: 6,
    baths: 8,
    sqft: '12,500',
    mainImage: 'https://images.unsplash.com/photo-1613490908575-9b2f671c6999?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490908575-9b2f671c6999?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A masterpiece of contemporary design, The Apex Residence offers unparalleled panoramic views of Los Angeles. Featuring a state-of-the-art chef\'s kitchen, a sprawling infinity pool, and a private wellness center. Every detail has been meticulously curated with the finest imported materials, embodying the essence of organic minimalism.',
    features: ['Infinity Edge Pool', 'Home Theater', 'Wine Cellar (1,000 bottle)', 'Smart Home Automation', 'Zen Garden', 'Private Wellness Center'],
    locationDetails: 'Situated behind private gates in the prestigious Trousdale Estates neighborhood of Beverly Hills. This enclave is globally recognized for its mid-century modern architecture and unmatched privacy, attracting A-list celebrities and business titans. Just 5 minutes from the world-class shopping of Rodeo Drive.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 2,
    title: 'Serenity Cove',
    location: 'Malibu, CA',
    priceDisplay: '$32,000,000',
    priceNumeric: 32000000,
    type: 'House',
    beds: 5,
    baths: 6,
    sqft: '9,800',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18efc2294?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Perched on the dramatic cliffs of Malibu, Serenity Cove provides an exclusive oceanfront lifestyle. Floor-to-ceiling glass walls dissolve the boundary between indoors and the Pacific Ocean. Includes a private funicular to the beach below, a temperature-controlled wine cellar, and a master suite that defies expectation.',
    features: ['Private Beach Access', 'Oceanfront Cliffside', 'Funicular Railway', 'Glass Wrapping Walls', 'Temperature-Controlled Wine Room', 'Infinity Spa'],
    locationDetails: 'Located in Western Malibu on a highly coveted stretch of the Pacific Coast Highway. This pristine location offers unobstructed 180-degree ocean views, providing both deep seclusion and easy access to Malibu\'s famed Nobu and SoHo Little Beach House.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 3,
    title: 'Prime Sanctuary Lands',
    location: 'Aspen, CO',
    priceDisplay: '$3,500,000',
    priceNumeric: 3500000,
    type: 'Land',
    beds: 0,
    baths: 0,
    sqft: '43,560',
    mainImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Highly sought-after residential land plots located within a peaceful, secure gated community. Build your dream architectural triumph in the heart of the Rocky Mountains on this pristine 1-acre parcel.',
    features: ['1 Acre Parcel', 'Ski-in/Ski-out Potential', 'Gated Community Security', 'Fully Serviced Plot', 'Unobstructed Mountain Views'],
    locationDetails: 'Nestled at the base of Ajax Mountain, this plot is one of the last remaining undeveloped parcels in this ultra-exclusive Aspen enclave. Enjoy immediate proximity to world-class ski slopes, hiking trails, and the upscale dining and boutiques of downtown Aspen.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 4,
    title: 'The Skyline Penthouse',
    location: 'New York, NY',
    priceDisplay: '$18,500,000',
    priceNumeric: 18500000,
    type: 'Penthouse',
    beds: 4,
    baths: 5,
    sqft: '6,200',
    mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c158bf43973?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Hovering above Manhattan, this triplex penthouse offers 360-degree views of Central Park and the city skyline. Features a private glass elevator, a rooftop terrace with a plunge pool, and interiors crafted by world-renowned designers.',
    features: ['Triplex Layout', 'Private Glass Elevator', 'Rooftop Plunge Pool', '360° Central Park Views', '24/7 White-Glove Concierge'],
    locationDetails: 'Situated on Billionaire\'s Row in Midtown Manhattan, towering above the iconic skyline. This location offers unparalleled access to Central Park, Carnegie Hall, Fifth Avenue shopping, and Michelin-starred dining establishments.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 5,
    title: 'Villa d\'Arte',
    location: 'Lake Como, Italy',
    priceDisplay: '$45,000,000',
    priceNumeric: 45000000,
    type: 'Villa',
    beds: 8,
    baths: 10,
    sqft: '18,500',
    mainImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A historic 18th-century lakeside villa meticulously restored for modern luxury. Includes a private dock, botanical gardens spanning 5 acres, a frescoed grand ballroom, and a subterranean wine cave.',
    features: ['Private Lake Dock', '5-Acre Botanical Gardens', 'Subterranean Wine Cave', 'Historic Frescoes', 'Grand Ballroom', 'Helicopter Access'],
    locationDetails: 'Positioned on the prestigious western shore of Lake Como. Accessible via private boat or helicopter, the villa offers absolute seclusion while remaining only a short cruise away from the historic village of Bellagio and Villa d\'Este.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 6,
    title: 'Isla del Sol',
    location: 'Exumas, Bahamas',
    priceDisplay: '$75,000,000',
    priceNumeric: 75000000,
    type: 'Island',
    beds: 12,
    baths: 14,
    sqft: '25,000',
    mainImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A completely private 40-acre island retreat. Comes fully staffed with a main residence, three guest villas, a deep-water marina capable of docking a 150ft yacht, and an active helipad. The ultimate secluded sanctuary.',
    features: ['40 Private Acres', 'Deep-Water Marina (150ft Yacht)', 'Active Helipad', '3 Guest Villas', 'Staff Quarters', 'Private Coral Reef'],
    locationDetails: 'Located in the stunning Exuma Cays, renowned for having the clearest sapphire waters in the world. Enjoy total isolation and sovereign privacy, yet remain a short 45-minute flight from Miami or Nassau.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 7,
    title: 'Château de Lumière',
    location: 'Loire Valley, France',
    priceDisplay: '$28,000,000',
    priceNumeric: 28000000,
    type: 'Chateau',
    beds: 14,
    baths: 12,
    sqft: '22,000',
    mainImage: 'https://images.unsplash.com/photo-1575510696773-4569503487c6?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1575510696773-4569503487c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b46a?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'A breathtaking 17th-century chateau nestled in the heart of the Loire Valley. Features original crown moldings, grand fireplaces, an indoor equestrian facility, and 120 acres of manicured French gardens and vineyards.',
    features: ['120 Acres of Gardens & Vineyards', 'Equestrian Facility', 'Original 17th-Century Architecture', 'Commercial-Grade Kitchen', 'Moat and Stone Bridge'],
    locationDetails: 'Nestled in the picturesque Loire Valley, a UNESCO World Heritage site known as the "Garden of France." Surrounded by legendary vineyards, historic castles, and serene countryside, while being just a two-hour drive from Paris.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 8,
    title: 'The Summit Chalet',
    location: 'Gstaad, Switzerland',
    priceDisplay: '$55,000,000',
    priceNumeric: 55000000,
    type: 'Chalet',
    beds: 7,
    baths: 9,
    sqft: '14,200',
    mainImage: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An ultra-exclusive ski-in/ski-out Alpine chalet blending rustic timber with hyper-modern amenities. Features a private cinema, a full-scale spa with a heated indoor-outdoor pool, and panoramic views of the Swiss Alps.',
    features: ['Direct Ski-in/Ski-out', 'Indoor-Outdoor Heated Pool', 'Private Spa & Sauna', 'In-house Cinema', 'Heated Driveway & Garage', 'Alpine Timber Construction'],
    locationDetails: 'Located in the ultra-wealthy resort town of Gstaad, a favorite playground for European royalty and international elite. The chalet offers absolute discretion and immediate access to over 200 kilometers of pristine ski slopes.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 9,
    title: 'Oceanside Estate',
    location: 'Monaco',
    priceDisplay: '$120,000,000',
    priceNumeric: 120000000,
    type: 'Estate',
    beds: 9,
    baths: 11,
    sqft: '28,000',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'One of the most expensive and rare properties in Monaco. A sprawling multi-level Mediterranean estate featuring a private casino room, a 50-car subterranean garage, and terraces that drop directly into the Mediterranean Sea.',
    features: ['Terraced Sea Access', '50-Car Subterranean Vault', 'Private Casino Room', 'Helicopter Pad', 'Multiple Guest Villas', 'State-of-the-art Security'],
    locationDetails: 'Perched on the cliffside of the Principality of Monaco, overlooking the shimmering Mediterranean Sea. This estate is mere minutes from the legendary Casino de Monte-Carlo and Port Hercules, offering a life of unmatched glamour and zero income tax.',
    brokerNumber: '+94 76 053 4425'
  },
  {
    id: 10,
    title: 'Veyangoda Two Storey House',
    location: 'Veyangoda, Sri Lanka',
    priceDisplay: 'Rs.15,000,000',
    priceNumeric: 15000000,
    type: 'House',
    beds: 4,
    baths: 2,
    sqft: '2500',
    mainImage: '/Properties/Veyangoda/Veyangoda_1.jpeg',
    images: [
      '/Properties/Veyangoda/Veyangoda_1.jpeg',
      '/Properties/Veyangoda/Veyangoda_2.jpeg',
      '/Properties/Veyangoda/Veyangoda_3.jpeg',
      '/Properties/Veyangoda/Veyangoda_4.jpeg',
      '/Properties/Veyangoda/Veyangoda_5.jpeg',
      '/Properties/Veyangoda/Veyangoda_6.jpeg'
    ],
    description: 'Veyangoda Two Storey House for sale located in a free and peaceful environment.',
    features: ['Hot Water (Solar)', 'Veranda', 'Boundary wall and gate', 'Piped water and well water'],
    locationDetails: 'Green Gate, Udammita, Veyangoda. 1.5km to Nittambuwa town, 3.5km to Veyangoda town, 2km to Veyangoda expressway entrance. Area free from floods and natural disasters.',
    brokerNumber: '+94 76 053 4425',
    detailsTables: {
      english: [
        { label: 'Address', value: 'Green Gate, Udammita, Veyangoda.' },
        { label: 'Land Size', value: '12.5 Perches' },
        { label: 'Bedrooms', value: '04' },
        { label: 'Bathrooms', value: '02' },
        { label: 'Living Room', value: 'Yes' },
        { label: 'TV Room', value: 'Yes' },
        { label: 'Pantry', value: 'Yes' },
        { label: 'Kitchen', value: '02' },
        { label: 'Sq Ft', value: '2500' },
        { label: 'Hot Water', value: 'Solar' },
        { label: 'Veranda', value: 'Yes' },
        { label: 'Boundary', value: 'Boundary wall and gate' },
        { label: 'Water Supply', value: 'Piped water and well water' },
        { label: 'To Nittabuwa town', value: '1.5km' },
        { label: 'To Veyangoda town', value: '3.5km' },
        { label: 'To Expressway', value: '2km' },
        { label: 'Environment', value: 'Free and peaceful environment. Area free from floods and natural disasters.' },
        { label: 'Price', value: 'Negotiable' },
        { label: 'Deeds', value: 'Clear deeds' }
      ],
      sinhala: [
        { label: 'ලිපිනය', value: 'ග්රින් ගේට්, උදම්මිට, වේයන්ගොඩ.' },
        { label: 'ඉඩමේ ප්රමාණය', value: 'පර්චස් 12.5' },
        { label: 'නිදන කාමර', value: '04' },
        { label: 'නාන කාමර', value: '02' },
        { label: 'සාලය', value: 'ඔව්' },
        { label: 'ට්ව් රූම්', value: 'ඔව්' },
        { label: 'පැන්ට්රිය', value: 'ඔව්' },
        { label: 'කුස්සිය', value: '02' },
        { label: 'වර්ග අඩි', value: '2500' },
        { label: 'උණු වතුර', value: 'සෝලා' },
        { label: 'වැරන්ඩාව', value: 'ඔව්' },
        { label: 'වටතාප්පය සහ ගෙට්ටුව', value: 'ඔව්' },
        { label: 'නළ ජලය සහ ලිං ජලය', value: 'ඔව්' },
        { label: 'නිට්ටබුව නගරයට', value: '1.5km' },
        { label: 'වේයන්ගොඩ නගරයට', value: '3.5km' },
        { label: 'අධිවේගී මාර්ග පිවිසුමට', value: '2.Km' },
        { label: 'පරිසරය', value: 'නිදහස් හා සාමකාමී පරිසරය. ගංවතුරෙන් සහ ස්වාභාවික විපත් වලින් තොර ප්රදේශය' },
        { label: 'මිල', value: 'සාකච්ඡා කළ හැකිය' },
        { label: 'ඔප්පු', value: 'නිරවුල් ඔප්පු' }
      ]
    }
  }
];
