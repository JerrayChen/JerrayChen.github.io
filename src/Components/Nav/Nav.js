import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
class Nav extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Nav;