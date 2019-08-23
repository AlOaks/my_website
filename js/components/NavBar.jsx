import React, { Component } from 'react';


export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttons: ['Experience', 'About', 'Skills', 'Contact', 'Play', 'Education']
        }
    }

    

    render() {


        return (
            <div className="nav-bar">
                {this.state.buttons.map((button, i) => {
                    return <button className={this.props.activeView === button ? 'active-view' : 'nav-button'} key={i} data-view={button} onClick={this.props.changeView}>{button}</button>
                })}
            </div>
        )
    }
}