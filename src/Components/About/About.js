import React, { Component } from 'react';
import './About.css';
class About extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='about-wrapper'>
                <h1>About me</h1>
                <img className='portrait' src="/files/head.jpeg" alt="portrait" />
                <p>
                    Though my major was mathematics, I love and enjoy coding after I learned Python and VPython when I was in the University.
                    When I realized, I'm already a web developer.
                    Still, on the path of improving my programming skill, which is never end, 
                    I feel joyful and find my evolution everyday.
                    When I'm not coding, I love to pet my cats, listen to music, play board games/video games, and make food.
                    They also trigger me to make two food related projects and a Pokemon project.
                    I'm happy to use new acquired skills to build up these projects.
                </p>
            </div>
        )
    }
}
export default About;