import React, {Component} from 'react'

class NewTask extends Component {
  constructor () {
    super()
    this.state = {
      input: ''
    }
  }

  handleItem = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render () {

    console.log(this.state.input)
    return (
      <div>
        <input value={this.props.items} onChange={this.handleItem}/>
        <button onClick={() => this.props.addItem(this.state.input)}>Add Item</button>
      </div>
    )
  }
}

export default NewTask
