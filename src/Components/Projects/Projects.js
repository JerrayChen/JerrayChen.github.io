import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Projects.css';
class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 3
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

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
                    <section className='project-info'>
                        <p>
                            Personal Project
                        </p>
                        <p>
                            A mobile-base app that user can buy homemade food.
                            It shows nearby home cooks (sellers), their available meals, and available time slots on the map for interested buyers using Google Maps API.
                        </p>
                        <p>
                            Developing time: two weeks
                        </p>
                        <p className='award'>
                            Awarded Best Business Solution by instructors.
                        </p>
                        <p>
                            Technologies: ReactJS, NodeJS, Express, PostgreSQL, Google Maps API, and Stripe API. 
                        </p>
                    </section>
                </p>
                <Carousel responsive={responsive}>
                    <img src="/ProjectsPics/Jiabon1.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon2.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon3.png" alt="image" />
                    <img src="/ProjectsPics/Jiabon4.png" alt="image" />
                </Carousel>
                <p>
                    <section className='project-header'>

                        <h2 className='project-title'>Meal Thyme</h2>
                        <a href='https://github.com/dm27-meal-planner/meal-planner' target="_blank">
                            <i class="fab fa-github-square icon"></i>
                        </a>
                        <a href='https://mealthyme.xyz' target="_blank">
                            <i class="far fa-window-restore icon"></i>
                        </a>
                    </section>
                    <section className='project-info'>
                        <p>
                            Group Project
                        </p>
                        <p>
                            A meal planning website that user can manage recipes, weekly meal planning, reviewing nutritions, and grocery lists.
                        </p>
                        <p>
                            Developing time: two weeks
                        </p>
                        <p>
                            Technologies: ReactJS, NodeJS, Express, PostgreSQL, Sass, FullCalendarJS, and AntDesign. 
                        </p>
                    </section>
                </p>
                <Carousel responsive={responsive}>
                    <img src="/ProjectsPics/MT1.png" alt="image" />
                    <img src="/ProjectsPics/MT2.png" alt="image" />
                    <img src="/ProjectsPics/MT3.png" alt="image" />
                    <img src="/ProjectsPics/MT4.png" alt="image" />
                </Carousel>

                <p>
                    <section className='project-header'>

                        <h2 className='project-title'>Team Rocket Market</h2>
                        <a href='https://github.com/JerrayChen/team-rocket-market' target="_blank">
                            <i class="fab fa-github-square icon"></i>
                        </a>
                    </section>
                    <section className='project-info'>
                        <p>
                            Personal Project
                        </p>
                        <p>
                            A website for trading Pokemon
                        </p>
                        <p>
                            Developing time: four days
                        </p>
                        <p>
                            Technologies: ReactJS, NodeJS, Express. 
                        </p>
                    </section>
                </p>
                <Carousel responsive={responsive}>
                    <img src="/ProjectsPics/TRM1.png" alt="image" />
                    <img src="/ProjectsPics/TRM2.png" alt="image" />
                    <img src="/ProjectsPics/TRM3.png" alt="image" />
                    <img src="/ProjectsPics/TRM4.png" alt="image" />
                </Carousel>


            </div>
        )
    }
}
export default Projects;