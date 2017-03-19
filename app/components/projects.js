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
                    startDelay={1000}
                    avgTypingDelay={150}
                    stdTypingDelay={0.4}
                    delayGenerator={this.delayGen}
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                    Projects 
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
                            <li>Research at UCSD San Diego Supercomputer Center </li>
                            <li>Analyzed visitor, user, and download data from the 
                                Tropical Ecology and Assessment Monitoring (TEAM) portal.</li>
                            <li>Used PostgreSQL to extract database information, the 
                                results were graphed and mapped in order to find 
                                relationships. </li>
                            <li>Assisted in a camera trap study by 
                                Hewlett Packard (HP) to programmatically recognize animal
                                species from photos.</li> 
                        </ul>
                        <br/>
                        <a href="https://github.com/allenmcao/SDSC_Advanced_Cyberinfrastructure" target="_blank">
                            Check Me Out
                        </a>
                    </div>

                    <div className="epitopes">
                        <h1>Immune Epitope and Protein Disorder Project</h1>
                        <h2>UCSD San Diego Supercomputer Center</h2>
                        <ul>
                            <li>Bioinformatics project trying to find the relationship 
                                between epitopes and protein disorder.</li>
                            <li>Participated in a research project led by Dr. Julia Ponomarenko</li>
                            <li>Researched and worked in a team environment on bioinformatics 
                                using Unix, BLAST, Python, SQL, MySQL Workbench, command line, 
                                and Eclipse to transform data from the Immune Epitope Database (IEDB).</li>
                            <li>Performed statistical analysis to compare similarities of epitope to 
                                proteome genome sequences. </li>
                        </ul>
                        <br/>
                        <a href="https://github.com/allenmcao/SDSC_Epitopes" target="_blank">
                            Check Me Out
                        </a>
                    </div>

                    <div className="synwrites">
                        <h1>SynWrite - NotePadExtended</h1>
                        <h2>WIP</h2>
                        <ul>
                            <li>Java-based text editor</li>
                            <li>Customizable text color, size, and </li>
                            <li>Suggests autofill based on synonyms/hyponyms instead of auto-suggestion.</li>
                        </ul>
                        <br/>
                        <a href="https://github.com/allenmcao/NotepadExtended" target="_blank">
                            Check Me Out
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}