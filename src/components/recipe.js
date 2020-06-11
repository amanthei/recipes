import React from "react";
import { Link } from "gatsby"
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Recipe = ({title, ingredientArray, instructionArray}) => (
  <Layout>
    <SEO title={title} />
    <h3>{title}</h3>
    <Ingredients ingredient={ingredientArray} />
    <Instructions instruction={instructionArray} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Recipe;
