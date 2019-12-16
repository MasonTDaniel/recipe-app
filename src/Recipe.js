import React from "react";
import "./recipe-module.css";

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>Calories: {round(calories, 0)}</p>
      <div className="ingredients">Ingredients</div>
      <ul className="ingredient">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <img className="image" src={image} alt="" />
      <a className="recipe-link" href={url}>
        Recipe
      </a>
    </div>
  );
};

export default Recipe;
