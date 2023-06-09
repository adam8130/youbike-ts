import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Routers'
import Navbar from './components/Navbar'



function App() {

    const theme = createTheme({
        palette: {
            success: {
                main: 'rgb(172, 211, 0)'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar/>
                <Router/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App