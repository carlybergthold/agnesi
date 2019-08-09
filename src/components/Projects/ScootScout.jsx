import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import './projects.css'
import homepage from './images/homepage.png'
import imageArr from './images/array.png'
import registration from './images/registration.png'
import savedLocs from './images/savedLocs.png'
import scootMap from './images/scootmap.png'



class ScootScout extends Component {

    render() {
        return (
        <div id="scoot-container" class="container">
            <h1>Scoot Scout</h1>
            <p>Motorized scooters have revolutionized the way city dwellers get around, and more and more scooter companies are popping up to meet the demand. But why waste time opening up each company's app to locate your nearest ride?</p>
            <p>At Scoot Scout, we aren't brand loyal; we're scoot loyal. Simply open up the app, and you can see all the scooters near you. Yeah. Take that, Big Scooter.</p>

            <img src={homepage} alt="scoot-scout-homepage"/>
            <img src={imageArr} alt="scoot-scout-homepage"/>
            <img src={registration} alt="scoot-scout-homepage"/>
            <img src={savedLocs} alt="scoot-scout-homepage"/>
            <img src={scootMap} alt="scoot-scout-homepage"/>

            <h2>Features</h2>
            <ul>
                <li>find scooters near you or search for scooters at a different location</li>
                <li>ave locations you check often and open them up with one click</li>
                <li>filter scooters by brand</li>
                <li>get walkable directions to the scooter nearest you</li>
            </ul>

            <h2>Technology Used</h2>
            <ul>
                <li>React.js</li>
                <li>HTML5/CSS</li>
                <li>JavaScript</li>
                <li>Leaflet (markercluster, geosearch)</li>
                <li>Mapbox</li>
                <li>Postman</li>
            </ul>

            <h2>APIs Used</h2>
            <ul>
                <li>Google</li>
                <li>Bird</li>
                <li>Lime</li>
                <li>Spin</li>
                <li>Nashville Metro Open Data Source</li>
            </ul>
        </div> //end of main container
        )
    }

}

export default withRouter(ScootScout)