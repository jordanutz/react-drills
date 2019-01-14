import React, { Component } from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
  }

  addItem = (item) => {
    console.log('hit')
    console.log(item)
    let copyList = [...this.state.list]
    copyList.push(item)
    this.setState({
      list: copyList,
      item: ''
    })
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask items={this.state.items} addItem={this.addItem}/>
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
