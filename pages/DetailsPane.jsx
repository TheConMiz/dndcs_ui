import { Paper, Tabs, Tab, TabList } from '@mui/material'
import React, { Fragment } from 'react'

const DetailsPane = () => {
    return (    
        <Fragment>
            <Paper
                variant='outlined'
                elevation={0}
                sx={{
                    width: "40vw",
                    height: "95vh"
                }}

            >
                <Tabs>
                    <Tab
                        label="Description"
                    >

                    </Tab>
                    <Tab
                        label="Notes"
                    >

                    </Tab>
                </Tabs>
            </Paper>
        </Fragment>
    )
}

export default DetailsPane