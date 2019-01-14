import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      roomies: ['Spencer', 'Tyler', 'Prakash', 'Tyler', 'Elliot']
    }
  }


  render() {

    let displayedRoomies = this.state.roomies.map( (roomie, index) => {
      return (
        <div className="roommies" key={index}>
          {roomie}
        </div>
      )
    })

    return (
      <div className="App">
        <h1>My List</h1>
        {displayedRoomies}
      </div>
    );
  }
}

export default App;
