import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      input: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Herro</h1>
        <input onChange={this.handleInput} value={this.state.input}/>
        <h2>{this.state.input}</h2>
      </div>
    );
  }
}

export default App;
