export interface CulturalPoint {
  id: string
  name: string
  type: "Kalaja" | "Muze" | "Xhami" | "Kishë" | "Shtëpi Kulturore" | "Natyrë"
  shortDescription: string
  detailedDescription: string
  images: string[]
  location: string
  coordinates: { lat: number; lng: number }
  features: string[]
  rating: number // Initial rating
  reviews: number // Initial review count
}

export const culturalPoints: CulturalPoint[] = [
  {
    id: "kalaja-e-elbasanit",
    name: "Kalaja e Elbasanit",
    type: "Kalaja",
    shortDescription: "Një nga kalatë fushore më të mëdha në Ballkan, zemra historike e qytetit.",
    detailedDescription:
      "Kalaja e Elbasanit është një monument i rëndësishëm i trashëgimisë kulturore shqiptare. E ndërtuar fillimisht në shekullin e 4-të e.s. dhe e rindërtuar nga Sulltan Mehmeti II në vitin 1466, ajo përfaqëson një ndërthurje të kulturave romake, bizantine dhe osmane. Muret e saj rrethojnë lagjen e vjetër 'Kala', ku jeta vazhdon edhe sot mes rrugicave me kalldrëm dhe shtëpive karakteristike.",
    images: ["/elbasan-castle-walls.jpg", "/elbasan-castle-gate.jpg"],
    location: "Qendër, Elbasan",
    coordinates: { lat: 41.1125, lng: 20.0822 },
    features: ["Arkitekturë Mesjetare", "Lagje e Banimit", "Monument Kulture", "Panoramike"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "muzeu-etnografik",
    name: "Muzeu Etnografik",
    type: "Muze",
    shortDescription: "Një shtëpi karakteristike e shekullit të 18-të e shndërruar në muze.",
    detailedDescription:
      "Muzeu Etnografik i Elbasanit ndodhet në një shtëpi karakteristike me çardak të shekullit të 18-të, pranë Kalasë. Muzeu pasqyron kulturën, traditën dhe mënyrën e jetesës së qytetarëve elbasanas ndër shekuj. Aty ekspozohen veshje popullore, vegla pune, orendi shtëpiake dhe objekte të tjera me vlerë të veçantë historike.",
    images: ["/ethnographic-museum-elbasan.jpg", "/traditional-albanian-costumes.jpg"],
    location: "Rruga 'Qemal Stafa'",
    coordinates: { lat: 41.1118, lng: 20.0815 },
    features: ["Histori", "Etnografi", "Artizanat", "Arkitekturë Tradicionale"],
    rating: 4.6,
    reviews: 85,
  },
  {
    id: "kisha-shen-maria",
    name: "Kisha e Shën Marisë",
    type: "Kishë",
    shortDescription: "Një monument i rëndësishëm kulti dhe arti brenda mureve të Kalasë.",
    detailedDescription:
      "Kisha e Shën Marisë ndodhet brenda mureve të Kalasë së Elbasanit. E rindërtuar në vitin 1833 mbi themelet e një kishë më të vjetër, ajo shquhet për ikonostasin e saj të mrekullueshëm të gdhendur në dru dhe afresket e realizuara nga mjeshtrat e famshëm shqiptarë. Kisha shërben si një dëshmi e bashkëjetesës fetare dhe artit post-bizantin në qytet.",
    images: ["/saint-mary-church-elbasan.jpg"],
    location: "Brenda Kalasë, Elbasan",
    coordinates: { lat: 41.1128, lng: 20.0825 },
    features: ["Art Post-Bizantin", "Ikonostas i rrallë", "Vend Kulti", "Qetësi"],
    rating: 4.7,
    reviews: 92,
  },
  {
    id: "xhamia-mbret",
    name: "Xhamia Mbret",
    type: "Xhami",
    shortDescription: "Një nga xhamitë më të vjetra në Shqipëri, e ndërtuar rreth vitit 1492.",
    detailedDescription:
      "Xhamia Mbret është një nga monumentet më të vjetra të kultit islam në Shqipëri, e ndërtuar në fund të shekullit të 15-të. Ajo ndodhet në qendër të kalasë dhe karakterizohet nga arkitektura e thjeshtë por elegante e periudhës së hershme osmane. Xhamia ka luajtur një rol të rëndësishëm në jetën shpirtërore të komunitetit për shekuj me radhë.",
    images: ["/king-mosque-elbasan.jpg"],
    location: "Brenda Kalasë, Elbasan",
    coordinates: { lat: 41.1122, lng: 20.082 },
    features: ["Arkitekturë Islame", "Histori", "Vend Kulti"],
    rating: 4.5,
    reviews: 76,
  },
]

export const creatorInfo = {
  name: "Esmerald Suparaku",
  role: "Zhvillues Full-Stack & Pasionant i Kulturës",
  education: "Inxhinieri Elektronike",
  bio: "Pasion për teknologjinë dhe trashëgiminë kulturore. Ky projekt është realizuar në kuadër të EU Code Week për të promovuar vlerat e qytetit të Elbasanit përmes inovacionit digjital.",
  contact: "elektroniksuparakud@email.com",
  social: {
    linkedin: "#",
    github: "#",
  },
}
