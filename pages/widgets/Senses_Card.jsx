import React from 'react'
import { Card, Stack } from '@mui/material'
import Banner from './Elements/Banner'

const Senses_Card = () => {

    return (
        <Card
            variant="outlined"
            sx={{
                width: '300px',
                height: '300px',
            }}
        >
            <Stack spacing={2}>
                <Banner label="Darkvision" value="30ft"></Banner>
                <Banner label="Blindsight" value=""></Banner>
                <Banner label="Tremorsense" value=""></Banner>
            </Stack>

        </Card>
    )

}

export default Senses_Card