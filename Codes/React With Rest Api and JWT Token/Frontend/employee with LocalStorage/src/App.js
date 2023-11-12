import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Create from './component/Create';


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
