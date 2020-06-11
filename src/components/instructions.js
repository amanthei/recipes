import React from "react";
import Divider from "./divider";

const Instructions = ({ instruction }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    <Divider />
    {instruction.map(function (item) {
      return <p key={item}>{item}</p>;
    })}
  </div>
);

export default Instructions;
