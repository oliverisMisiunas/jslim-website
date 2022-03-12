import React from 'react'
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1 id='navbar-logo'>JSlim</h1>

        <div className="navbar-nav">
            <h2 id='nav-home'>Home</h2>
            <h2 id='nav-docs'>Docs</h2>
            <h2 id='nav-os'>Open-source <span><BiChevronDown /></span></h2>
        </div>
    </div>
  )
}
