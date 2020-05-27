import React, {Component} from 'react';
import './Contact.css';
class Contact extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>Contact me</h1>
                <a href='https://github.com/JerrayChen' target="_blank"><i class="fab fa-github-square"></i></a>
                <a href='https://www.linkedin.com/in/che-jui-chen/' target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href='mailto:cchejui@gmail.com' target="_blank"><i class="far fa-envelope"></i></a>
            </div>
        )
    }
}
export default Contact;