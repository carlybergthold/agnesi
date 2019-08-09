import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom"
import './Nav.css'


class Nav extends Component {

    render() {
        return (
        <div id="nav-container">
            <ul id="nav-ul">
                <Link to="/home"><li>home</li></Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/projects"><li>scoot scout</li></Link>
            </ul>
        </div>)
    }

}

export default withRouter(Nav)