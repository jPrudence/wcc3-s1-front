import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import { AllRoutes } from './pages/Routes';
import { Routes } from './Routes';
import { Suspense } from 'react';
import MainLoader from './pages/MainLoader';


const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Suspense fallback={<MainLoader />}>
        <BrowserRouter>
          <Routes routes={AllRoutes} />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
