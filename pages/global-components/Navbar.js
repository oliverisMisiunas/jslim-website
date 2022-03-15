import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

export default function Navbar() {

  return (
    <div className="navbar">
      <Link href='/'>
      <h1 id="navbar-logo">JSlim</h1>
      </Link>

      <div className="navbar-nav">
      <Link href='/'>
        <h2 id="nav-home">Home</h2>
      </Link>
      <Link href='/docs'>
        <h2 id="nav-docs">Docs</h2>
        </Link>
        <div className="div-roll-out">
          <h2 id="nav-os">
            Open-source{" "}
            <span>
              <BiChevronDown />
            </span>
          </h2>
          <div className="os-nav-active">
            <Link href='/opensource'>
              <h3>About</h3>
            </Link>
            <Link href='/howtoopensource'>
            <h3>Contribute</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
