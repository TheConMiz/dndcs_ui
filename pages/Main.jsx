import React, { Fragment } from 'react'
import { Button, Grid, Box, ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors';
// Self-generated UI components
import DetailsPane from './ui/DetailsPane'
import ListPane from './ui/ListPane'
import UIController from "./middleware/UIController";
import DataController from "./middleware/DataController";


const sx = {
    width: "100vw",
    height: "100vh",
    backgroundColor: 'primary.dark',
    paddingTop: 2
}

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
            
            <UIController />
            <DataController />
            
            <Box
                sx={sx}
            >
                <Grid
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <ListPane/>

                    {/* <DetailsPane/> */}

                </Grid>
            </Box>
        </ThemeProvider>
    );
}

const Main = () => {
    return (
        <AppBody/>
    )
}

export default Main