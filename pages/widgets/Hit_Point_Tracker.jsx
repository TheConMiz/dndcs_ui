import React from 'react'
import { Button, Card, TextField } from '@mui/material'

const Hit_Point_Tracker = () => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: '400px',
                height: '150px'
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button>
                    Heal
                </Button>

                <TextField
                    id="outlined-number"
                    type="number"
                    size='small'
                    sx={{
                        width: "80px"
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Button>
                    Damage
                </Button>
            </div>
            <div>
                
            </div>

        </Card>
    )
}

export default Hit_Point_Tracker