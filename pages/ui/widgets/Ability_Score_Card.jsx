import React from 'react'
import { Card, CardActionArea, CardContent, Typography, TextField, Divider } from '@mui/material'

const Ability_Score_Card = ({mode}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: '130px',
                height: '150px',
            }}
        >
        <CardContent>
            <Typography variant='h6' textAlign={'center'} fontSize={16}>
                {mode}
            </Typography>
            <Divider></Divider>
            <div style={{height: '10px'}}></div>
            <Typography variant='h4' textAlign={'center'}>
                +1
            </Typography>
            <TextField
                id="outlined-number"
                    type="number"
                    size='small'
                    
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </CardContent>
    </Card>
    )
}

export default Ability_Score_Card