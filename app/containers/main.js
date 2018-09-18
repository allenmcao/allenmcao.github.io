import React from 'react';

import Navigation from './navigation'

import { styles } from './styles/main.scss'

// Routing
import Home from './home'
import AboutMe from './aboutme'
import Work from './work'
import Education from './education'
import Skills from './skills'
import Projects from './projects'
import References from './references'
import NotFound from './not_found'
import { Switch, Redirect, Route, Router} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
        <main>
            <Navigation />
            <div className='content'>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/aboutme' component={AboutMe}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/education' component={Education}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/references' component={References}/>
                    <Redirect from='/' to='/home' />
                </Switch>
            </div>
        </main>        
    );
  }
}