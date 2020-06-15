import React from "react";
import { Link } from "gatsby";
import Switcher from "./switcher";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Note from "./note";
import Divider from "./divider";
import Layout from "./layout";
import SEO from "./seo";

const Recipe = ({ title, ingredientArray, instructionArray, note }) => (
  <Layout>
    <SEO title={title} />
    <div style={{ display: `flex`, justifyContent: `space-between` }}>
      <h3>{title}</h3>
      <Switcher />
    </div>

    {note.map(function (item) {
      if (item !== null) {
        return <Note note={item} />;
      } else {
        return;
      }
    })}
    <Ingredients ingredient={ingredientArray} />
    <Instructions instruction={instructionArray} note={note} />
    <Divider />
    <Link
      style={{
        padding: `0 0 100px 0`,
      }}
      to="/"
    >
      Back to recipes
    </Link>
  </Layout>
);

export default Recipe;
