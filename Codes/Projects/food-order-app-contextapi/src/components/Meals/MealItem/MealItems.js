import React from 'react'

export default function MealItems(props) {
  return (
    <div>
      <div><b>{props.name}</b></div>
      <div><i><small>{props.description}</small></i></div>
      <div><b style={{color:"#AF601A"}}>${props.price}</b></div>

    </div>
  )
}
