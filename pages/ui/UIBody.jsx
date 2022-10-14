import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import GridLayout from "react-grid-layout"
import ListPane from './ListPane';
import MiscPane from './MiscPane';
import ContextWindow from "./ContextWindow";
import ControlPane from './ControlPane';
import Flex_Card from './base/Flex_Card';


const UIBody = () => {
    const sx_content = {
		width: "100%",
		height: "100vh",
		backgroundColor: 'primary.dark',
		paddingTop: 2,
    }

    const test = () => {
        return (
            <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
            <Grid
                sx={{
                    width: "100vw",
                    height: "100vh",
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
                    xs={5}
                >
                    <ControlPane/>
                </Grid>

                <Grid
                    item
                    xs={5}
                >
                    <ListPane />

                </Grid>

                <ContextWindow/>

            </Grid>
      </Box>
        )
    }

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    
    return (
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      );
}

export default UIBody

