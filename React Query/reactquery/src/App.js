import './App.css';
import NavbarPage from './components/Navbar.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import SuperHeroesPages from './components/SuperHeroes.page';
import RQSuperHeroesPages from './components/RQSuperHeroes.page';
import RQSuperHeroPage from './components/RQSuperHeroPage.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarPage/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/superheroes" element={<SuperHeroesPages/>}/>
        <Route exact path="/rqsuperheroes" element={<RQSuperHeroesPages/>}/>
        <Route exact path="/rqsuperhero-page/:heroid" element={<RQSuperHeroPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
