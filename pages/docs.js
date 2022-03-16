import React, { useEffect, useState } from "react";
import { docsData } from "../docsData";
import { howDocs } from "../docsHowData";
import Navbar from "./global-components/Navbar";
import Bottom from "./global-components/Bottom";

export default function docs() {

  const [currentDoc, setCurrentDoc] = useState("howto");

  useEffect(() => {
    let tempP = document.getElementsByClassName('temp-p');
    if (tempP.length > 0) {
        while (tempP.length > 0) {
          tempP[0].remove()
        }
    }

    let classTitle = document.getElementsByClassName("class-title");
    let classDescription = document.getElementsByClassName("class-description");
    let classImage = document.getElementsByClassName('class-image')
    let classVersion = document.getElementsByClassName("class-version");
    let classAuthor = document.getElementsByClassName("class-author");

    for (let i = 1; i < docsData.length + 1; i++) {
      if (currentDoc === "howto") {
        classTitle[0].textContent = howDocs.title;
        // for (let jj = 0; jj < howDocs.text.length; j++) {

        // }
        // let desc1 = document.createElement('p')
        // desc1.innerHTML = howDocs.text
        // desc1.classList.add('temp-p')
        // classDescription[0].appendChild(desc1)
      } else if (currentDoc === i) {
        classTitle[0].textContent = docsData[i - 1].title
        for (let j = 0; j < docsData[i - 1].text.length; j++) {
            let desc = document.createElement('p')
            desc.innerHTML = docsData[i - 1].text[j]
            desc.classList.add('temp-p')
            classDescription[0].appendChild(desc)
        }
        for (let yy = 0; yy < docsData[i - 1].photos.length; yy++) {
          let phot = document.createElement('img')
          phot.src = docsData[i - 1].photos[yy]
          phot.classList.add('temp-p')
          phot.setAttribute('id', 'doc-phot')
          classImage[0].appendChild(phot)
        }
      }
    }
  }, [currentDoc]);

  return (
    <>
      <Navbar />

      <div className="docs-container">
        <div className="all-docs">
          <div className="docs-search">
            <input id="doc-sear" type="text" />
          </div>

          <div className="docs-getstarted">
            <p onClick={() => setCurrentDoc("howto")}>How to get started</p>
          </div>

          <div className="docs-classlist">
            {docsData.map((e) => {
              return (
                <div key={"uniqueID" + e.id}>
                  <p
                    onClick={() => setCurrentDoc(e.id)}
                    key={e.id}
                    id="doc-select"
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
          <p className="class-version"></p>
          <p className="class-author"></p>
        </div>
      </div>

      <Bottom />
    </>
  );
}
