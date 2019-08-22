import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Contact extends Component {

    render() {
        return (
            <Fade>
                <div>
                    <h2>Reach out to me!</h2>
                    <p>Either you have a business inquiry, or want to have a good chat over a coffee.
                         I'm always open to meet new people and make new friends.
                    </p>
                    <div>
                        <p>E-mail: alberto.reply2me@gmail.com</p>
                        <p><a href="https://linkedin.com/in/albertrobles">Linked In</a></p>
                        <p><a href="https://github.com/aloaks">GitHub</a></p>
                    </div>
                </div>
            </Fade>
        )
    }
}