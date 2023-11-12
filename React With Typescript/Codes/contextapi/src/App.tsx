import React from 'react';
import { UserContextProvider } from './context/UserContext';
import './App.css';
import UserPage from './component/UserPage';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserPage />
      </div>
    </UserContextProvider>

  );
}

export default App;
