import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';

export default function Bottom() {
  return (
    <div className='bottom'>
        <p>Oliveris Misiūnas</p>
        <a id='middle-p-bot' href='https://github.com/oliverisMisiunas' target='_blank' rel="noopener"><GrGithub /></a>
        <a href='https://www.linkedin.com/in/oliveris-misiunas/' target='_blank' rel="noopener"><BsLinkedin /></a>
    </div>
  )
}
