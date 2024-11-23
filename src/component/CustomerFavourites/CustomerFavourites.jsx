import React from "react";
import "./CustomerFavourites.css";
import mainDish from "../../assets/buger.jpg";
import breakfast from "../../assets/breakfast.jpg";
import dessert from "../../assets/dessert.jpg";
import browseAll from "../../assets/browseall.jpg";

const CustomerFavourites = () => {
  const categories = [
    {
      title: "Main Dish",
      count: "86 dishes",
      image: mainDish,
    },
    {
      title: "Break Fast",
      count: "12 break fast",
      image: breakfast,
    },
    {
      title: "Dessert",
      count: "48 dessert",
      image: dessert,
    },
    {
      title: "Browse All",
      count: "255 items",
      image: browseAll,
    },
  ];

  return (
    <section className="categories">
      <h2 className="categories__header">Customer Favorites</h2>
      <h3 className="categories__title">Popular Categories</h3>
      <div className="categories__list">
        {categories.map((category, index) => (
          <div key={index} className="category__card">
            <img
              src={category.image}
              alt={category.title}
              className="category__image"
            />
            <h4 className="category__name">{category.title}</h4>
            <p className="category__count">{category.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFavourites;
