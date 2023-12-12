import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Headered';
import Home from './component/Pages/home/Home';
import Category from './component/Pages/category/Category';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
