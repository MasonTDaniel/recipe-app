import React from "react";
import "./recipe-module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <div className="ingredients">
        Ingredients
        <ol className="ingredient-list">
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>

      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
