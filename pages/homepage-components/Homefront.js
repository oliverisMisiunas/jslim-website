import React from 'react'
import { FiCopy } from 'react-icons/fi';

export default function Homefront() {
  return (
    <div className='homefront'>
        <h1>Make your project <span id='front-slimmer'>slimmer</span></h1>
        <h1>Write less <span id='front-js'>JavaScript</span></h1>

        <div className="front-npm">
            <p>npm i jslim-library <span><FiCopy /></span></p>
        </div>
    </div>
  )
}
