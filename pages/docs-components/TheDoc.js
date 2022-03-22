import React from "react";

export default function TheDoc(props) {
  return (
    <div className="the-doc" id={props.mobDocList}>
      <div className="the-doc-btn">
        <button onClick={props.listChange}>Menu</button>
      </div>
      <h1 className="class-title"></h1>
      <div className="class-description"></div>
      <div className="class-image"></div>
      <div className="smallinfo">
        <p className="class-version"></p>
        <p className="class-author"></p>
      </div>
    </div>
  );
}
