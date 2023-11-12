import React from 'react';
import './App.css';
import ChangeEvent from './component/ChangeEvent';
import ComponentWithChildren from './component/ComponentWithChildren';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import User from './component/state/User';
import Status from './component/Status';

const person = {
  firstName: "Soumyajeet",
  lastName: "Das"
}


const personList = [
  {
    firstName: "Soumyajeet",
    lastName: "Das"
  },
  {
    firstName: "Rohan",
    lastName: "Dutta"
  },
]

function App() {
  return (
    <div className="App">

      {/* Without Optional messageCount */}
      <Greet name="Soumyajeet" isLoggedIn={true} />

      {/* With Optional messageCount */}
      <Greet name="Soumyajeet" messageCount={40} isLoggedIn={true} />

      {/* <Person person={person} />
      <PersonList personList={personList} />
      <Status status='error' />

      <ComponentWithChildren>
        <Status status='error' />
      </ComponentWithChildren> */}


      {/* <ChangeEvent /> */}

      <User/>
    </div>
  );
}

export default App;
