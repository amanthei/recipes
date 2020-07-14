import React, { useState } from "react";
import { Link } from "gatsby";
import Switcher from "./switcher";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Note from "./note";
import Divider from "./divider";
import Layout from "./layout";
import SEO from "./seo";

function text(ingredientArray, instructionArray, note) {
  return (
    <>
      {note.map(function (item) {
        if (item !== null) {
          return <Note key={item} note={item} />;
        } else {
          return null;
        }
      })}
      <Ingredients ingredient={ingredientArray} />
      <Instructions instruction={instructionArray} note={note} />
      <Divider />
    </>
  );
}

const Recipe = ({ title, ingredientArray, instructionArray, note }) => {
  function onSwitch() {
    let text = document.getElementsByClassName("text")[0];
    let handwriting = document.getElementsByClassName("handwriting")[0];
    let textIcon = document.getElementsByClassName("textIcon")[0];
    let handwritingIcon = document.getElementsByClassName("handwritingIcon")[0];

    if (text) {
      setMode("handwriting");
      text.className = "handwriting";
      textIcon.style.setProperty(`display`, ``);
      handwritingIcon.style.setProperty(`display`, `none`);
    } else {
      setMode("text");
      handwriting.className = "text";
      handwritingIcon.style.setProperty(`display`, ``);
      textIcon.style.setProperty(`display`, `none`);
    }
  }
  const [mode, setMode] = useState("text");
  let path = "/" + title.toLowerCase().split(" ").join("-") + ".svg";
  return (
    <Layout>
      <SEO title={title} />
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <h3>{title}</h3>
        <Switcher onClick={onSwitch} />
      </div>
      {mode === "text" ? (
        text(ingredientArray, instructionArray, note)
      ) : (
        <img src={path} alt={title} draggable="false"></img>
      )}
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
};

export default Recipe;
