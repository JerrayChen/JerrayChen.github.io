import React, {Component} from 'react';
import './Home.css';
class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='home-wrapper'>
                
                    <h1 className='greeting1'>Hi, I'm Jerry. A Fullstack Web Developer.</h1>
                    <h2 className='greeting2'>It's nice to meet you!</h2>
                    <h3 className='home-contact'><a href='mailto:cchejui@gmail.com'>Contact me</a></h3>
                
            </div>
        )
    }
}
export default Home;