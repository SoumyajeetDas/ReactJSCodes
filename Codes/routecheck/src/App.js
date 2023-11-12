// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Page404 from './Page404';
import User from './User';
import Login from './Login';
import Protected from './Protected';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/' element={<Protected Component={Home}/>}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/about/:name/:age' element={<User/>}></Route>
          <Route exact path='/*' element={<Page404/>}></Route>
        </Routes>
       
      </BrowserRouter>

    </div>
  );
}

export default App;
