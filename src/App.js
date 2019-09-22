import React from 'react'
import CharacterCard from './Character'
import './App.css'
import { throwStatement } from '@babel/types';
import _ from 'lodash';
const word = "Hello";

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 round: 1,
 guess: [],
 completed: false
 }
}

class App extends React.Component {
  state = prepareStateFromWord(word);
  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({guess})
    if(guess.length == this.state.chars.length){
    if(guess.join('').toString() == this.state.word){
    this.setState({guess: [], completed: true})
    }else{
    this.setState({guess: [], round: this.state.round + 1})
    }
    }
   }
   reseted = () => {
    this.setState({ completed: false ,round: this.state.round + 1,})
   }
  render() {
    let Completee = this.state.completed === true ? <h2>Complete </h2> : '';
    let Completeee = this.state.completed === true ? <h4 onClick={this.reseted}>PLAY AGIAN </h4> : '';
    return (
      <div>
        {
        Array.from(this.state.chars).map((item,index)=>(

          <CharacterCard
          value={item}
          key={index}
          round={this.state.round}
          activationHandler={this.activationHandler}
          />
        ))
        }
     
      <div>Round {this.state.round}</div>
        <h4>{Completee}{Completeee}</h4>
        </div>
    );
  }
}

export default App;