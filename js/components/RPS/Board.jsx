import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Option from './Option.jsx';
import shuffle from './Shuffle.js';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            randomizing: false,
            opponentsChoice: '',
            result: '',
            myChoice: '',
            myScore: 0,
            opponentScore: 0,
            options: ['Rock', 'Paper', 'Scissors']
        }

        this.setChoice = this.setChoice.bind(this)
        this.play = this.play.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    setChoice(e) {
        let choice = e.target.dataset.choice;
        this.setState({opponentsChoice: choice});
    }

    play() {

        let options = ['Rock', 'Paper', 'Scissors'];

        if(!this.state.opponentsChoice) {
            return alert('You got to pick something, you know that, right?');
        }
        this.setState({randomizing: true});
        
        let random = shuffle(options);
        let selection = random[1];
        this.setState({myChoice: selection});

        var opChoice = this.state.opponentsChoice;

        if(selection === opChoice) {
            return this.setState({result: 'Tie'});
        } 

        if(selection === 'Paper' && opChoice === 'Scissors' || selection === 'Rock' && opChoice === 'Paper' || selection === 'Scissor' && opChoice === 'Rock') {
            return this.setState({result: 'You win!', opponentScore: this.state.opponentScore + 1});
        }

        if(opChoice === 'Paper' && selection === 'Scissors' || opChoice === 'Rock' && selection === 'Paper' || opChoice === 'Scissor' && selection === 'Rock') {
            return this.setState({result: 'You lose!', myScore: this.state.myScore + 1});
        }
    }

    playAgain() {
        this.setState({result: '', opponentsChoice: '', myChoice: '', randomizing: false});
    }


    render() {
        if(!this.state.playing) {
            return (
                <Fade>
                    <div className="welcome-board">
                        <h4>Let's play Rock, Paper, Scissors, shall we?</h4> 
                        <button onClick={() => this.setState({playing: true})}>Play!</button>  
                    </div>
                </Fade>
            )
        }

        return (
            <Fade>
                <div className="board">
                    <div className="my-board side-board">
                        <h2>{this.state.myScore}</h2>
                        {this.state.result ? 
                        <Flip>
                            <div className="choice-div">
                                <img src={`../../assets/icons/${this.state.myChoice}.png`} />
                                <h5>{this.state.myChoice}</h5>
                            </div>
                        </Flip>
                        :
                        <h1>Decisions... decisions!</h1>
                        }
                    </div>
                    <div className="middleboard">
                        {this.state.result ? 
                            <div className="lets-go-again">
                                <h1>{this.state.result}</h1>
                                <button className="go-btn" onClick={this.playAgain}>Play Again!</button>
                            </div>

                        :
                            <button className="go-btn" onClick={this.play}>
                                {this.state.randomizing ? 
                                    '...'
                                :    
                                    'Go'
                                }
                            </button>
                        }
                    </div>
                    <div className="opponent-board side-board">
                        <h2>{this.state.opponentScore}</h2>
                        <div className="choice-container">
                        {this.state.opponentsChoice ? 
                            <Flip>
                                <div className="choice-div">
                                    <img src={`../../assets/icons/${this.state.opponentsChoice}.png`} />
                                    <h5>{this.state.opponentsChoice}</h5>
                                </div>
                            </Flip>
                        :
                            <h2>Pick your weapon!</h2>
                        }
                        </div>
                        {!this.state.randomizing ? 
                            <div className="opponent-options">
                                {this.state.options.map((option, i) => {
                                    return <Option key={i} option={option} setChoice={this.setChoice}/>
                                })}
                            </div>
                        : 
                        '' 
                        }
                    </div>
                </div>
            </Fade>
        )
    }
}