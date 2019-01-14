import React from 'react'

const Todo = (props) => {

  console.log(props)
  return (
    <div>
      {props.display}
    </div>
  )
}

export default Todo
