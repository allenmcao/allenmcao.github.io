import React from 'react';

import { styles } from './styles/skills.scss'

export default class Skills extends React.Component {
  render () {
        return (
            <div className="skills">
                <h2>Skills</h2>
                <div>Languages:</div>
                <div>Proficient  -  Java • Python • JavaScript • HTML/CSS • SQL</div>
                <div>Familiar    -  C/C++ • Ruby • Gosu</div>
                <div>Technologies:</div>
                <div>Front End  -  Node,  React/Redux, Sass, jQuery, Bootstrap, D3,  Angular</div>
                <div>Back End  -  Spring, PostgreSQL, MySQL, JPA, Django, Redis</div>
            </div>
        )
  }
}