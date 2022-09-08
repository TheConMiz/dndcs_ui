import React from 'react'
import { Card, Stack } from '@mui/material'
import Banner from './Elements/Banner'

const Saving_Throw_Card = () => {

    return (
        <Card
            variant="outlined"
            sx={{
                width: '300px',
                height: '300px',
            }}
        >
            <Stack spacing={2}>
                <Banner label="STR" value="+1"></Banner>
                <Banner label="DEX" value="0"></Banner>
                <Banner label="CON" value="-1"></Banner>
                <Banner label="INT" value="+1"></Banner>
                <Banner label="CHA" value="0"></Banner>
                <Banner label="WIS" value="-1"></Banner>
            </Stack>

        </Card>
    )

}

export default Saving_Throw_Card