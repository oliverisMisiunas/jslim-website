import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';

export default function Bottom() {
  return (
    <div className='bottom'>
        <p>Oliveris Misiūnas</p>
        <p id='middle-p-bot'><GrGithub /></p>
        <p><BsLinkedin /></p>
    </div>
  )
}
