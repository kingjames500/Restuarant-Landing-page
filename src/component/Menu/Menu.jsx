import React from "react";
import saladImage from "../../assets/images/food1.jpeg";
import vegiImage from "../../assets/images/vegetable salad.png";
import eggImage from "../../assets/images/egg veggie salad.png";

const dishes = [
  {
    id: 1,
    name: "Fattoush salad",
    description: "Description of the item",
    price: "24.00",
    rating: 4.5,
    image: saladImage,
  },
  {
    id: 2,
    name: "Vegetable salad",
    description: "Description of the item",
    price: "26.00",
    rating: 4.6,
    image: vegiImage,
  },
  {
    id: 3,
    name: "Egg vegi salad",
    description: "Description of the item",
    price: "23.00",
    rating: 4.5,
    image: eggImage,
  },
 
];

const SpecialDishes = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          color: "#FF6347",
          fontSize: "18px",
          textTransform: "uppercase",
        }}
      >
        Special Dishes
      </h2>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Standout Dishes
      </h1>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>From Our Menu</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              border: "1px solid #f0f0f0",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              width: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{
                width: "70%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "60%",
                margin: "10px auto",
                display: "block",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
                {dish.name}
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {dish.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  ${dish.price}
                </span>
                <span style={{ fontSize: "14px", color: "#888" }}>
                  ⭐ {dish.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;
