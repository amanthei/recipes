import React from "react";

const Tag = ({ text }) => (
  <div
    style={{
      padding: `4px 6px`,
      lineHeight: `12px`,
      fontSize: `14px`,
      backgroundColor: `#e3eaf6`,
      display: `inline-block`,
      float: `left`,
      borderRadius: `2px`,
      margin: `2px 7px 2px 0px`,
      border: `1px solid #a9b6d2`,
    }}
  >
    {text}
  </div>
);

export default Tag;
