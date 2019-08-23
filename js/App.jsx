import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Board from './components/RPS/Board.jsx';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            activeView: 'Play',
            welcome: false
        }

        this.changeView = this.changeView.bind(this);

    }

    changeView(e) {
        const view = e.target.dataset.view;
        this.setState({activeView: view});
    }

    render() {

        if(this.state.welcome) {
            return (
                <Fade>
                    <div className="app-body-welcome">
                        <h1>Hey, there!</h1>
                        <p className="welcome-message">
                            Welcome to my website. This is just a little website so you learn a little bit more about my professional self. 
                            It was created with React.js and some libraries thrown here and there.
                        </p>
                        <p classNAme="thank-message">
                            Anyways, thank you very much for being here. 
                        </p>
                        <button className="enter" onClick={() => this.setState({welcome: false})}>Let's get started</button>
                    </div>
                </Fade>
            )
        }

        return (
            <Zoom>
                <div className="app-body">
                    <Header />
                    <NavBar changeView={this.changeView} activeView={this.state.activeView} />
                    <section className="view-container">
                        {this.state.activeView === 'Experience' ? 
                            <Experience />
                        :
                        this.state.activeView === 'About' ?
                            <About />
                        :
                        this.state.activeView === 'Skills' ?
                            <Skills />
                        :
                        this.state.activeView === 'Contact' ?
                            <Contact />
                        : 
                        this.state.activeView === 'Play' ?
                            <Board />
                        :
                        ''
                        }
                    </section>
                    <Footer />
                </div>
            </Zoom>
        )
    }
}