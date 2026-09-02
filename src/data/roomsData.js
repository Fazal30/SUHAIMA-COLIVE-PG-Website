import room1 from "../assets/room-1.jpeg";
import room2 from "../assets/room-2.jpeg";
import room3 from "../assets/room-3.jpeg";
import room4 from "../assets/room-4.jpeg";
import room5 from "../assets/room-5.jpeg";
import room6 from "../assets/room-6.jpeg";
import room8 from "../assets/room-8.jpeg";
import room9 from "../assets/room-9.jpeg";
import room10 from "../assets/room-10.jpeg";

export const ROOM_CATEGORIES = [
  {
    id: 1,
    type: "The Elite Single",
    category: "Luxury Private",
    sharing: "single",
    price: "13,000",
    numericPrice: 13000,
    deposit: "13,000",
    hasAc: true,
    available: true,
    images: [room3, room4, room5],
    coverImage: room3,
    amenities: [
      "Attached Balcony",
      "Private Workstation",
      "King Bed",
      "High-speed WiFi",
      "3 Meals/Day",
      "Daily Housekeeping",
      "Biometric Entry",
      "Power Backup"
    ],
    description: "Designed for the focused professional. Complete privacy with premium wooden interior, ergonomic chair, spacious wardrobe, and private balcony view.",
    highlights: ["Complete Privacy", "Dedicated Work Desk", "Attached Washroom", "Quiet Zone"]
  },
  {
    id: 2,
    type: "Premium Double",
    category: "Shared Excellence",
    sharing: "double",
    price: "7,500",
    numericPrice: 7500,
    deposit: "7,500",
    hasAc: true,
    available: true,
    images: [room8, room6, room1],
    coverImage: room8,
    amenities: [
      "Spacious Storage",
      "Individual Desks",
      "Twin Beds",
      "Task Lighting",
      "High-speed WiFi",
      "3 Meals/Day",
      "Daily Housekeeping",
      "Biometric Entry"
    ],
    description: "The perfect balance of social living and personal comfort. Shared by two with ample personal wardrobe space, separate study desks, and modern ventilation.",
    highlights: ["Individual Desks", "Spacious Lockers", "Ample Natural Light", "Twin Beds"]
  },
  {
    id: 3,
    type: "Executive Triple",
    category: "Community Living",
    sharing: "triple",
    price: "6,500",
    numericPrice: 6500,
    deposit: "6,500",
    hasAc: false,
    available: false,
    images: [room2, room9, room10],
    coverImage: room2,
    amenities: [
      "Extra Storage",
      "Lounge Access",
      "High Ceilings",
      "Comfortable Beds",
      "High-speed WiFi",
      "3 Meals/Day",
      "Daily Housekeeping",
      "Biometric Entry"
    ],
    description: "Affordable luxury for students and young creators. Massive community vibes with comfortable individual bedding, private lockers, and rooftop deck access.",
    highlights: ["Cost Effective", "Vibrant Community", "Generous Storage", "Lounge Access"]
  }
];

export const MOCK_ROOMS = [
  { id: 1, type: "Single Sharing", category: "The Elite Single", price: "13,000", numericPrice: 13000, sharing: "single", available: true, hasAc: true, image: room3 },
  { id: 2, type: "Single Sharing", category: "The Elite Single", price: "13,000", numericPrice: 13000, sharing: "single", available: true, hasAc: true, image: room4 },
  { id: 3, type: "Single Sharing", category: "The Elite Single", price: "13,000", numericPrice: 13000, sharing: "single", available: true, hasAc: true, image: room5 },
  { id: 4, type: "Double Sharing", category: "Premium Double", price: "7,500", numericPrice: 7500, sharing: "double", available: true, hasAc: true, image: room8 },
  { id: 5, type: "Double Sharing", category: "Premium Double", price: "7,500", numericPrice: 7500, sharing: "double", available: true, hasAc: false, image: room6 },
  { id: 6, type: "Double Sharing", category: "Premium Double", price: "7,500", numericPrice: 7500, sharing: "double", available: true, hasAc: false, image: room1 },
  { id: 7, type: "Triple Sharing", category: "Executive Triple", price: "6,500", numericPrice: 6500, sharing: "triple", available: false, hasAc: false, image: room2 },
  { id: 8, type: "Triple Sharing", category: "Executive Triple", price: "6,500", numericPrice: 6500, sharing: "triple", available: false, hasAc: false, image: room9 },
  { id: 9, type: "Triple Sharing", category: "Executive Triple", price: "6,500", numericPrice: 6500, sharing: "triple", available: false, hasAc: false, image: room10 },
];

export const getRoomById = (id) => {
  const numericId = parseInt(id, 10);
  
  const categoryMatch = ROOM_CATEGORIES.find((r) => r.id === numericId);
  if (categoryMatch) return categoryMatch;

  const mockMatch = MOCK_ROOMS.find((r) => r.id === numericId);
  if (mockMatch) {
    const parentCategory = ROOM_CATEGORIES.find((c) => c.sharing === mockMatch.sharing) || ROOM_CATEGORIES[0];
    return {
      ...parentCategory,
      id: mockMatch.id,
      type: `${mockMatch.type} - Room #${mockMatch.id}`,
      price: mockMatch.price,
      numericPrice: mockMatch.numericPrice,
      available: mockMatch.available,
      coverImage: mockMatch.image,
      images: [mockMatch.image, ...parentCategory.images.filter((img) => img !== mockMatch.image)],
    };
  }

  return ROOM_CATEGORIES[0];
};

