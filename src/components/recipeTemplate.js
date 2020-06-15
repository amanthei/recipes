import React from "react";
import Recipe from "./recipe";

export default function recipeTemplate({ pageContext: { recipe } }) {
  return (
    <section>
      <Recipe
        title={recipe.title}
        ingredientArray={recipe.ingredients}
        instructionArray={recipe.instructions}
        note={recipe.note}
      />
    </section>
  );
}
