import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ListPane from './ListPane';
import ContextWindow from "./ContextWindow";


const UIBody = () => {
    const sx_content = {
		width: "100vw",
		height: "100vh",
		backgroundColor: 'primary.dark',
        paddingTop: 2,
        flexGrow: 1
    }

    return (
        <Box
            component="main"
            sx={sx_content}
        >
            <Grid
                sx={{
                    overflow: "scroll"
                }}
                container
                direction="row-reverse"
                justifyContent="center"
                alignItems="space-evenly"
                spacing={2}
            >
                <Grid
                    item
                >
                    <ListPane />

                </Grid>

                <ContextWindow/>
            </Grid>
        </Box>
    )
}

export default UIBody

