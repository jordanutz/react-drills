import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: ['sam', 'sally', 'samantha', 'sidney', 'jason', 'salamendar'],
      input: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value.toLowerCase()
    })
  }

  render() {
    let filteredFriends = this.state.people.filter( (person, index) => {
      return person.includes(this.state.input)
    }).map( (person, index) => {
      return (
        <h2 key={index}>{person}</h2>
      )
    })

    return (
      <div className="App">
        <h1>React Drill 3</h1>
        {filteredFriends}

        <h2>Filter Here</h2>

        <input onChange={this.handleInput}/>
      </div>
    );
  }
}

export default App;
