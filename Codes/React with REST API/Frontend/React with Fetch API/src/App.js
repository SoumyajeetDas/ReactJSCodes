
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Index from './components/Index';
import Navbar from './components/Navbar';
import Update from './components/Update.js'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
