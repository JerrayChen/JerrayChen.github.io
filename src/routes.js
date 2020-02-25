import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects';


export default (
    <Switch>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/skills' component={Skills}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/' exact component={Home}></Route>
    </Switch>
)