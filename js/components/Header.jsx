import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="info-profile">
                    <img className="avatar" src="./assets/profile.jpg" alt="my-avatar"/>
                    <h1>J. Alberto Robles</h1>
                    <h2>Professional Web Developer</h2>
                </div>
                <div className="extra-info">
                    <p>Vancouver, BC</p>
                    <p>Actively looking for a new opportunity</p>
                </div>
                <div className="contact-info">
                    <p>alberto.reply2me@gmail.com</p>
                </div>
            </header>
        )
    }
}