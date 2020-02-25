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
                <ul>
                    <li><a href='https://www.linkedin.com/in/che-jui-chen/'>Linkedin</a></li>
                    <li><a href='mailto:cchejui@gmail.com'>Email</a></li>
                </ul>
            </div>
        )
    }
}
export default Contact;