import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [navbarMob, setNavbarMob] = useState("");

  function mobileNavOpen() {
    if (navbarMob == "") {
      setNavbarMob("nav-open-mob-active");
    } else if (navbarMob == "nav-open-mob-active") {
      setNavbarMob("");
    }
  }

  return (
    <div className="navbar">
      <Link href="/">
        <h1 id="navbar-logo">JSlim</h1>
      </Link>

      <div className="navbar-nav">
        <Link href="/">
          <h2 id="nav-home">Home</h2>
        </Link>
        <Link href="/docs">
          <h2 id="nav-docs">Docs</h2>
        </Link>
        <Link href="/pageoffame">
          <h2 id="pof">Page of Fame</h2>
        </Link>
        <div className="div-roll-out">
          <h2 id="nav-os">
            Open-source{" "}
            <span>
              <BiChevronDown />
            </span>
          </h2>
          <div className="os-nav-active">
            <Link href="/opensource">
              <h3>About</h3>
            </Link>
            <Link href="/howtoopensource">
              <h3>Contribute</h3>
            </Link>
          </div>
        </div>
      </div>

      <p onClick={mobileNavOpen} id="nav-mob-fi">
        <FiMenu />
      </p>

      <div className={"nav-open-mob " + navbarMob}>
        <div className="h2s-nav-mob">
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/docs">
            <h2>Docs</h2>
          </Link>
          <Link href="/opensource">
            <h2>Open-source</h2>
          </Link>
          <Link href="/pageoffame">
          <h2>Page of Fame</h2>
        </Link>
          <Link href="/howtoopensource">
            <h2>How to contribute</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
