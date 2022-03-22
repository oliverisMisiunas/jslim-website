import React from "react";
import { docsData } from "../../docsData";

export default function DocsSearch() {
  const docsTitles = [];
  const docsClasses = [];

  for (let i = 0; i < docsData.length; i++) {
    docsTitles.push(docsData[i].title.toLowerCase());
    docsClasses.push(docsData[i].classes);
  }

  function searchTrig(e) {
    let inputValue = e.target.value.toLowerCase();

    let cards = document.getElementsByClassName("classlist-card");

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.add("docs-list-hidden");

      if (inputValue == "") {
        cards[i].classList.remove("docs-list-hidden");
      }
    }

    for (let i = 0; i < docsTitles.length; i++) {
      if (docsTitles[i].includes(inputValue)) {
        cards[i].classList.remove("docs-list-hidden");
      }

      for (let j = 0; j < docsClasses[i].length; j++) {
        if (docsClasses[i][j].includes(inputValue)) {
          cards[i].classList.remove("docs-list-hidden");
        }
      }
    }
  }

  return (
    <div className="docs-search">
      <input
        placeholder="Search"
        id="doc-sear"
        type="text"
        onChange={searchTrig}
      />
    </div>
  );
}
