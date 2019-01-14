import React, {Component} from 'react'

class Login extends Component {

  login = (username, password) => {
    console.log(username, password)
    alert(username + ' ' + password)
  }

  render () {
    console.log(this.props.username)

    let {username, password, handleUsername, handlePassword, method} = this.props

    return (
      <div>
        <span>Username:</span> <input onChange={handleUsername}/>
        <span>Password:</span> <input onChange={handlePassword}/>
        <button onClick={() => method(username, password)}>Login</button>
      </div>
    )
  }
}

export default Login
