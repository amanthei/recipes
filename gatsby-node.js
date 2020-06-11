const fs = require("fs");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const files = fs.readdirSync("./recipes");
  const data = [];
  files.forEach(function (file) {
    const content = fs.readFileSync(`./recipes/${file}`, { encoding: "utf-8" });
    const recipe = JSON.parse(content);
    const slug = file.replace(".json", "");
    recipe.slug = slug;
    data.push(recipe);
  });
  data.forEach((recipe) => {
    createPage({
      path: `/recipes/${recipe.slug}`,
      component: require.resolve(`./src/components/recipeTemplate.js`),
      context: { recipe },
    });
  });
};
