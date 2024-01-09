import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './themes/customTheme';
import { CssBaseline } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
