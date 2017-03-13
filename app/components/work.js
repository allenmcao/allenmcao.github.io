import React from 'react';

import { styles } from './styles/work.scss'

export default class Work extends React.Component {
  render () {
        return (
        <div className="work">
        	<div className="telelytics">
	            <h1>Telelytics</h1>
	            <h2>Software Engineering Intern</h2>
	            <ul>
					<li>Helped build the Telelytics telemedicine service.</li>
					<li>Worked on the front-end/full-stack team developing the patient-doctor interface using React.js and Redux (with a material-design emphasis) to implement account logins, confidentiality, and video appointments (Twilio), etc.</li>
					<li>Also assisted with basic backend using Express, and Passport, and a small Redis server to store patient data.</li>
        		</ul>
        	</div>

        	<br/>
        	<br/>

        	<div className="bids">
        		<h1>UC Berkeley Undergraduate Research Apprenticeship Program (URAP)</h1>
        		<h2>Text Thresher Research Project</h2>
        		<ul>
					<li>Worked with full-stack with an emphasis on the front-end side with React, Redux, Sass, Webpack, and ES6. Contributed to the specialized highlighting interface that allows users to change, combine, and intermingle selections when curating crowd-sourced data.</li>
					<li>Also assisted with the backend using Django, Docker, and Python. Created docker containers to programmatically setup work environment/databases, and set/retrieve tasks from CrowdCrafting.org (crowd-sourcing service).</li>
					<li>3 years in development and currently seeking NHS grant funding. Adopted Agile development (Scrum) as of 5 months.</li>
				</ul>
        	</div>
        </div>
        )

  }
}