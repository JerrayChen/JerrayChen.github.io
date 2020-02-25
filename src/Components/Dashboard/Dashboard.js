import React, { Component } from 'react';
import './Dashboard.css';
import Nav from '../Nav/Nav';
import routes from '../../routes';
class Dashboard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Nav />
                <main>
                    {routes}
                </main>
            </div>
        )
    }
}
export default Dashboard;