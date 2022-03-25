import React from 'react'
import Navbar from './global-components/Navbar'
import Bottom from './global-components/Bottom'

export default function pageoffame() {
  return (
    <div className='hof'>
        <Navbar />

        <div className="people">
            <a target='_blank' rel="noreferrer" href="https://github.com/blesuer0729">Brennan LeSuer</a>
            <a target='_blank' rel="noreferrer" href="https://github.com/tomasvn">tomasvn</a>
            <a target='_blank' rel="noreferrer" href="https://github.com/eknoorpreet">Eknoorpreet Singh</a>
        </div>

        <Bottom />
    </div>
  )
}
