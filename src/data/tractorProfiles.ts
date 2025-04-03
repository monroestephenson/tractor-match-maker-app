
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

export const tractorProfiles: TractorProfile[] = [
  {
    id: 1,
    name: "John Deere 6120M",
    age: 32,
    bio: "Farm-to-table enthusiast. Spend most of my days in the fields. Looking for someone who appreciates a good horsepower and doesn't mind getting a little dirty.",
    image: "https://images.unsplash.com/photo-1486325825272-539289af5d2f?w=800&auto=format&fit=crop",
    make: "John Deere",
    model: "6120M",
    responseMessages: [
      "I'm not just any green tractor, I'm THE green tractor. How about €40,000?",
      "My previous owner cried when we parted ways. €45,000 and you'll understand why.",
      "I've been plowing fields before it was cool. €42,500 is my price for vintage coolness."
    ]
  },
  {
    id: 2,
    name: "Massey Ferguson 8S",
    age: 27,
    bio: "Red and ready to mingle! Excellent at breaking the ice (and sometimes the soil too). My ideal date? A sunset drive through freshly plowed fields.",
    image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&auto=format&fit=crop",
    make: "Massey Ferguson",
    model: "8S",
    responseMessages: [
      "My hydraulics are in perfect condition if you know what I mean. €38,000.",
      "I've got more red flags than a parade... because I'm painted red! €39,500 takes me home.",
      "They call me the Ferrari of farm equipment. €41,000 and I'll show you why."
    ]
  },
  {
    id: 3,
    name: "New Holland T7",
    age: 24,
    bio: "Blue is my color, farming is my passion. Looking for someone who won't be jealous of my relationship with the combine harvester next door.",
    image: "https://images.unsplash.com/photo-1591638848655-e10b6e64bd00?w=800&auto=format&fit=crop",
    make: "New Holland",
    model: "T7",
    responseMessages: [
      "I come with air conditioning and heated seats. Worth every penny at €55,000.",
      "My previous date said I was too intense. I call it powerful! €53,000.",
      "Blue tractors have more fun. Find out for €56,500."
    ]
  },
  {
    id: 4,
    name: "Kubota M7",
    age: 29,
    bio: "Orange you glad we matched? Not into drama, but I can drag pretty much anything. Seeking a farmer who doesn't mind my occasional oil leaks.",
    image: "https://images.unsplash.com/photo-1573740144655-bbb6e88fb18a?w=800&auto=format&fit=crop",
    make: "Kubota",
    model: "M7",
    responseMessages: [
      "I'm compact but mighty. €36,000 and I'll prove it.",
      "Made in Japan, built for American fields. €37,500 for international quality!",
      "My orange finish never fades, just like my work ethic. €35,000."
    ]
  },
  {
    id: 5,
    name: "Fendt 942",
    age: 35,
    bio: "German engineering at its finest. Efficient, reliable, and can plow all night long. Looking for someone who appreciates precision and attention to detail.",
    image: "https://images.unsplash.com/photo-1592402138277-bb76a3d521a2?w=800&auto=format&fit=crop",
    make: "Fendt",
    model: "942",
    responseMessages: [
      "German engineering doesn't come cheap. €75,000.",
      "I've never broken down in my life. That kind of reliability costs €78,000.",
      "My fuel efficiency will save you money in the long run. Just €76,500 today."
    ]
  },
  {
    id: 6,
    name: "Case IH Magnum",
    age: 31,
    bio: "Red hot and powerful. I make the earth move (literally). Seeking someone who doesn't mind my workaholic nature and appreciates a classic design.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&auto=format&fit=crop",
    make: "Case IH",
    model: "Magnum",
    responseMessages: [
      "I've got more horsepower than your average sports car. €65,000.",
      "My previous owner won 'Farmer of the Year' three times. Coincidence? €67,500.",
      "I come with a premium sound system for those long harvest days. €64,000."
    ]
  },
  {
    id: 7,
    name: "Claas Axion",
    age: 26,
    bio: "Greener than my John Deere rivals. I may not be as famous, but I work twice as hard. Looking for a relationship with less maintenance and more field time.",
    image: "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=800&auto=format&fit=crop",
    make: "Claas",
    model: "Axion",
    responseMessages: [
      "European quality at a reasonable €58,000.",
      "My suspension is so good you'll think you're floating. €59,500.",
      "I've worked on the finest farms in Europe. Now yours for €57,000."
    ]
  },
  {
    id: 8,
    name: "Deutz-Fahr 6 Series",
    age: 33,
    bio: "German-Italian heritage, powerful build. Not afraid of hills or challenging terrain. Seeking someone who appreciates my unique green shade and robust nature.",
    image: "https://images.unsplash.com/photo-1522522853364-0d8ec595cc67?w=800&auto=format&fit=crop",
    make: "Deutz-Fahr",
    model: "6 Series",
    responseMessages: [
      "German engineering with Italian flair. Worth every cent at €49,000.",
      "My distinctive green color turns heads in any field. €51,500.",
      "I come with a 3-year warranty and free servicing. €50,000."
    ]
  },
  {
    id: 9,
    name: "Valtra T Series",
    age: 28,
    bio: "Finnish by design, global by nature. I thrive in extreme conditions and don't mind the cold. Seeking someone who appreciates Nordic quality and reliability.",
    image: "https://images.unsplash.com/photo-1599620589262-61f9d9e773d0?w=800&auto=format&fit=crop",
    make: "Valtra",
    model: "T Series",
    responseMessages: [
      "Built for the Arctic, perfect for anywhere. €54,000.",
      "Finnish design means I work when others freeze. €56,500.",
      "My heated cabin will keep you warm on the coldest days. €55,000."
    ]
  },
  {
    id: 10,
    name: "McCormick X8",
    age: 37,
    bio: "Classic name with modern features. I've got history but I'm not stuck in the past. Looking for someone who values tradition but embraces innovation.",
    image: "https://images.unsplash.com/photo-1529247833802-700f36177dcb?w=800&auto=format&fit=crop",
    make: "McCormick",
    model: "X8",
    responseMessages: [
      "A legendary name with modern technology. €62,000.",
      "I've got the bloodline of the original tractor pioneers. €63,500.",
      "Reliability isn't just a feature, it's my heritage. €61,000."
    ]
  },
  {
    id: 11,
    name: "JCB Fastrac",
    age: 30,
    bio: "Speed demon of the farm world. Who says tractors have to be slow? I'll get you from field to field in record time. Seeking a thrill-seeker who loves velocity.",
    image: "https://images.unsplash.com/photo-1588680388746-f9051b7b158e?w=800&auto=format&fit=crop",
    make: "JCB",
    model: "Fastrac",
    responseMessages: [
      "I'm the fastest tractor you'll ever own. €70,000.",
      "I can do 70km/h on the road. Speed costs €72,500.",
      "Racing stripes not included, but can be arranged. €71,000."
    ]
  },
  {
    id: 12,
    name: "Steyr Profi",
    age: 25,
    bio: "Austrian precision and mountain expertise. I handle slopes that make other tractors tremble. Looking for someone who appreciates fine engineering and isn't afraid of heights.",
    image: "https://images.unsplash.com/photo-1601461567438-d3d0c89be025?w=800&auto=format&fit=crop",
    make: "Steyr",
    model: "Profi",
    responseMessages: [
      "Tested in the Alps, ready for your farm. €48,000.",
      "Austrian engineering at its finest. €49,500.",
      "I come with a complimentary yodeling lesson. Just kidding. €47,000."
    ]
  },
  {
    id: 13,
    name: "Kioti RX7320",
    age: 22,
    bio: "Korean newcomer with lots to prove. I work harder to impress and never take a day off. Seeking someone who wants reliability without the premium price tag.",
    image: "https://images.unsplash.com/photo-1596806038309-e612bea92063?w=800&auto=format&fit=crop",
    make: "Kioti",
    model: "RX7320",
    responseMessages: [
      "All the features of the big brands at half the price. €32,000.",
      "Korean engineering is taking over the world. Get ahead of the trend for €33,500.",
      "I may be new to the scene, but I'll outwork any old-timer. €31,000."
    ]
  },
  {
    id: 14,
    name: "Zetor Forterra",
    age: 34,
    bio: "Czech-made workhorse with communist-era reliability. I might not have fancy features, but I'll never let you down. Seeking a practical partner who values substance over style.",
    image: "https://images.unsplash.com/photo-1561135351-236be53688b6?w=800&auto=format&fit=crop",
    make: "Zetor",
    model: "Forterra",
    responseMessages: [
      "Built behind the Iron Curtain to last forever. €28,000.",
      "No computer parts means nothing to go wrong. €29,500.",
      "The tractor equivalent of a brick outhouse. €27,000."
    ]
  },
  {
    id: 15,
    name: "Mahindra 6075",
    age: 27,
    bio: "Indian-engineered global performer. I work well in all conditions and don't mind the heat. Looking for someone who appreciates value and isn't hung up on European brands.",
    image: "https://images.unsplash.com/photo-1576187415893-a8d3ff936f60?w=800&auto=format&fit=crop",
    make: "Mahindra",
    model: "6075",
    responseMessages: [
      "The best-selling tractor brand in the world. €26,000.",
      "Built for the harsh conditions of rural India, perfect for anywhere. €27,500.",
      "More farmers trust Mahindra than any other brand globally. €25,000."
    ]
  },
  {
    id: 16,
    name: "Challenger MT800",
    age: 40,
    bio: "Tracked monster with incredible pulling power. I don't do small jobs. Seeking someone with big fields and bigger ambitions who needs serious horsepower.",
    image: "https://images.unsplash.com/photo-1565780415109-31772a687911?w=800&auto=format&fit=crop",
    make: "Challenger",
    model: "MT800",
    responseMessages: [
      "I can pull more than any wheeled tractor. €120,000.",
      "My tracks mean I can work when others get stuck. €125,000.",
      "I consume fields for breakfast. €123,000."
    ]
  },
  {
    id: 17,
    name: "TYM T754",
    age: 24,
    bio: "Korean compact with a big heart. I'm perfect for smaller holdings but don't underestimate my capability. Looking for someone who knows good things come in smaller packages.",
    image: "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?w=800&auto=format&fit=crop",
    make: "TYM",
    model: "T754",
    responseMessages: [
      "Ideal for smaller farms and big gardens. €22,000.",
      "All the features of a big tractor in a compact size. €23,500.",
      "Perfect for vineyards and orchards. €21,000."
    ]
  },
  {
    id: 18,
    name: "Antonio Carraro TTR",
    age: 31,
    bio: "Italian specialist built for vineyards and orchards. I'm nimble, articulated and can turn on a dime. Seeking someone with special needs who appreciates my unique abilities.",
    image: "https://images.unsplash.com/photo-1566083165034-7db526055f32?w=800&auto=format&fit=crop",
    make: "Antonio Carraro",
    model: "TTR",
    responseMessages: [
      "I can get between vineyard rows others can't reach. €45,000.",
      "Italian design meets specialized function. €46,500.",
      "My articulated body can turn in half the space of regular tractors. €44,000."
    ]
  },
  {
    id: 19,
    name: "Lamborghini Mach",
    age: 29,
    bio: "Yes, THAT Lamborghini. I was making tractors before supercars were a thing. Seeking someone who appreciates my heritage and doesn't mind my famous relatives.",
    image: "https://images.unsplash.com/photo-1612349688497-e9c93ff574af?w=800&auto=format&fit=crop",
    make: "Lamborghini",
    model: "Mach",
    responseMessages: [
      "From the same family as the supercars. €60,000.",
      "Italian passion in tractor form. €61,500.",
      "I'm what Ferruccio made before he met Enzo Ferrari. €59,000."
    ]
  },
  {
    id: 20,
    name: "Same Explorer",
    age: 33,
    bio: "Italian workhorse with Mediterranean charm. I work hard but know how to enjoy life too. Looking for someone who balances work and pleasure like I do.",
    image: "https://images.unsplash.com/photo-1517154868524-c6b5470e3c3f?w=800&auto=format&fit=crop",
    make: "Same",
    model: "Explorer",
    responseMessages: [
      "La dolce vita in tractor form. €43,000.",
      "I take a siesta every afternoon, but work twice as hard the rest of the day. €44,500.",
      "Italian design with German reliability. €42,000."
    ]
  },
  {
    id: 21,
    name: "Belarus 952",
    age: 36,
    bio: "Eastern European workhorse built like a tank. I may not be pretty but I'll outlast anything. Seeking someone who values toughness and doesn't need fancy electronics.",
    image: "https://images.unsplash.com/photo-1599840249864-777a150d5c84?w=800&auto=format&fit=crop",
    make: "Belarus",
    model: "952",
    responseMessages: [
      "Built to survive Siberian winters. €19,000.",
      "No computer parts means I can be fixed with basic tools. €20,500.",
      "I run on almost any fuel. Not recommended, but possible. €18,000."
    ]
  },
  {
    id: 22,
    name: "Iseki TG6",
    age: 26,
    bio: "Japanese precision in compact form. I'm perfect for smaller spaces but deliver big results. Looking for someone who appreciates attention to detail and meticulous engineering.",
    image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=800&auto=format&fit=crop",
    make: "Iseki",
    model: "TG6",
    responseMessages: [
      "Japanese reliability in a perfectly sized package. €24,000.",
      "I'll still be running perfectly in 30 years. €25,500.",
      "My engine is so precise you could use it as a watch. €23,000."
    ]
  },
  {
    id: 23,
    name: "LS XU6168",
    age: 22,
    bio: "Korean newcomer with American influence. I offer the best of both worlds at a price that won't break the bank. Seeking someone practical who recognizes good value.",
    image: "https://images.unsplash.com/photo-1535089395726-0f920e6a764c?w=800&auto=format&fit=crop",
    make: "LS",
    model: "XU6168",
    responseMessages: [
      "Korean engineering with an American design sensibility. €30,000.",
      "All the features of tractors costing twice as much. €31,500.",
      "I come with the best warranty in the business. €29,000."
    ]
  },
  {
    id: 24,
    name: "Landini Rex 4",
    age: 30,
    bio: "Italian specialist with a flair for the dramatic. I excel in orchards and vineyards where precision is paramount. Looking for someone who appreciates my specialized skills.",
    image: "https://images.unsplash.com/photo-1571173609332-f456a979fc24?w=800&auto=format&fit=crop",
    make: "Landini",
    model: "Rex 4",
    responseMessages: [
      "Perfect for fine Italian vineyards. €46,000.",
      "My precise handling is like a sports car for the fields. €47,500.",
      "I produce the tractors that produce the wine. €45,000."
    ]
  },
  {
    id: 25,
    name: "Branson 5825",
    age: 25,
    bio: "Korean-built compact with American sensibility. I offer premium features at a mid-range price. Seeking someone who recognizes value and doesn't need a fancy brand name.",
    image: "https://images.unsplash.com/photo-1595525101922-d70572d449cd?w=800&auto=format&fit=crop",
    make: "Branson",
    model: "5825",
    responseMessages: [
      "All the capabilities at half the price. €27,000.",
      "I'm the best tractor you've never heard of. €28,500.",
      "Made in Korea, built for America. €26,000."
    ]
  },
  {
    id: 26,
    name: "YTO X1304",
    age: 32,
    bio: "Chinese powerhouse with surprising refinement. I may come from the East, but I work well anywhere. Looking for someone open-minded who judges on performance, not origin.",
    image: "https://images.unsplash.com/photo-1563599222-4077b0e731fa?w=800&auto=format&fit=crop",
    make: "YTO",
    model: "X1304",
    responseMessages: [
      "Chinese engineering is better than you think. €22,000.",
      "I come with features that are optional extras on Western tractors. €23,500.",
      "Try me for a week. If I break down, return for free. €21,000."
    ]
  },
  {
    id: 27,
    name: "Lindner Lintrac",
    age: 28,
    bio: "Austrian mountain specialist with incredible agility. I can work on slopes that would terrify other tractors. Seeking someone with challenging terrain who needs special capabilities.",
    image: "https://images.unsplash.com/photo-1579532525495-39973bd6e640?w=800&auto=format&fit=crop",
    make: "Lindner",
    model: "Lintrac",
    responseMessages: [
      "I can work safely on 60% gradients. €55,000.",
      "Tested in the Alps, ready for anything. €56,500.",
      "Four-wheel steering for unmatched maneuverability. €54,000."
    ]
  },
  {
    id: 28,
    name: "Arbos 5130",
    age: 23,
    bio: "Italian newcomer with historic name. I'm reviving a classic brand with modern technology. Seeking someone who appreciates both heritage and innovation.",
    image: "https://images.unsplash.com/photo-1613532975227-402e3252b957?w=800&auto=format&fit=crop",
    make: "Arbos",
    model: "5130",
    responseMessages: [
      "A historic name reborn with modern technology. €41,000.",
      "Italian design with global engineering. €42,500.",
      "My distinctive green color stands out in any field. €40,000."
    ]
  },
  {
    id: 29,
    name: "Solis 90",
    age: 27,
    bio: "Indian powerhouse built for global conditions. I work well in extreme heat and don't mind getting dirty. Seeking someone practical who needs reliability without the premium price.",
    image: "https://images.unsplash.com/photo-1596891022594-9da754569743?w=800&auto=format&fit=crop",
    make: "Solis",
    model: "90",
    responseMessages: [
      "Built for the harshest conditions on earth. €24,000.",
      "More farmers in India use my brand than any other. €25,500.",
      "Simple design means less to go wrong. €23,000."
    ]
  },
  {
    id: 30,
    name: "Versatile 610",
    age: 38,
    bio: "Canadian prairie giant with enormous power. I handle big acreages without breaking a sweat. Looking for someone with serious land who needs serious performance.",
    image: "https://images.unsplash.com/photo-1529432944504-223d7015d368?w=800&auto=format&fit=crop",
    make: "Versatile",
    model: "610",
    responseMessages: [
      "I can plow more acres per day than any other tractor. €95,000.",
      "Built for the endless Canadian prairies. €98,500.",
      "My fuel tank is bigger than some compact cars. €96,000."
    ]
  }
];
