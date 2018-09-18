import React from 'react';

import Typist from 'react-typist'

import { styles } from './styles/work.scss'

export default class Work extends React.Component {
  render () {
        return (
        <div className="work">
            <div className="header"><b>WORK</b></div>

            <div className="guidewire">
                <h1>Guidewire Software</h1>
                <h2>Software Engineering Intern</h2>
                <p>Developed, tested, and deployed Transwarp, a performance data collection and 
                visualization project that provides an easily viewable interface to check, compare, 
                and analyze performance trends for core product software. Can compare performance metrics across 
                commits, branches, applications, authors, and more. Created with Spring backend 
                (Java, Hibernate JPA, and PostgreSQL database with Angular frontend management) and React/Redux
                 front-end along with D3 data visualization</p>
            </div>

            <br/>
            <br/>


            <div className="bids">
                <h1>UC Berkeley Undergraduate Research Apprenticeship Program (URAP)</h1>
                <h2>Text Thresher Research Project</h2>
                <p>Contributed to web application that expedites article processing to actual data using crowdsourced 
                contributions. Uses unique highlighting scheme to efficiently guide users into answering researcher-generated 
                questions. Worked with full-stack with an emphasis on the front-end side with React, Redux, Sass, Webpack, and 
                ES6. Testing using Facebook’s Jest unit-testing framework combined with Enzyme. Programmatically sets up Pybossa 
                server to set/retrieve tasks from CrowdCrafting.org (crowd-sourcing service).

                More information here: 
                https://bids.berkeley.edu/news/introducing-textthresher-10-beta</p>
            </div>

            <br/>
            <br/>

            <div className="telelytics">
                <h1>Telelytics</h1>
                <h2>Software Engineering Intern</h2>
                <p>Helped build the Telelytics telemedicine service. Worked on the front-end/full-stack team 
                developing the patient-doctor interface using React.js and Redux (with a material-design emphasis) 
                to implement account logins, confidentiality, and video appointments (Twilio), etc. Also assisted 
                with basic backend using Express, and Passport, and a small Redis server to store patient data.</p>
            </div>
        </div>
        )

  }
}