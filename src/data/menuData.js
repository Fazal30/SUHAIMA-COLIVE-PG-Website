import lunch1 from "../assets/lunch-mon.jpg"
import lunch2 from "../assets/lunch2.jpg"
import lunch3 from "../assets/lunch3.jpg"

import dinner1 from "../assets/dinner1.jpg"
import dinner2 from "../assets/dinner2.jpg"
import dinner3 from "../assets/dinner3.jpg"
import dinner4 from "../assets/dinner4.jpg";
import dinner5 from "../assets/dinner5.jpg";
import dinner6 from "../assets/dinner6.jpg";
import dinner7 from "../assets/dinner7.jpg";

import breakfast1 from "../assets/breakfast-monday.jpg"
import breakfast2 from "../assets/breakfast-tue.jpg"
import breakfast3 from "../assets/breakfast-wed.jpg"
import breakfast4 from "../assets/breakfast-thur.jpg"
import breakfast5 from "../assets/breakfast-fri.jpg"
import breakfast6 from "../assets/breakfast-stu.jpg"
import breakfast7 from "../assets/breakfast-sun.jpg"


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
    lunch: { items: "Rice, Dal, Sabji", img: lunch2 },
    dinner: { items: "Rice, Chole Bature", img: dinner2 }
  },
  {
    day: "Wednesday",
    breakfast: { items: "Poha, Upma, Semiya", img: breakfast3 },
    lunch: { items: "Rice, Sambar, Papad", img: lunch1 },
    dinner: { items: "Egg Rice, Veg Rice, Roti, Egg Veg Gravy", img: dinner3 }
  },
  {
    day: "Thursday",
    breakfast: { items: "Idly, Sambar, Chutney", img: breakfast4 },
    lunch: { items: "Rice, Dal, Sabji", img: lunch2 },
    dinner: { items: "Rice, Rasam, Satin Rajma, Roti", img: dinner4 }
  },
  {
    day: "Friday",
    breakfast: { items: "Oil Chapati, Gravy, Sabji", img: breakfast5 },
    lunch: { items: "Rice, Sambar, Papad", img: lunch1 },
    dinner: { items: "Rice, Roti, Egg Masala, Mushroom Masala", img: dinner5 }
  },
  {
    day: "Saturday",
    breakfast: { items: "Uttappam, Onion Dosa, Chutney", img:  breakfast6},
    lunch: { items: "Rice, Dal, Papad", img: lunch2 },
    dinner: { items: "Veg Biriyani, Raita, Sweet / Jeera Rice, Dal", img: dinner6 }
  },
  {
    day: "Sunday",
    breakfast: { items: "Pasta, Noodles, Pongal", img: breakfast7},
    lunch: { items: "Rice, Sambar, Sabji, Papad", img: lunch3 },
    dinner: { items: "Roti, Chicken Gravy, Mushroom / Paneer Masala, Chicken Fry, Chicken Biryani, Mushroom Biryani", img: dinner7 }
  }
];