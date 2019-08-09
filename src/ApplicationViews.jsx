import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom"
import Home from './components/Homepage/Home';
import ScootScout from './components/Projects/ScootScout';
import About from './components/About/About';

class Container extends Component {

    render() {
        return (<>
            <Home />
            <About />
            <ScootScout />
            </>)
    }

}

export default withRouter(Container)