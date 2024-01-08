import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './themes/customTheme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <h1>Hello</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
