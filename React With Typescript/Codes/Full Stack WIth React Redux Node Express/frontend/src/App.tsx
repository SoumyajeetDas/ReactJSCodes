import React, { useCallback, useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/store';
import { getGame } from './store/gameSlice';
import GamePage from './features/games/GamePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddGamePage from './features/games/AddGamePage';


const App: React.FC = () => {

  const dispatch = useAppDispatch();

  const { error } = useAppSelector(state => state.gamesReducer)

  // const initApp = useCallback(async () => {
  //   console.log("Hello")
  //   await dispatch(getGame())
  // }, [dispatch]);

  const initApp = async () => {
    // console.log("Hello")
    await dispatch(getGame())
  };


  useEffect(() => {
    if (error) alert(error);
  }, [error])


  useEffect(() => {
    initApp();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/addGame" element={<AddGamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
