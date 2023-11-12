import React from 'react'
import SmallContent from './SmallContent'

export default function Content() {
  return (
    <div id="content" style={{width: '100vw', height: '15vh', backgroundColor: 'green'}}>
      <h1 style={{color:'white'}}><i>Context API with useContext()</i></h1>
      <SmallContent/>
    </div>
  )
}
