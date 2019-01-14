import React from 'react'
import ToDo from './ToDo'

const List = (props) => {

  console.log(props)

  let displayedList = props.list.map( (item, index) => {
    return (
      <h2 key={index}>{item}</h2>
    )
  })

  return (
    <div>
      <ToDo list={displayedList}/>
    </div>
  )
}

export default List
