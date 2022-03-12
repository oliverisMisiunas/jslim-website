import React from "react";
import Link from "next/link";
import Navbar from "./global-components/Navbar";
import Bottom from "./global-components/Bottom";

export default function opensource() {
  return (
    <>
            <Navbar />
      <div className="os-how">

        <h1>
          JSlim is completely <span id="yellow-color">free</span> and{" "}
          <span id="teal-color">Open-source</span>
        </h1>
        <p>
          But it’s not only a JavaScript library. JSlim is a network for
          developers, it is your opportunity to{" "}
          <span id="teal-color">improve your resume</span> by contributing to a
          real and working project. <br />
          The contributions will be visible on your GitHub profile and your name
          will be mentioned in the JSlim documentation.
        </p>
        <p>
          Here you’re allowed{" "}
          <span id="teal-color">complete creative freedom</span>, as you will be
          writing your own JSlim classes! <br />
          Just think of any process that can be shortened by writing it in HTML.
        </p>
        <p id="bottom-text">
          Already have an idea? Do you believe it will help write less
          JavaScript?
        </p>

        <Link href="/opensource">
          <button>How to contribute</button>
        </Link>
      </div>

      <Bottom />
    </>
  );
}
