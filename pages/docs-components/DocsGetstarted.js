import React from "react";

export default function DocsGetstarted(props) {
  return (
    <div className="docs-getstarted">
      <p
        onClick={() => {
          props.setCurrentDoc("howto");
          props.listChange();
        }}
      >
        How to get started
      </p>
    </div>
  );
}
