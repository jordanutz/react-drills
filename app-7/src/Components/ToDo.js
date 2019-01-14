import React from 'react'

const ToDo = (props) => {

  console.log(props)
  return (
    <div>
      {props.list}
    </div>
  )
}

export default ToDo
