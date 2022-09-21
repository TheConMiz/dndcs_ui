import React, { Fragment } from 'react'
import { Button, Grid, Box, ThemeProvider, createTheme } from '@mui/material'
import { red, blue } from '@mui/material/colors';
// Self-generated components
import DetailsPane from './DetailsPane'
import ListPane from './ListPane'

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

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={sx}
            >
                <Grid
                    sx={{
                        width: "100vw",
                        height: "100vh",
                    }}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <ListPane/>

                    <DetailsPane/>

                </Grid>
            </Box>
        </ThemeProvider>
 
    )
}

export default Main