import React, { Component } from 'react';
import './Skills.css';
class Skills extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className='skills'>

                <div className="skill-wrapper">
                    <section className='skill-block'>
                        <i class="fab fa-js-square"></i><span>Javascript</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-reactjs"></i><span>React</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-nodejs"></i><span>NodeJS</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-csharp"></i><span>C#.NET</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-python"></i><span>Python</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-cplusplus"></i><span>C++</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-java"></i><span>Java</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-oracle"></i><span>Oracle SQL</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-postgres"></i><span>PostgreSQL</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-npm"></i><span>NPM</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-sass"></i><span>Sass</span>
                    </section>
                    <section className='skill-block'>
                        <i class="fab fa-html5"></i><span>HTML 5</span>
                    </section>
                    <section className='skill-block'>
                        <i class="fab fa-css3-alt"></i><span>CSS 3</span>
                    </section>
                    <section className='skill-block'>
                        <i class="icon-git"></i><span>Git</span>
                    </section>
                </div>
            </div>
        )
    }
}
export default Skills;