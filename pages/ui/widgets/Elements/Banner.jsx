import React from 'react'
import { Chip, Typography, Card } from '@mui/material'

const Banner = (props) => {
    return (
        // <Chip
        //     variant="outlined"
        //     color="primary"
        //     label={props.label}
        //     avatar={<Typography>60Ft</Typography>}
        //     sx={{sizeMedium: "100px"}}

        // />
        <Card
            raised={false}
            variant="outlined"
        >
            {props.value + " " + props.label}
        </Card>
    )
}

export default Banner