import React, { Component } from 'react';
import './App.css';
import ToDo from './Components/Todo'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      item: ''
    }
  }

  handleItem = (event) => {
    this.setState({
      item: event.target.value,
    })
  }

  addItem = () => {
    let copyList = [...this.state.list]
    copyList.push(this.state.item)
    this.setState({
      list: copyList,
      item: ''
    })
  }

  render() {

    console.log(this.state.list)

    let displayedItems = this.state.list.map( (item, index) => {
      return (
        <h2 key={index}>{item}</h2>
      )
    })

    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input value={this.state.item} onChange={this.handleItem}/><button onClick={this.addItem}>Add Item</button>

        <ToDo display={displayedItems} />
      </div>
    );
  }
}

export default App;
