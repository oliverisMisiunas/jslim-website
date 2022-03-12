import React from "react";

export default function Aboutfront() {
  return (
    <div className="about-front">
      <h2>JSlim is a Front-End JavaScript library.</h2>
      <h3>
        It holds prewritten JavaScript code that is easily accessible by writing
        HTML classes.
      </h3>

      <div className="code-show">
        <div className="code-div">
          <p>
            <span id="codesymbols">&lt;</span>
            <span id="codediv">div </span>
            <span id="codeclass">class</span>
            <span id="codesymbols">="</span>
            <span id="codeclassname">jfcol</span>
            <span id="codesymbols">"</span>
            <span id="codesymbols">&gt;</span>
          </p>
          <div className="code-inside">
            <p>
              <span id="codesymbols"> &lt;</span>
              <span id="codediv">h1</span>
              <span id="codesymbols">&gt;</span>
              <span id="thecode">check</span>
              <span id="codesymbols">&lt;/</span>
              <span id="codediv">h1</span>
              <span id="codesymbols">&gt;</span>
            </p>
            <p>
              <span id="codesymbols"> &lt;</span>
              <span id="codediv">h2 </span>
              <span id="codeclass">class</span>
              <span id="codesymbols">="</span>
              <span id="codeclassname">jscrollpos 200 450 jblue</span>
              <span id="codesymbols">"&gt;</span>
              <span id="thecode">check</span>
              <span id="codesymbols">&lt;/</span>
              <span id="codediv">h2</span>
              <span id="codesymbols">&gt;</span>
            </p>
            <p>
              <span id="codesymbols"> &lt;</span>
              <span id="codediv">p</span>
              <span id="codesymbols">&gt;</span>
              <span id="thecode">sample text</span>
              <span id="codesymbols">&lt;/</span>
              <span id="codediv">p</span>
              <span id="codesymbols">&gt;</span>
            </p>
            <p>
              <span id="codesymbols"> &lt;</span>
              <span id="codediv">button </span>
              <span id="codeclass">class</span>
              <span id="codesymbols">="</span>
              <span id="codeclassname">jtoggle jblue</span>
              <span id="codesymbols">"&gt;</span>
              <span id="thecode">check</span>
              <span id="codesymbols">&lt;/</span>
              <span id="codediv">button</span>
              <span id="codesymbols">&gt;</span>
            </p>
          </div>
          <p>
            <span id="codesymbols">&lt;/</span>
            <span id="codediv">div</span>
            <span id="codesymbols">&gt;</span>
          </p>
        </div>
      </div>

      <h3>
        Much like Bootstrap, but instead of focusing on design, JSlim's main
        focus is on functionality.
      </h3>

      <div className="about-btns">
          <button id="how-btn">How to get started</button>
          <button id="class-btn">JSlim classes</button>
      </div>
    </div>
  );
}
