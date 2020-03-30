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
                    <img src="/ProjectsPics/Jiabon1.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon2.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon3.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon4.png" alt="image" />
                    <li><a href='https://mealthyme.xyz'>Meal Thyme</a> - A meal plans website that user can manage recipes, and generate grocery lists.</li>
                    <img src="/ProjectsPics/MT1.png" alt="image" />
                    <img src="/ProjectsPics/MT2.png" alt="image" />
                    <img src="/ProjectsPics/MT3.png" alt="image" />
                    <img src="/ProjectsPics/MT4.png" alt="image" />
                    <li><a href='https://github.com/JerrayChen/team-rocket-market'>Team Rocket Market</a> - A website for trading Pokemon</li>
                    <img src="/ProjectsPics/TRM1.png" alt="image" />
                    <img src="/ProjectsPics/TRM2.png" alt="image" />
                    <img src="/ProjectsPics/TRM3.png" alt="image" />
                    <img src="/ProjectsPics/TRM4.png" alt="image" />
                </ul>
            </div>
        )
    }
}
export default Projects;