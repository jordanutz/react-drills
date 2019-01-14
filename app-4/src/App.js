import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  login = (username, password) => {
    console.log(username, password)
    alert(username + ' ' + password)
  }

  render() {
    return (
      <div className="App">
      <Login username={this.state.username} password={this.state.password} handleUsername={this.handleInput} handlePassword={this.handlePassword} method={this.login}/>
      </div>
    );
  }
}

export default App;
