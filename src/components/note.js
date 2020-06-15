import React from "react";

const Note = ({ note }) => (
  <div
    style={{
      padding: `4px 0 12px 0`,
      display: `flex`,
    }}
  >
    <div
      style={{
        fontSize: `40px`,
        fontWeight: `bold`,
        color: `#a9b6d2`,
      }}
    >
      “
    </div>
    <blockquote
      style={{
        padding: `0 6px`,
        margin: `0 0 20px`,
        position: `relative`,
        lineHeight: `1.2`,
      }}
    >
      {note}
    </blockquote>
  </div>
);

export default Note;
