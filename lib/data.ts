export interface CulturalPoint {
  id: string
  name: string
  type: string
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  images: string[]
  shortDescription: string
  detailedDescription: string
  rating: number
  features: string[]
}

export const culturalPoints: CulturalPoint[] = [
  {
    id: "kalaja",
    name: "Kalaja e Elbasanit",
    type: "Kalaja",
    location: "Qendër, Elbasan",
    coordinates: {
      lat: 41.1125,
      lng: 20.0822
    },
    images: [
      "/images/kalaja-1.jpg",
      "/images/kalaja-2.jpg"
    ],
    shortDescription: "Kalaja e lashtë romake e shekullit të 3-të me mure të forta dhe histori të pasur.",
    detailedDescription: "Kalaja e Elbasanit është një monument i rëndësishëm historik i cili daton që nga shekulli i 3-të. Ajo u ndërtua nga perandori romak Justinian I dhe ka qenë një qendër e rëndësishme ushtarake dhe tregtare gjatë historisë. Murat e saj të fortë kanë rezistuar teste kohore dhe luftërash të shumta.",
    rating: 4.7,
    features: ["Arkitekturë Antike", "Mure të Forta", "Pamje Panoramike", "Monument Kulturore"]
  },
  {
    id: "muzeu-etnografik",
    name: "Muzeu Etnografik",
    type: "Muze",
    location: "Qendër, Elbasan",
    coordinates: {
      lat: 41.1130,
      lng: 20.0835
    },
    images: [
      "/images/muzeu-1.jpg",
      "/images/muzeu-2.jpg"
    ],
    shortDescription: "Muze që prezanton traditat dhe kulturën popullore të rajonit të Elbasanit.",
    detailedDescription: "Muzeu Etnografik i Elbasanit ofron një pasqyrë të pasur të jetës tradicionale shqiptare. Koleksionet përfshijnë veshje tradicionale, vegla muzikore, enë dhe artefakte të tjera që tregojnë historinë dhe kulturën e rajonit.",
    rating: 4.5,
    features: ["Koleksione Tradicionale", "Veshje Popullore", "Vegla Muzikore", "Edukative"]
  },
  {
    id: "kisha",
    name: "Kisha e Shën Mërisë",
    type: "Kishë",
    location: "Qendër, Elbasan",
    coordinates: {
      lat: 41.1115,
      lng: 20.0818
    },
    images: [
      "/images/kisha-1.jpg",
      "/images/kisha-2.jpg"
    ],
    shortDescription: "Kishë e vjetër ortodokse me ikona të vlefshme dhe arkitekturë unike.",
    detailedDescription: "Kisha e Shën Mërisë është një nga kishët më të vjetra në rajon, me një histori të pasur fetare dhe kulturore. Ajo shërben si një qendër e rëndësishme për komunitetin ortodoks lokal dhe është e njohur për ikonat e saj të vlefshme dhe arkitekturën e veçantë.",
    rating: 4.6,
    features: ["Arkitekturë Fetare", "Ikona të Vlefshme", "Vend Pushimi", "Historike"]
  },
  {
    id: "xhamia-mbret",
    name: "Xhamia e Mbretit",
    type: "Xhami",
    location: "Qendër, Elbasan",
    coordinates: {
      lat: 41.1142,
      lng: 20.0841
    },
    images: [
      "/images/xhamia-1.jpg",
      "/images/xhamia-2.jpg"
    ],
    shortDescription: "Xhami e vjetër osmane me minare dhe arkitekturë karakteristike të periudhës.",
    detailedDescription: "Xhamia e Mbretit është një monument i rëndësishëm i periudhës osmane në Elbasan. Ndërtesa është një shembull i shkëlqyer i arkitekturës islame dhe ka shërbyer si qendër fetare për komunitetin musliman për shekuj me radhë.",
    rating: 4.4,
    features: ["Arkitekturë Osmane", "Minare", "Vend Fetar", "Monument"]
  }
]