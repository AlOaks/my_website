import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Education extends Component {

    render() {
        return (
            <Fade>
                <div className="education-container">
                    <div className="single-education">
                        <h2>RED Academy</h2>
                        <h3>Web Development Diploma</h3>
                        <ul>
                            <li>WordPress</li>
                            <li>Javascript</li>
                            <li>HTML, CSS</li>
                            <li>API Consuming</li>
                            <li>AJAX, JSON</li>
                            <li>Responsive Design</li>
                            <li>Mobile First Approach</li>
                        </ul>
                    </div>
                    <div className="single-education">
                        <h2>Online Courses</h2>
                        <h3>Web Development</h3>
                        <ul>
                            <li>Node Development</li>
                            <li>Meteor + React</li>
                            <li>React Native</li>
                            <li>React.js</li>
                            <li>API Structuring</li>
                            <li>MVC</li>
                            <li>Database Arquitecture</li>
                        </ul>
                    </div>
                    <div className="single-education">
                        <h4>Academia de Música Fermatta</h4>
                        <h3>Audio Engineering and Music Production</h3>
                    </div>
                </div>
            </Fade>
        )
    }
}