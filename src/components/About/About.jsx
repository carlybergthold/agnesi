import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import './about.css'


class About extends Component {

    render() {
        return (
        <div id="about-container" class="container">
            <h1>About</h1>
            <p>Reformed liberal arts major studying full-stack software development. After years of nary a thought about code, I stumbled into the programming world through my work in digital marketing. The light coding I got to do - designing landing pages and maintaining the company website - quickly became my favorite part of the work day. So when a friend told me about a software basics course at the Nashville Software School, I knew I had to attend. After three whirlwind weeks of HTML, CSS, and JavaScript, I was hooked - I fell in love with the way programming entails creativity, logic, and endless learning opportunities. Now as a student at NSS, I still pinch myself that I get to be immersed in code every day.</p>
        </div>)
    }

}

export default withRouter(About)