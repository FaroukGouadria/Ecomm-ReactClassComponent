import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h4>DashBoard</h4>
            </div>
        );
    }
    componentDidMount() {
        document.title = "Dashboard-MyApp"
    } 
}

export default Dashboard;