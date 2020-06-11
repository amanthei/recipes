import React from "react";
import Recipe from "../../components/recipe";

const StirFryChicken = () => (
  <Recipe
    title="Stir Fry Chicken"
    ingredientArray={[
      ["1 lb.", "Chicken, skinned, boned & cut into strips or cubes"],
      ["4 T.", "Soy sauce"],
      ["1/4 tsp.", "Ground ginger"],
      ["1/3 c.", "Water"],
      ["1 tsp.", "Sugar"],
      ["3 T.", "Salad oil"],
      ["3/4 lb.", "Carrots, thinly sliced or diagonal"],
      ["1 med.", "Onion, thinly sliced"],
      ["3/4 lb.", "Zucchini, thinly sliced"],
      [null, "Hot cooked rice"],
    ]}
    instructionArray={[
      "In med. bowl combine chicken, 2 T. soy sauce, 2 tsp. cornstarch and ginger; toss until well mixed.",
      "In small bowl mix remaining soy sauce, water, sugar & remaining cornstarch. Set aside.",
      "Heat 2 T. salad oil in wok. Add chicken & stir fry over high heat about 4 m. Remove. Add remaining oil & add carrots, onions & stir fry 3 mins; then zucchini (I sometimes add celery & always nuts - cashews are the best, I think) & stir fry 2 more mins. Return chicken & the soy mixture & cook until thickened.",
    ]}
  />
);

export default StirFryChicken;
