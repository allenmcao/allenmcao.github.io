import React from 'react';

// import { styles } from './styles/projects.scss'

export default class Projects extends React.Component {
  render () {
        return (
        <div className="projects">
        	<div className="acid">
	            <h1>Advanced Cyberinfrastructure (ACID)</h1>
                <h2>San Diego Supercomputer Center (SDSC)</h2>
	            <ul>
					<li> Research at UCSD San Diego Supercomputer Center </li>
                </ul>
        	</div>

            <br/>
            <br/>

        	<div className="epitopes">
        		<h1>Immune Epitope and Protein Disorder Project - (UCSD San Diego Supercomputer Center). </h1>
        		<h2>San Diego Supercomputer Center (SDSC)</h2>
                <ul>
					<li>Bioinformatics project trying to find the relationship between epitopes and protein disorder.</li>
				</ul>
        	</div>

            <div className="epitopes">
                <h1>SynWrite(NotePadExtended)</h1>
                <h2>Self</h2>
                <ul>
                    <li>Java-based text editor that suggests autofill based on synonyms/hyponyms and not autosuggestion.</li>
                </ul>
            </div>
        </div>
        )

  }
}