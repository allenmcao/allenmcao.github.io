import React from 'react';

import { styles } from './styles/aboutme.scss'

export default class AboutMe extends React.Component {
  render () {
    return (    
        <div>
            <h2 className='about'>About Me</h2>
            <p className="aboutP">Hi! I am a fourth-year Computer Science major at UC Berkeley. 
                <br/><br/>My hobbies right now include CS projects, homeworks, and various other non-extracurricular activies!</p>
            <div className='lineOne'/>
            <div className='lineOneUnder'/>

            <h2 className='contact'>Contact</h2>
            <h3>Phone</h3>
            <p className="contactP">1(858)-717-0211</p>
            <h3>Email</h3>
            <p className="contactP">allen.m.cao@gmail.com</p>
            <div className='lineTwo'/>
        </div>
        )

  }
}