import React, { Component } from 'react';
import './Projects.css';
class Projects extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='project-wrapper'>
                <p>
                    <section className='project-header'>

                        <h2 className='project-title'>Jiabon</h2>
                        <a href='https://github.com/JerrayChen/jiabon' target="_blank">
                            <i class="fab fa-github-square icon"></i>
                        </a>
                        <a href='https://jiabon.xyz' target="_blank">
                            <i class="far fa-window-restore icon"></i>
                        </a>
                    </section>
                    <section>
                        A mobile-base app that user can buy homemade food
                    </section>
                </p>

                <img src="/ProjectsPics/Jiabon1.png" alt="image" />
                <img src="/ProjectsPics/Jiabon2.png" alt="image" />
                <img src="/ProjectsPics/Jiabon3.png" alt="image" />
                <img src="/ProjectsPics/Jiabon4.png" alt="image" />
                <p>
                    <section className='project-header'>

                        <h2>Meal Thyme</h2>
                        <a href='https://github.com/dm27-meal-planner/meal-planner' target="_blank">
                            <i class="fab fa-github-square icon"></i>
                        </a>
                        <a href='https://mealthyme.xyz' target="_blank">
                            <i class="far fa-window-restore icon"></i>
                        </a>
                    </section>
                    <section>
                        A meal plans website that user can manage recipes, and generate grocery lists.
                    </section>
                </p>
                <img src="/ProjectsPics/MT1.png" alt="image" />
                <img src="/ProjectsPics/MT2.png" alt="image" />
                <img src="/ProjectsPics/MT3.png" alt="image" />
                <img src="/ProjectsPics/MT4.png" alt="image" />
                <p>
                    <section className='project-header'>

                    <h2>Team Rocket Market</h2>
                    <a href='https://github.com/JerrayChen/team-rocket-market' target="_blank">
                        <i class="fab fa-github-square icon"></i>
                    </a>
                    </section>
                    <section>
                        A website for trading Pokemon
                    </section>
                </p>
                <img src="/ProjectsPics/TRM1.png" alt="image" />
                <img src="/ProjectsPics/TRM2.png" alt="image" />
                <img src="/ProjectsPics/TRM3.png" alt="image" />
                <img src="/ProjectsPics/TRM4.png" alt="image" />

            </div>
        )
    }
}
export default Projects;