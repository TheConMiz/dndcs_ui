import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors';
import Sidebar from "./Sidebar"
import ListPane from './ListPane';

const base_theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#3f8db5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#ffffff',
          paper: '#fbf6ea',
        },
    },
});

const UIShell = () => {
  
    return (
        <ThemeProvider theme={base_theme}>
            <Sidebar/>
        </ThemeProvider>
    )
}

export default UIShell