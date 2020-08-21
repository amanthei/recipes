import React from "react";
import Tag from "./tag";

const Ingredients = ({ ingredient }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    <ul style={{ margin: 0, listStyleType: `none` }}>
      {ingredient.map(function (item) {
        if (item !== null) {
          if (item[0] !== null) {
            return (
              <li key={item}>
                <Tag text={item[0]} />
                {item[1]}
              </li>
            );
          } else {
            if (item[1] !== null) {
              return <li key={item}>{item[1]}</li>;
            } else {
              return <br key={item[1]} />;
            }
          }
        } else {
          return null;
        }
      })}
    </ul>
  </div>
);

export default Ingredients;
