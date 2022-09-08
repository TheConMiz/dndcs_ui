import React from 'react'
import { Button, Grid, Stack } from '@mui/material'
import { Container, maxWidth } from '@mui/system'

// Self-generated components
import Ability_Score_Card from './widgets/Ability_Score_Card'
import Hit_Point_Tracker from './widgets/Hit_Point_Tracker'
import Random_Dog from './widgets/Random_Dog'


const Main = () => {
    return (

        <Grid container>
            <Grid xs={8} spacing={0}>
                <Stack direction="row">
                    <Ability_Score_Card mode="Strength"></Ability_Score_Card>
                    <Ability_Score_Card mode="Dexterity"></Ability_Score_Card>
                    <Ability_Score_Card mode="Constitution"></Ability_Score_Card>
                    <Ability_Score_Card mode="Wisdom"></Ability_Score_Card>
                    <Ability_Score_Card mode="Intelligence"></Ability_Score_Card>
                    <Ability_Score_Card mode="Charisma"></Ability_Score_Card>
                </Stack>
            </Grid>

            <Grid xs={4} spacing={0}>
                <Hit_Point_Tracker></Hit_Point_Tracker>

            </Grid>

            {/* <Grid xs={4} spacing={0}>
                <Random_Dog></Random_Dog>
            </Grid> */}

        </Grid>

    )
}

export default Main