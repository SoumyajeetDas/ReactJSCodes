// import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import About from './About';
import React, { useState } from 'react'
import Alerting from './Alert.js';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function toggleMode() {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.background = "#085668";
      document.title = "Enabled Dark Mode";
      setMsg("Successfully changed to Dark Mode", 'success');

    }
    else {
      document.body.style.background = "white";
      setMode('light');
      document.title = "Enabled Light Mode";
      setMsg("Successfully changed to Light Mode", 'warning');

    }
  }

  function setMsg(message, type) {
    setAlert({ type: type, msg: message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (

    <>


      <BrowserRouter>
        <Header title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* // <Header />
    // <Header aboutText="About TextUtils" /> */}

        <Alerting alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route exact path="/" element={<Content mode={mode} toggleMode={toggleMode} setMsg={setMsg} />}/>
        </Routes>

      </BrowserRouter>



    </>


  );
}

export default App;
