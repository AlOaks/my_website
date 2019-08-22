import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export default class Option extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Zoom>
                <img 
                src={`../../assets/icons/${this.props.option}.png`} 
                className="option-button" 
                data-choice={this.props.option} 
                onClick={this.props.setChoice} 
                alt={`${this.props.option} icon`}
                /> 
            </Zoom>
        )
    }
}