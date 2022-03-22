import React, { useEffect, useState } from "react";
import Head from "next/head";
import { docsData } from "../docsData";
import { howDocs } from "../docsHowData";
import Navbar from "./global-components/Navbar";
import Bottom from "./global-components/Bottom";
import AllDocs from "./docs-components/AllDocs";
import TheDoc from "./docs-components/TheDoc";

export default function docs() {
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

  // Mobile menu
  const [mobDoc, setMobDoc] = useState("docs-inactive");
  const [mobDocList, setMobDocList] = useState("");

  function listChange() {
    if (mobDocList === "") {
      setMobDocList("docs-inactive");
      setMobDoc("");
    } else {
      setMobDoc("docs-inactive");
      setMobDocList("");
    }
  }

  return (
    <>
      <Head>
        <title>JSlim documentation</title>
        <meta name="description" content="JSlim classes documentation" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <div className="docs-container">
        <AllDocs
          mobDoc={mobDoc}
          setCurrentDoc={setCurrentDoc}
          listChange={listChange}
        />
        <TheDoc mobDocList={mobDocList} listChange={listChange} />
      </div>

      <div className="bottom-mob">
        <Bottom />
      </div>
    </>
  );
}
