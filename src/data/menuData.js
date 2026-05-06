import breakfast1 from "../assets/breakfast-monday.jpg"
import lunch1 from "../assets/lunch-mon.jpg"
import dinner1 from "../assets/dinner1.jpg"
import dinner2 from "../assets/dinner2.jpg"
import breakfast2 from "../assets/breakfast-tue.jpg"



export const weeklyMenu = [
  {
    day: "Monday",
    breakfast: { items: "Plain Dosa, Masala Dosa, Chutney", img: breakfast1 },
    lunch: { items: "Rice, Sambar, Papad", img: lunch1 },
    dinner: { items: "Rice, Roti, Dal, Sabji", img: dinner1 }
  },
  {
    day: "Tuesday",
    breakfast: { items: "Poori, Sagu, Kurma", img: breakfast2 },
    lunch: { items: "Rice, Dal, Sabji", img: lunch1 },
    dinner: { items: "Rice, Chole Bature", img: dinner2 }
  },
  {
    day: "Wednesday",
    breakfast: { items: "Poha, Upma, Semiya", img: "https://images.unsplash.com/photo-1611394576390-349f80164c48" },
    lunch: { items: "Rice, Sambar, Papad", img: "https://images.unsplash.com/photo-1626132646529-50063723307f" },
    dinner: { items: "Egg Rice, Veg Rice, Roti, Egg Veg Gravy", img: "https://images.unsplash.com/photo-1632731114972-e14b094602c3" }
  },
  {
    day: "Thursday",
    breakfast: { items: "Idly, Sambar, Chutney", img: "https://images.unsplash.com/photo-1627059152069-4f7f6ff2e4b4" },
    lunch: { items: "Rice, Dal, Sabji", img: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe" },
    dinner: { items: "Rice, Rasam, Satin Rajma, Roti", img: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe" }
  },
  {
    day: "Friday",
    breakfast: { items: "Oil Chapati, Gravy, Sabji", img: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe" },
    lunch: { items: "Rice, Sambar, Papad", img: "https://images.unsplash.com/photo-1626132646529-50063723307f" },
    dinner: { items: "Rice, Roti, Egg Masala, Mushroom Masala", img: "https://images.unsplash.com/photo-1626132646529-50063723307f" }
  },
  {
    day: "Saturday",
    breakfast: { items: "Uttappam, Onion Dosa, Chutney", img: "https://images.unsplash.com/photo-1668235904596-588b32f111b5" },
    lunch: { items: "Rice, Dal, Papad", img: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe" },
    dinner: { items: "Veg Biriyani, Raita, Sweet / Jeera Rice, Dal", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" }
  },
  {
    day: "Sunday",
    breakfast: { items: "Pasta, Noodles, Pongal", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
    lunch: { items: "Rice, Sambar, Sabji, Papad", img: "https://images.unsplash.com/photo-1626132646529-50063723307f" },
    dinner: { items: "Roti, Chicken Gravy, Mushroom / Paneer Masala, Chicken Fry, Chicken Biryani, Mushroom Biryani", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" }
  }
];