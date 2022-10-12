import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import ListPane from './ListPane';
import MiscPane from './MiscPane';


const UIBody = () => {
    const sx_content = {
		width: "100%",
		height: "100vh",
		backgroundColor: 'primary.dark',
		paddingTop: 2,
    }
    
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
            <Box
                sx={sx_content}
            >
                <Grid
                    sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "scroll"
                    }}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <ListPane />
                    <MiscPane />
                    
                </Grid>
            </Box>
      </Box>
    )
}

export default UIBody