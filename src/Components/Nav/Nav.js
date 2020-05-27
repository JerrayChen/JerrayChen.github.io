import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            currPage: 'home'
        };
    }

    handleClick = (e) => {
        console.log(e.target.id)
        this.setState({currPage: e.target.id})
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/' className={this.state.currPage==='home' ? 'selected' : null} 
                    id='home'
                    onClick={this.handleClick}>Home</Link></li>
                    <li><Link to='/about' className={this.state.currPage==='about' ? 'selected' : null} 
                    id='about'
                    onClick={this.handleClick}>About</Link></li>
                    <li><Link to='/skills' className={this.state.currPage==='skills' ? 'selected' : null} 
                    id='skills'
                    onClick={this.handleClick}>Skills</Link></li>
                    <li><Link to='/projects' className={this.state.currPage==='projects' ? 'selected' : null} 
                    id='projects'
                    onClick={this.handleClick}>Projects</Link></li>
                    <li><Link to='/contact' className={this.state.currPage==='contact' ? 'selected' : null}
                    id='contact'
                    onClick={this.handleClick}>Contact</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Nav;