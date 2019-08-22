import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Skills extends Component {

    render() {
        return (
            <Fade>
                <div>
                    <div>
                        <h4>Programming</h4>
                        <ul>
                            <li>Javascript (ES6, React, jQuery)</li>
                            <li>Node.js (Express.js)</li>
                            <li>MongoDB (mongoose)</li>
                            <li>HTML (handlebars)</li>
                            <li>CSS (Sass)</li>
                            <li>Bundlers (Gulp, Webpack)</li>
                            <li>CLI (git, webpack, react)</li>
                            <li>Testing (Jest, Postman)</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Skills</h4>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Mobile First Approach</li>
                            <li>REST API (Architecture and Connections)</li>
                            <li>Object Oriented Programming</li>
                            <li>JSON, AJAX, HTTP Requests</li>
                            <li>Asyncronous Programming</li>
                            <li>MVC (Model, View, Controller)</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        )
    }
}