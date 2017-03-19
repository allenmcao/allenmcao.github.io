import React from 'react';

import { styles } from './styles/skills.scss'

export default class Skills extends React.Component {
  render () {
        return (
            <div className="skills">
                <h2>Skills</h2>
                <div>Languages:</div>
                <div>5+ Years  -  Java • Python • Javascript • HTML5 • CSS3</div>
                <div>3+ Years  -  SQL (PostgresSQL/MYSQL) • C/C++</div>
                <div>Software:</div>
                <div>IDEs        -  MySQL • Eclipse • IntelliJ • Microsoft Office (Excel, PowerPoint, Word)</div>
                <div>OSes       -  Windows • Mac • Linux (Ubuntu/Linux Mint) • Docker • VirtualBox • Cloud9</div>

            </div>
        )
  }
}