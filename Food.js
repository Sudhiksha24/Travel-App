import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Cheesy and delicious with fresh toppings.",
  },
  {
    id: 2,
    name: "Burger",
    image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Juicy beef patty with crispy lettuce and sauce.",
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Freshly made sushi rolls with wasabi and soy sauce.",
  },
  {
    id: 4,
    name: "Pasta",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Creamy and rich Italian pasta with parmesan.",
  },
  {
    id: 5,
    name: "Ice Cream",
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Cold and sweet treat with different flavors.",
  },
  {
    id: 6,
    name: "Salad",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Healthy mix of fresh greens and veggies.",
  },
  {
     id: 7,
     name: "Indian Food",
     image: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     description:"Best healthy food all over the world.",
  },
  {
    id: 8,
    name: "Shawarma",
    image: "https://images.pexels.com/photos/5602502/pexels-photo-5602502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Marinated meat roasted on a spit, served in pita with toppings.",
  }
];

const Food = () => {
  const navigate = useNavigate();
  return (
    <div className="gallery-container">
      <div className="food-grid">
        {foodItems.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} className="food-image" />
            <h3 className="food-name">{food.name}</h3>
            <p className="food-description">{food.description}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/Home page")}>Back to Home</button>
    </div>
  );
};

export default Food;
