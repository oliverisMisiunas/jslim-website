import React from "react";
import Link from "next/link";

export default function Contributefront() {
  return (
    <div className="contributefront">
      <h1>Contribute to Open-source</h1>
      <p>
        JSlim can not only be a tool to simplify the code for your projects but
        also a great opportunity to contribute to Open-source. It is especially{" "}
        <span>easy to contribute for beginner</span> to intermediate developers,
        since there aren't any limits to how simple or complex your code has to
        be.
      </p>
      <Link href="/opensource">
        <button>I'm interested!</button>
      </Link>
    </div>
  );
}
