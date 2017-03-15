import React from 'react';

import Typist from 'react-typist';

import { styles } from './styles/projects.scss'


export default class Projects extends React.Component {
    delayGen(mean, std, { line, lineIdx, charIdx, defDelayGenerator }) {
        if (lineIdx === 0 && charIdx === line.length - 1) {
          return 700;
        }
        // if (lineIdx === 1 && charIdx === line.length - 1) {
        //   return 1250;
        // }
        return defDelayGenerator(mean + 25);
    }


    render () {
        return (
            <div className="projects">
                <p className="startPound"> $ </p>
                <Typist className="startTypist"
                    startDelay={2000}
                    avgTypingDelay={150}
                    stdTypingDelay={0.4}
                    delayGenerator={this.delayGen}
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 400 }}
                    >
                    projects 
                    <br/>
                    {""}                 
                </Typist>
                <p className="endPound"> $ </p>
                <Typist className="endTypist">
                </Typist>

                <div className="list">
                    <div className="acid">
                        <h1>Advanced Cyberinfrastructure Development(ACID)</h1>
                        <h2>UCSD San Diego Supercomputer Center</h2>
                        <ul>
                            <li> Research at UCSD San Diego Supercomputer Center </li>
                        </ul>
                    </div>

                    <div className="epitopes">
                        <h1>Immune Epitope and Protein Disorder Project</h1>
                        <h2>UCSD San Diego Supercomputer Center</h2>
                        <ul>
                            <li>Bioinformatics project trying to find the relationship 
                                between epitopes and protein disorder.</li>
                        </ul>
                    </div>

                    <div className="synwrites">
                        <h1>SynWrite - NotePadExtended</h1>
                        <h2>Self</h2>
                        <ul>
                            <li>Java-based text editor that suggests autofill based on synonyms/hyponyms and not autosuggestion.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}