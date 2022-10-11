import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors';
import Sidebar from "./../unused/Sidebar"

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
            dark: red[900],
        },
        secondary: {
            main: blue[500],
            dark: blue[300],
        }
    },
});

const UIShell = () => {
    return (
        <ThemeProvider theme={theme}>
            <Sidebar>
                
            </Sidebar>
        </ThemeProvider>
    )
}

export default UIShell