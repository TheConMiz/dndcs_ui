import React from 'react'
import { Button, Card, Divider, TextField, Typography } from '@mui/material'

const Hit_Point_Tracker = () => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: '330px',
                height: '150px'
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
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

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>Current</Typography>
                    <Typography variant="h3">100</Typography>

                </div>

                <div>
                    <Typography variant="h3">/</Typography>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>Max</Typography>
                    <Typography variant="h3">100</Typography>
                </div>
                
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>Temp</Typography>
                    <Typography variant="h3">--</Typography>
                </div>

            </div>
            
        </Card>
    )
}

export default Hit_Point_Tracker