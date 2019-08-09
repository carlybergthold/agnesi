import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Nav from './components/Nav/Nav';
import Home from './components/Homepage/Home';
import ScootScout from './components/Projects/ScootScout';
import About from './components/About/About';
import Container from './ApplicationViews'

ReactDOM.render(
    <Router>
        <div className='app-container'>
            <Nav />
            <Route path='/home' component={Container} 
                onEnter={function(){
                    document.getElementById("home-container").scrollIntoView();
                    }
                }
            />
            <Route path='/about' component={Container} 
                onEnter={function(){
                    document.getElementById("about-container").scrollIntoView();
                    }
                }
            />
            <Route path='/projects' component={Container} 
                onEnter={function(){
                    document.getElementById("scoot-container").scrollIntoView();
                    }
                }
            />
        </div>
    </Router>
, document.getElementById('root'));
