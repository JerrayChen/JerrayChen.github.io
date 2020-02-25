import React, {Component} from 'react';
import './Home.css';
class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Hi, I'm Jerry. A Fullstack Web Developer.</h1>
                    <h2>It's nice to meet you!</h2>
                    <h3><a href='mailto:cchejui@gmail.com'>Contact me</a></h3>
                </div>
            </div>
        )
    }
}
export default Home;