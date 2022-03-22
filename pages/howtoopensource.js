import React from "react";
import Head from 'next/head'
import Link from "next/link";
import Navbar from "./global-components/Navbar";
import Bottom from "./global-components/Bottom";

export default function howtoopensource() {
  return (
    <>
      <Navbar />
      
      <Head>
        <title>How to contribute</title>
        <meta name="description" content="How to contribute to JSlim Open-source" />
        <link rel="icon" href="/favicon.png" />
      </Head> 

      <div className="howtoos">
        <h1>Congratulations on deciding to contribute to the Open-source!</h1>

        <p>
          First of all, you should be somewhat familiar with GitHub’s
          functionality before committing any changes. Don’t worry! It’s very
          easy to learn if you don’t already know how to contribute to
          Open-source projects. There are plenty of video tutorials (or written
          tutorials, if that’s your thing) on this subject. However, I would
          highly recommend <a href="https://www.youtube.com/watch?v=waEb2c9NDL8" target='_blank' rel="noreferrer">this tutorial</a> because it explains all
          the needed functionality very quickly and very clearly.
        </p>

        <p>
          Now, once that’s clear, there are, basically, two ways to contribute
          to JSlim.
        </p>

        <p>
          The first way is to think of what JavaScript code could be shortened
          by just writing an HTML class. I would recommend taking a look at{" "}
          <Link href='/docs'>JSlim classes</Link> first, just to get a better understanding
          of what are and how they work, and if your idea isn’t already
          implemented. It might also help you to get into the right head-space
          to think of new ideas. After that, you should take a look at the <a href="https://github.com/oliverisMisiunas/jslim-library/blob/master/index.js" target='_blank' rel="noreferrer">source code</a> to familiarize yourself with the JSlim
          conventions. Don’t worry, the source code is fairly short and should
          be easy to read and understand. Now, once your idea is transformed
          into JavaScript code, you can follow these steps to submit it:
        </p>

        <ol>
          <li>
            Fork <a target='_blank' href="https://github.com/oliverisMisiunas/jslim-library" rel="noreferrer">Jslim GitHub repo</a>.
          </li>
          <li>Go to the index.js file and write your class at the bottom.</li>
          <li>Make a Pull Request.</li>
        </ol>

        <p>
          It would be awesome if you could also write a short documentation for
          your class. This way your class will be added to JSlim much faster!
          The documentation can be a short text file or a Pull Request comment,
          no need to do any text formation. If you chose to write a text file,
          you can commit it to <a target='_blank' href="https://github.com/oliverisMisiunas/jslim-documentation" rel="noreferrer">this repository</a> by making a Pull
          Request. If English isn’t your first language, don’t worry, all
          grammatical errors will be corrected before publishing. Whether you
          choose to write the documentation or not, your name and a link to your
          GitHub, LinkedIn, or another social profile will be mentioned in the
          documentation!
        </p>

        <p>
          Another great way to contribute is to <a target='_blank' href="https://github.com/oliverisMisiunas/jslim-library/issues" rel="noreferrer">create issues</a>.
          Address any bug or incompatibility you notice. You can also create
          issues to request a feature. If you have noticed a bug on this
          website, you can go to <a target='_blank' href="https://github.com/oliverisMisiunas/jslim-website" rel="noreferrer">its repository</a> and create an
          issue there. They are very highly appreciated.
        </p>

        <p>
          Remember, your future employers look very highly at job candidates who
          have contributed to an Open-source project. I hope you will find
          inspiration and personal benefits while contributing. I wish you a
          beautiful day and happy coding!
        </p>

        <p id="stuck">
          <span id="stuck-span">Stuck?</span> can’t think of an idea? Look
          around other websites. Find a function or a responsive component that
          could be implemented by writing an HTML class.
        </p>
      </div>

      <Bottom />
    </>
  );
}
