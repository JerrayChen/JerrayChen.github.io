import React, { Component } from 'react';
import './Contact.css';
class Contact extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='contact-wrapper'>
                <h1 className='contact-title'>Contact me</h1>
                <span className='contact-icon'>
                    <a href='https://github.com/JerrayChen' target="_blank"><i class="fab fa-github-square"></i></a>
                    <a href='https://www.linkedin.com/in/che-jui-chen/' target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href='mailto:cchejui@gmail.com' target="_blank"><i class="far fa-envelope"></i></a>
                </span>
                <p className='contact-resume'>
                    <a href="/files/CheJui Chen's resume.pdf" target="_blank" download>Download my resume</a>
                </p>
            </div>
        )
    }
}
export default Contact;