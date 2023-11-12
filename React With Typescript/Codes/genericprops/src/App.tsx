import React from 'react';
import './App.css';
import ListItems from './component/ListItems';


const items = [
  {
    name:"Soumyajeet",
    age:20
  }
]
function App() {
  return (
    <div className="App">
      <ListItems items={items}/>
    </div>
  );
}

export default App;
