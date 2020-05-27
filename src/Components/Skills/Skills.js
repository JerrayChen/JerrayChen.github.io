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
                    <section>
                        <i class="fab fa-js-square"></i><span>Javascript</span>
                    </section>
                    <section>
                        <i class="icon-reactjs"></i><span>React</span>
                    </section>
                    <section>
                        <i class="icon-nodejs"></i><span>NodeJS</span>
                    </section>
                    <section>
                        <i class="icon-csharp"></i><span>C#.NET</span>
                    </section>
                    <section>
                        <i class="icon-python"></i><span>Python</span>
                    </section>
                    <section>
                        <i class="icon-cplusplus"></i><span>C++</span>
                    </section>
                    <section>
                        <i class="icon-java"></i><span>Java</span>
                    </section>
                    <section>
                        <i class="icon-oracle"></i><span>Oracle SQL</span>
                    </section>
                    <section>
                        <i class="icon-postgres"></i><span>PostgreSQL</span>
                    </section>
                    <section>
                        <i class="icon-npm"></i><span>NPM</span>
                    </section>
                    <section>
                        <i class="icon-sass"></i><span>Sass</span>
                    </section>
                    <section>
                        <i class="fab fa-html5"></i><span>HTML 5</span>
                    </section>
                    <section>
                        <i class="fab fa-css3-alt"></i><span>CSS 3</span>
                    </section>
                    <section>
                        <i class="icon-git"></i><span>Git</span>
                    </section>
                </div>
            </div>
        )
    }
}
export default Skills;