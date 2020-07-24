import React from "react";
import Recipe from "./recipe";

export default function recipeTemplate({ pageContext: { recipe } }) {
  return (
    <section>
      <Recipe
        title={recipe.title}
        category={recipe.category}
        note={recipe.note}
        ingredientArray={recipe.ingredients}
        instructionArray={recipe.instructions}
      />
    </section>
  );
}
