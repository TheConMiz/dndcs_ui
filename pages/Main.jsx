import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors';
// Self-generated UI components
import UIController from "./middleware/UIController";
import DataController from "./middleware/DataController";
import Sidebar from "./unused/Sidebar"

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
  
const AppBody = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Middleware */}
            {/* <UIController /> */}
            {/* <DataController /> */}
            {/* UI */}
            <Sidebar/>

        </ThemeProvider>
    );
}

const Main = () => {
    return (
        <AppBody/>
    )
}

export default Main