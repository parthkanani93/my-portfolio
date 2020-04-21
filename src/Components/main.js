import React from 'react';
import Landing from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main(props) {
    return (

        <Switch>
            <Route path='/landing' component={Landing} />
            <Route path='/aboutme' component={Aboutme} />
            <Route path='/contact' component={Contact} />
            <Route path='/project' component={Project} />
            <Route path='/resume' component={Resume} />
            <Redirect to="/landing" />
        </Switch>

    );




}

export default Main;