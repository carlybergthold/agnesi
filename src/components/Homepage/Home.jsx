import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import './homepage.css'


class Home extends Component {

    render() {
        return (<div id="home-container" class="container">
            <h1>Carly Bergthold</h1>
            <h2>Full Stack Software Developer</h2>
            </div>)
    }

}

export default withRouter(Home)