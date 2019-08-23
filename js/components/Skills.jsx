import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Skills extends Component {

    render() {
        return (
            <Fade>
                <div className="skills-container">
                    <div className="area-container">
                        <h4>Front-End Development</h4>
                        <ul>
                            <li>
                                <h5>Javascript Frameworks</h5>
                                <ul>
                                    <li>React.js</li>
                                    <li>jQuery</li>
                                    <li>ES6+</li>
                                </ul>
                            </li>
                            <li>HTML & CSS (SCSS)</li>
                            <li>Third Party API Connections</li>
                            <li>AJAX, JSON</li>
                            <li>BootStrap</li>
                            <li>NPM Environment</li>
                            <li>
                                <h5>Bundlers</h5>
                                <ul>
                                    <li>Gulp</li>
                                    <li>Webpack</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="area-container">
                        <h4>Back-End Development</h4>
                        <ul>
                           <li>Node.js</li>
                           <li>REST API Structuring (Express.js)</li>
                           <li>NPM Environment</li>
                           <li>API Testing (Postmane)</li>
                           <li>Unit Testing (Jest)</li>
                           <li>Database (MongoDB with Mongoose)</li>
                        </ul>
                    </div>
                    <div className="area-container">
                        <h4>Full Stack Development</h4>
                        <ul>
                            <li>SPA with Meteor + React</li>
                        </ul>
                    </div>
                    <div className="area-container">
                        <h4>WordPress Development</h4>
                        <ul>
                            <li>Custom Theme Design/Development</li>
                            <li>Custom Taxonomies</li>
                            <li>Custom Post Types</li>
                            <li>Custom Fields</li>
                        </ul>
                    </div>
                    <div className="area-container">
                        <h4>Practices</h4>
                        <ul>
                            <li>Mobile-First Approach</li>
                            <li>Form Security</li>
                            <li>Responsive Design</li>
                            <li>Clean and Well Commented Code</li>
                        </ul>
                    </div>
                    <div className="area-container">
                        <h4>Design</h4>
                        <ul>
                            <li>Gravit Designer</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>InVision</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        )
    }
}