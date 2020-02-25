import React, {Component} from 'react';
import './Projects.css';
class Projects extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>Projects</h1>
                <ul>
                    <li><a href='https://jiabon.xyz'>Jiabon</a> - A mobile-base app that user can buy homemade food</li>
                    <li><a href='https://github.com/dm27-meal-planner/meal-planner'>Meal Thyme</a> - A meal plans website that user can manage recipes, and generate grocery lists.</li>
                    <li><a href='https://github.com/JerrayChen/team-rocket-market'>Team Rocket Market</a> - A website for trading Pokemon</li>
                </ul>
            </div>
        )
    }
}
export default Projects;