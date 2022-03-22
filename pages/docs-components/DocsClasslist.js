import React from "react";
import { docsData } from "../../docsData";

export default function DocsClasslist(props) {
  return (
    <div className="docs-classlist">
      {docsData.map((e) => {
        return (
          <div className="classlist-p" key={"uniqueID" + e.id}>
            <p
              onClick={() => {
                props.setCurrentDoc(e.id);
                props.listChange();
              }}
              key={e.id}
              id="doc-select"
              className="classlist-card"
            >
              {e.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
