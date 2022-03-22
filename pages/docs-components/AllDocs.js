import React from "react";
import DocsSearch from "./DocsSearch";
import DocsGetstarted from "./DocsGetstarted";
import DocsClasslist from "./DocsClasslist";

export default function AllDocs(props) {
  return (
    <div className="all-docs" id={props.mobDoc}>
      <DocsSearch />
      <DocsGetstarted
        setCurrentDoc={props.setCurrentDoc}
        listChange={props.listChange}
      />
      <DocsClasslist
        setCurrentDoc={props.setCurrentDoc}
        listChange={props.listChange}
      />
    </div>
  );
}
