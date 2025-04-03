export interface TractorProfile {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  images?: string[];
  make: string;
  model: string;
  responseMessages: string[];
}

// Helper function to handle image paths for both local and GitHub Pages environments
const getImagePath = (path: string) => {
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return cleanPath;
};

export const tractorProfiles: TractorProfile[] = [
  {
    id: 1,
    name: "Kubota B8200",
    age: 35,
    bio: "Reliable compact tractor with Japanese efficiency. I may be small but I can handle any job around the farm. Looking for someone who appreciates durability and versatility.",
    image: getImagePath("/tractor-pics/kubota_b8200_1.webp"),
    images: [
      getImagePath("/tractor-pics/kubota_b8200_1.webp"),
      getImagePath("/tractor-pics/KUBOTA_B8200_2.webp"),
      getImagePath("/tractor-pics/KUBOTA-B8200-3.webp"),
      getImagePath("/tractor-pics/KUBOTA-B8200-4.webp")
    ],
    make: "Kubota",
    model: "B8200",
    responseMessages: [
      "I'm compact but mighty. How about $9,500?",
      "Japanese engineering that never quits. Worth every penny at $10,200.",
      "I've been working farms since the 80s and still going strong. $9,800 takes me home."
    ]
  },
  {
    id: 2,
    name: "John Deere 4010 2WD Canopy",
    age: 58,
    bio: "Classic John Deere with vintage charm. I've been working farms since the 1960s and still have plenty of life left. Looking for a collector who appreciates history and craftsmanship.",
    image: "/tractor-pics/X-JD-4010-2WD-CANOPY-1.webp",
    images: [
      "/tractor-pics/X-JD-4010-2WD-CANOPY-1.webp",
      "/tractor-pics/X-JD-4010-2WD-CANOPY-2.webp",
      "/tractor-pics/X-JD-4010-2WD-CANOPY-3.webp"
    ],
    make: "John Deere",
    model: "4010 2WD",
    responseMessages: [
      "I'm a piece of American farming history. $18,500 for a classic.",
      "They don't make 'em like me anymore. $19,200 and I'm yours.",
      "I've been turning heads in fields since the Kennedy administration. $18,800."
    ]
  },
  {
    id: 3,
    name: "Oliver Standard 88 Diesel",
    age: 65,
    bio: "Vintage Oliver with a heart of steel. I'm a collector's dream and still ready to work. Looking for someone who values American agricultural heritage.",
    image: "/tractor-pics/OLIVER-STANDARD-88-DIESEL-1.webp",
    images: [
      "/tractor-pics/OLIVER-STANDARD-88-DIESEL-1.webp",
      "/tractor-pics/OLIVER-STANDARD-88-DIESEL-2.webp",
      "/tractor-pics/OLIVER-STANDARD-88-DIESEL-3.webp"
    ],
    make: "Oliver",
    model: "Standard 88 Diesel",
    responseMessages: [
      "I'm a rare piece of farming history that still runs like a dream. $14,500.",
      "Oliver quality from the golden age of American tractors. $15,200.",
      "I've outlasted most tractors half my age. $14,800 for timeless reliability."
    ]
  },
  {
    id: 4,
    name: "Massey Ferguson 180 2WD",
    age: 52,
    bio: "Red classic with timeless appeal. I've been turning heads in fields for decades. Seeking a farmer who appreciates traditional design with proven performance.",
    image: "/tractor-pics/MF-180-2WD-1.webp",
    images: [
      "/tractor-pics/MF-180-2WD-1.webp",
      "/tractor-pics/MF-180-2WD-2.webp",
      "/tractor-pics/MF-180-2WD-3.webp"
    ],
    make: "Massey Ferguson",
    model: "180 2WD",
    responseMessages: [
      "My red finish still turns heads after all these years. $11,500.",
      "I'm the definition of farm-tested reliability. $12,000 and I'm yours.",
      "Simple design means I'm easy to maintain and hard to break. $11,800."
    ]
  },
  {
    id: 5,
    name: "Massey Ferguson 135",
    age: 55,
    bio: "Iconic Massey Ferguson that defined an era. My simple design means I'm easy to maintain and will run forever. Looking for someone who appreciates classics that still work hard.",
    image: "/tractor-pics/MF-135-1.webp",
    images: [
      "/tractor-pics/MF-135-1.webp",
      "/tractor-pics/MF-135-2.webp",
      "/tractor-pics/MF-135-3.webp"
    ],
    make: "Massey Ferguson",
    model: "135",
    responseMessages: [
      "I'm possibly the most successful tractor model ever made. $9,800.",
      "Farmers around the world still rely on me every day. $10,500.",
      "I'm the perfect blend of vintage charm and daily usability. $10,200."
    ]
  },
  {
    id: 6,
    name: "Mahindra 4110 4WD ROPS",
    age: 15,
    bio: "Indian powerhouse with loader and bucket included. I offer excellent value with no compromises on performance. Seeking a practical farmer who wants reliability without the premium price tag.",
    image: "/tractor-pics/MAHINDRA-4110-4WD-ROPS-W:LDR&BUCKET-1.webp",
    images: [
      "/tractor-pics/MAHINDRA-4110-4WD-ROPS-W:LDR&BUCKET-1.webp",
      "/tractor-pics/MAHINDRA-4110-4WD-ROPS-W:LDR&BUCKET-2.webp",
      "/tractor-pics/MAHINDRA-4110-4WD-ROPS-W:LDR&BUCKET-3.webp",
      "/tractor-pics/MAHINDRA-4110-4WD-ROPS-W:LDR&BUCKET-.webp"
    ],
    make: "Mahindra",
    model: "4110 4WD",
    responseMessages: [
      "I come with loader and bucket included. Great value at $15,500.",
      "The world's best-selling tractor brand for a reason. $16,200.",
      "Built for tough conditions and ready for anything. $15,800."
    ]
  },
  {
    id: 7,
    name: "Landini 80 2WD",
    age: 28,
    bio: "Italian workhorse with climate control and loader. I combine European style with serious performance. Looking for someone who appreciates attention to detail and cabin comfort.",
    image: "/tractor-pics/LANDINI-80-2WD-C:A-W:LDR&BUCKET-1.webp",
    images: [
      "/tractor-pics/LANDINI-80-2WD-C:A-W:LDR&BUCKET-1.webp",
      "/tractor-pics/LANDINI-80-2WD-C:A-W:LDR&BUCKET-2.webp",
      "/tractor-pics/LANDINI-80-2WD-C:A-W:LDR&BUCKET-3.webp"
    ],
    make: "Landini",
    model: "80 2WD",
    responseMessages: [
      "Italian design meets practical functionality. $22,500 with A/C and loader.",
      "My climate-controlled cabin makes long work days comfortable. $23,200.",
      "I come with a loader and bucket ready for any job. $22,800."
    ]
  },
  {
    id: 8,
    name: "Kubota M6800",
    age: 20,
    bio: "Reliable Kubota with loader and bucket. Orange you glad we matched? My reputation for durability is unmatched. Seeking a farmer who values long-term relationships.",
    image: "/tractor-pics/KUBOTA-M6800-W:-LDR&BUCKET-1.webp",
    images: [
      "/tractor-pics/KUBOTA-M6800-W:-LDR&BUCKET-1.webp",
      "/tractor-pics/KUBOTA-M6800-W:-LDR&BUCKET-2.webp",
      "/tractor-pics/KUBOTA-M6800-W:-LDR&BUCKET-3.webp"
    ],
    make: "Kubota",
    model: "M6800",
    responseMessages: [
      "Ready to work with loader and bucket included. $19,500.",
      "My resale value stays high for a reason. $20,200 for proven reliability.",
      "Orange is the color of dependability in the tractor world. $19,800."
    ]
  },
  {
    id: 9,
    name: "Kubota L2900 4WD ROPS",
    age: 25,
    bio: "Compact 4WD Kubota with front loader. I'm the perfect size for small to medium farms and landscaping. Looking for someone who needs versatility in a smaller package.",
    image: "/tractor-pics/KUBOTA-L2900-4WD-ROPS-W:-LDR-AND-BUCKET-1.webp",
    images: [
      "/tractor-pics/KUBOTA-L2900-4WD-ROPS-W:-LDR-AND-BUCKET-1.webp",
      "/tractor-pics/KUBOTA-L2900-4WD-ROPS-W:-LDR-AND-BUCKET-2.webp",
      "/tractor-pics/KUBOTA-L2900-4WD-ROPS-W:-LDR-AND-BUCKET-3.webp"
    ],
    make: "Kubota",
    model: "L2900 4WD",
    responseMessages: [
      "Right-sized for versatility with 4WD capability. $14,500.",
      "ROPS for safety plus loader and bucket for productivity. $15,200.",
      "Perfect for small acreage or as a second tractor. $14,800."
    ]
  },
  {
    id: 10,
    name: "Kubota L2800 4WD",
    age: 18,
    bio: "Compact and agile 4WD Kubota. I can squeeze into tight spaces while still having the power to get serious work done. Seeking a farmer who has diverse tasks that need a versatile partner.",
    image: "/tractor-pics/KUBOTA-L2800-4WD-1.webp",
    images: [
      "/tractor-pics/KUBOTA-L2800-4WD-1.webp",
      "/tractor-pics/KUBOTA-L2800-4WD-2.webp",
      "/tractor-pics/KUBOTA-L2800-4WD-3.webp",
      "/tractor-pics/KUBOTA-L2800-4WD-4.webp"
    ],
    make: "Kubota",
    model: "L2800 4WD",
    responseMessages: [
      "4WD traction in a compact package. $13,500.",
      "Perfect balance of size and capability. $14,200.",
      "I can handle everything from mowing to loader work. $13,800."
    ]
  },
  {
    id: 11,
    name: "Kubota B21 TLB",
    age: 16,
    bio: "Compact tractor-loader-backhoe. Three machines in one compact package! Looking for someone with diverse needs who appreciates versatility and efficiency.",
    image: "/tractor-pics/KUBOTA-B21-TLB-1.webp",
    images: [
      "/tractor-pics/KUBOTA-B21-TLB-1.webp",
      "/tractor-pics/KUBOTA-B21-TLB-2.webp",
      "/tractor-pics/KUBOTA-B21-TLB-3.webp"
    ],
    make: "Kubota",
    model: "B21 TLB",
    responseMessages: [
      "Backhoe, loader, and tractor all in one! Great value at $21,500.",
      "Why buy three machines when you can have all in one? $22,200.",
      "Compact size but serious digging and loading capabilities. $21,800."
    ]
  },
  {
    id: 12,
    name: "John Deere 5420 2WD ROPS",
    age: 19,
    bio: "Versatile John Deere with loader and hay fork. I'm ready for livestock operations and general farm work. Seeking someone who appreciates the perfect blend of modern features and classic reliability.",
    image: "/tractor-pics/JD-5420-2WD-ROPS-W:LDR&HAY-FORK-1.webp",
    images: [
      "/tractor-pics/JD-5420-2WD-ROPS-W:LDR&HAY-FORK-1.webp",
      "/tractor-pics/JD-5420-2WD-ROPS-W:LDR&HAY-FORK-2.webp",
      "/tractor-pics/JD-5420-2WD-ROPS-W:LDR&HAY-FORK-3.webp"
    ],
    make: "John Deere",
    model: "5420 2WD",
    responseMessages: [
      "Perfect for hay operations with included hay fork. $24,500.",
      "The 5000 series is known for versatility and reliability. $25,200.",
      "I come ready to work with loader and implements. $24,800."
    ]
  },
  {
    id: 13,
    name: "John Deere 5400 2WD Canopy",
    age: 22,
    bio: "Hardworking John Deere utility tractor with canopy and loader. I offer the perfect combination of power and maneuverability. Looking for someone who needs a daily workhorse.",
    image: "/tractor-pics/JD-5400-2WD-CANOPY-W:LDR&BUCKET-1.webp",
    images: [
      "/tractor-pics/JD-5400-2WD-CANOPY-W:LDR&BUCKET-1.webp",
      "/tractor-pics/JD-5400-2WD-CANOPY-W:LDR&BUCKET-2.webp",
      "/tractor-pics/JD-5400-2WD-CANOPY-W:LDR&BUCKET-3.webp"
    ],
    make: "John Deere",
    model: "5400 2WD",
    responseMessages: [
      "Ready for daily use with loader and canopy. $20,500.",
      "Reliable John Deere power with low maintenance costs. $21,200.",
      "Perfect utility tractor for a variety of farm tasks. $20,800."
    ]
  },
  {
    id: 14,
    name: "John Deere 5075E 4WD",
    age: 8,
    bio: "Modern John Deere with climate control and loader. I offer comfort and capability in one green package. Seeking someone who values modern features and all-day comfort.",
    image: "/tractor-pics/JD-5075E-4WD-C:A-W:LDR&BUCKET-1.webp",
    images: [
      "/tractor-pics/JD-5075E-4WD-C:A-W:LDR&BUCKET-1.webp",
      "/tractor-pics/JD-5075E-4WD-C:A-W:LDR&BUCKET-2.webp",
      "/tractor-pics/JD-5075E-4WD-C:A-W:LDR&BUCKET-3.webp"
    ],
    make: "John Deere",
    model: "5075E 4WD",
    responseMessages: [
      "Modern comfort with A/C and 4WD capability. $38,500.",
      "E-series offers the perfect balance of features and value. $39,200.",
      "Low hours and ready for years of service. $38,800."
    ]
  },
  {
    id: 15,
    name: "John Deere 5055E 4WD Canopy",
    age: 10,
    bio: "Practical John Deere 4WD with canopy. I deliver legendary reliability in a right-sized package. Looking for someone who wants the perfect combination of value and capability.",
    image: "/tractor-pics/JD-5055E-4WD-CANOPY-1.webp",
    images: [
      "/tractor-pics/JD-5055E-4WD-CANOPY-1.webp",
      "/tractor-pics/JD-5055E-4WD-CANOPY-2.webp",
      "/tractor-pics/JD-5055E-4WD-CANOPY-3.webp",
      "/tractor-pics/JD-5055E-4WD-CANOPY-4.webp"
    ],
    make: "John Deere",
    model: "5055E 4WD",
    responseMessages: [
      "4WD traction with canopy protection. $32,500.",
      "Perfect size for versatility around the farm. $33,200.",
      "Fuel efficient and easy to operate. $32,800."
    ]
  },
  {
    id: 16,
    name: "John Deere 4240 2WD",
    age: 42,
    bio: "Classic John Deere row crop tractor with climate control. I'm from the golden age of farm tractors when they were built to last generations. Seeking someone who appreciates vintage power with modern comfort.",
    image: "/tractor-pics/JD-4240-2WD-C:A-1.webp",
    images: [
      "/tractor-pics/JD-4240-2WD-C:A-1.webp",
      "/tractor-pics/JD-4240-2WD-C:A-2.webp",
      "/tractor-pics/JD-4240-2WD-C:A-3.webp"
    ],
    make: "John Deere",
    model: "4240 2WD",
    responseMessages: [
      "Classic power with the luxury of A/C. $26,500.",
      "From the era when tractors were built to last forever. $27,200.",
      "Still outperforms many newer models. $26,800."
    ]
  },
  {
    id: 17,
    name: "John Deere 4010 2WD",
    age: 60,
    bio: "Vintage John Deere from the revolutionary 4010 series. I changed farming forever when I was introduced. Looking for a collector who values innovation and history.",
    image: "/tractor-pics/JD-4010-2WD-1.webp",
    images: [
      "/tractor-pics/JD-4010-2WD-1.webp",
      "/tractor-pics/JD-4010-2WD-2.webp",
      "/tractor-pics/JD-4010-2WD-3.webp"
    ],
    make: "John Deere",
    model: "4010 2WD",
    responseMessages: [
      "A piece of agricultural history that changed farming forever. $18,500.",
      "Collectors dream in excellent restored condition. $19,200.",
      "From the era when John Deere revolutionized tractor design. $18,800."
    ]
  },
  {
    id: 18,
    name: "John Deere 2040 2WD",
    age: 38,
    bio: "Compact utility John Deere with loader and bucket. I'm the perfect size for small to medium operations. Seeking someone who needs versatility without excessive size.",
    image: "/tractor-pics/JD-2040-2WD-W:-LDR-AND-BUCKET-1.webp",
    images: [
      "/tractor-pics/JD-2040-2WD-W:-LDR-AND-BUCKET-1.webp",
      "/tractor-pics/JD-2040-2WD-W:-LDR-AND-BUCKET-2.webp",
      "/tractor-pics/JD-2040-2WD-W:-LDR-AND-BUCKET-3.webp",
      "/tractor-pics/JD-2040-2WD-W:-LDR-AND-BUCKET-4.webp"
    ],
    make: "John Deere",
    model: "2040 2WD",
    responseMessages: [
      "Perfect utility tractor with loader included. $14,500.",
      "Right-sized for small to medium farms. $15,200.",
      "Economical to run with plenty of capability. $14,800."
    ]
  },
  {
    id: 19,
    name: "Hitachi 27U Excavator",
    age: 12,
    bio: "Compact Hitachi excavator with hydraulic thumb and two buckets. I may not be a tractor, but I can dig like nobody's business! Looking for someone with serious earth-moving needs.",
    image: "/tractor-pics/HITACHI-27U-EXCAVATOR-HYDRAULIC-THUMB-AND-2-BUCKETS-1.webp",
    images: [
      "/tractor-pics/HITACHI-27U-EXCAVATOR-HYDRAULIC-THUMB-AND-2-BUCKETS-1.webp",
      "/tractor-pics/HITACHI-27U-EXCAVATOR-HYDRAULIC-THUMB-AND-2-BUCKETS-2.webp",
      "/tractor-pics/HITACHI-27U-EXCAVATOR-HYDRAULIC-THUMB-AND-2-BUCKETS-3.webp"
    ],
    make: "Hitachi",
    model: "27U Excavator",
    responseMessages: [
      "Compact size with serious digging power. $28,500 with hydraulic thumb and extra bucket.",
      "Perfect for construction, drainage work, or landscaping. $29,200.",
      "Japanese reliability in a versatile excavator package. $28,800."
    ]
  },
  {
    id: 20,
    name: "Ford 445D",
    age: 30,
    bio: "Classic Ford industrial tractor with 4-post canopy. I offer simple, reliable performance without unnecessary frills. Seeking someone who values straightforward functionality.",
    image: "/tractor-pics/FORD-445D-4-POST-CANOPY-1.webp",
    images: [
      "/tractor-pics/FORD-445D-4-POST-CANOPY-1.webp",
      "/tractor-pics/FORD-445D-4-POST-CANOPY-2.webp",
      "/tractor-pics/FORD-445D-4-POST-CANOPY-3.webp"
    ],
    make: "Ford",
    model: "445D",
    responseMessages: [
      "Industrial-grade reliability with 4-post canopy. $11,500.",
      "Simple design means less maintenance and fewer problems. $12,200.",
      "Built when Ford made some of the best tractors around. $11,800."
    ]
  },
  {
    id: 21,
    name: "Case D35 4WD ROPS",
    age: 25,
    bio: "Hardworking Case with loader and hay spear. I'm ready for livestock operations and general farm work. Looking for someone who needs versatility and reliability in all conditions.",
    image: "/tractor-pics/CASE-D35-4WD-ROPS-W:-LDR-AND-HAY-SPEER-1.webp",
    images: [
      "/tractor-pics/CASE-D35-4WD-ROPS-W:-LDR-AND-HAY-SPEER-1.webp",
      "/tractor-pics/CASE-D35-4WD-ROPS-W:-LDR-AND-HAY-SPEER-2.webp",
      "/tractor-pics/CASE-D35-4WD-ROPS-W:-LDR-AND-HAY-SPEER-3.webp"
    ],
    make: "Case",
    model: "D35 4WD",
    responseMessages: [
      "Perfect for hay operations with loader and hay spear included. $22,500.",
      "4WD traction for all conditions. $23,200.",
      "Case reliability with practical implements included. $22,800."
    ]
  },
  {
    id: 22,
    name: "Case CX210 Excavator",
    age: 15,
    bio: "Powerful Case excavator ready for serious digging. I can move mountains (almost literally). Seeking someone with major earth-moving projects who needs proven performance.",
    image: "/tractor-pics/CASE-CX210-EXCAVATOR-1.webp",
    images: [
      "/tractor-pics/CASE-CX210-EXCAVATOR-1.webp",
      "/tractor-pics/CASE-CX210-EXCAVATOR-2.webp",
      "/tractor-pics/CASE-CX210-EXCAVATOR-3.webp"
    ],
    make: "Case",
    model: "CX210 Excavator",
    responseMessages: [
      "Professional-grade excavator for serious projects. $68,500.",
      "Perfect for construction, mining, or large-scale earthworks. $70,200.",
      "Case reliability with powerful hydraulics. $69,800."
    ]
  },
  {
    id: 23,
    name: "Can-Am Defender Max 1000",
    age: 1,
    bio: "2022 Can-Am side-by-side utility vehicle with only 1604 miles. I'm practically brand new and ready for adventure! Looking for someone who needs versatility for work and play.",
    image: "/tractor-pics/2022-CAN-AM-DEFENDDER-MAX-1000-SIDE-BY-SIDE-NO-TITLE-1604-MILES-WE-DO-NOT-GAURANTEE-MILES-1.webp",
    images: [
      "/tractor-pics/2022-CAN-AM-DEFENDDER-MAX-1000-SIDE-BY-SIDE-NO-TITLE-1604-MILES-WE-DO-NOT-GAURANTEE-MILES-1.webp",
      "/tractor-pics/2022-CAN-AM-DEFENDDER-MAX-1000-SIDE-BY-SIDE-NO-TITLE-1604-MILES-WE-DO-NOT-GAURANTEE-MILES-2.webp",
      "/tractor-pics/2022-CAN-AM-DEFENDDER-MAX-1000-SIDE-BY-SIDE-NO-TITLE-1604-MILES-WE-DO-NOT-GAURANTEE-MILES-3.webp"
    ],
    make: "Can-Am",
    model: "Defender Max 1000",
    responseMessages: [
      "2022 model with low miles. Great value at $16,500. Note: No title available.",
      "Perfect for farm use, hunting, or recreation. $17,200.",
      "Practically new with only 1604 miles. $16,800."
    ]
  }
];
