import React, { useEffect, useState } from "react";
import { docsData } from "../docsData";
import { howDocs } from "../docsHowData";
import Navbar from "./global-components/Navbar";
import Bottom from "./global-components/Bottom";

export default function docs() {
  //Search bar
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

  //Display of list of classes
  const [currentDoc, setCurrentDoc] = useState("howto");

  useEffect(() => {
    let tempP = document.getElementsByClassName("temp-p");
    if (tempP.length > 0) {
      while (tempP.length > 0) {
        tempP[0].remove();
      }
    }

    let classTitle = document.getElementsByClassName("class-title");
    let classDescription = document.getElementsByClassName("class-description");
    let classImage = document.getElementsByClassName("class-image");
    let classVersion = document.getElementsByClassName("class-version");
    let classAuthor = document.getElementsByClassName("class-author");

    if (currentDoc === "howto") {
      classVersion[0].textContent = "";
      classAuthor[0].textContent = "";
      classTitle[0].textContent = howDocs.title;
      for (let jj = 0; jj < howDocs.text.length; jj++) {
        let desc1 = document.createElement("p");
        desc1.innerHTML = howDocs.text[jj];
        desc1.classList.add("temp-p");
        classDescription[0].appendChild(desc1);
      }
      for (let gj = 0; gj < howDocs.photos.length; gj++) {
        let phot = document.createElement("img");
        phot.src = howDocs.photos[gj];
        phot.classList.add("temp-p");
        phot.setAttribute("id", "doc-phot");
        classImage[0].appendChild(phot);
      }
    }

    for (let i = 1; i < docsData.length + 1; i++) {
      if (currentDoc === i) {
        classTitle[0].textContent = docsData[i - 1].title;
        for (let j = 0; j < docsData[i - 1].text.length; j++) {
          let desc = document.createElement("p");
          desc.innerHTML = docsData[i - 1].text[j];
          desc.classList.add("temp-p");
          classDescription[0].appendChild(desc);
        }
        for (let yy = 0; yy < docsData[i - 1].photos.length; yy++) {
          let phot = document.createElement("img");
          phot.src = docsData[i - 1].photos[yy];
          phot.classList.add("temp-p");
          phot.setAttribute("id", "doc-phot");
          classImage[0].appendChild(phot);
        }
        classVersion[0].textContent =
          "Available on Jslim " + docsData[i - 1].version + " and up";
        classAuthor[0].textContent =
          "Class written by " + docsData[i - 1].author;
      }
    }
  }, [currentDoc]);



  return (
    <>
      <Navbar />

      <div className="docs-container">
        <div className="mob-btns-docs">
          <h3>Menu</h3>
          <h3>Search</h3>
        </div>

        <div className="doccss">
          <div className="all-docs">
            <div className="docs-search">
              <input
                placeholder="Search"
                id="doc-sear"
                type="text"
                onChange={searchTrig}
              />
            </div>

            <div className="docs-getstarted">
              <p onClick={() => setCurrentDoc("howto")}>How to get started</p>
            </div>

            <div className="docs-classlist">
              {docsData.map((e) => {
                return (
                  <div className="classlist-p" key={"uniqueID" + e.id}>
                    <p
                      onClick={() => setCurrentDoc(e.id)}
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
          </div>

          <div className="the-doc">
            <h1 className="class-title"></h1>
            <div className="class-description"></div>
            <div className="class-image"></div>
            <div className="smallinfo">
              <p className="class-version"></p>
              <p className="class-author"></p>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </>
  );
}
