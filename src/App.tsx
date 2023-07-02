import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import { AllRoutes } from './pages/Routes';
import { Routes } from './Routes';


const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes routes={AllRoutes}/>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
