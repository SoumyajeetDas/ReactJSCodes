import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from './themes/customTheme';
import { CssBaseline } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
