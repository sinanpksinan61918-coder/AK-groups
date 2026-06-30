export const GALLERY_IMAGES = [
  { src: "/images/hostel/bedspace.jpg", label: "Shared Room" },
  { src: "/images/hostel/halll.jpg", label: "Hall View" },
  { src: "/images/hostel/studyarea.jpg", label: "Study Area" },
  { src: "/images/hostel/bathroom.jpg", label: "Bathroom" },
  { src: "/images/hostel/dryarea.jpg", label: "Cloth Drying Area" },
  { src: "/images/hostel/parking.jpg", label: "Parking Area" },
  { src: "/images/hostel/filter.jpg", label: "Filtered Water" },
  { src: "/images/hostel/shoerack.jpg", label: "Shoe Rack" },
] as const;

export const VISIBLE_GALLERY_COUNT = 4;

export const AMENITIES = [
  {
    icon: "Wifi" as const,
    title: "High-speed Wi-Fi",
    description: "Fibre broadband across all rooms",
  },
  {
    icon: "ShieldCheck" as const,
    title: "24/7 Security",
    description: "CCTV coverage and gated entry",
  },
  {
    icon: "Droplets" as const,
    title: "Filtered Water",
    description: "Clean purified drinking water always available",
  },
  {
    icon: "Wind" as const,
    title: "Cloth Drying Area",
    description: "Dedicated open space to dry your clothes",
  },
  {
    icon: "Car" as const,
    title: "Parking Facility",
    description: "Safe parking space available for residents",
  },
  {
    icon: "MapPin" as const,
    title: "Prime Location",
    description: "Close to colleges, shops and bus stops in Kalamassery",
  },
] as const;

export const HERO_STATS = [
  "3 Beds per Room",
  "24/7 Security",
  "100% Clean & Ready",
] as const;
