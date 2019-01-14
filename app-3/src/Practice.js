import React, {Component} from 'react'

class Practice extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render () {
    return (
      <div>
        Test
      </div>
    )
  }
}

export default Practice
