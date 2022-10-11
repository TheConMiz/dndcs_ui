import React from 'react'
import { Grid, Stack } from '@mui/material'
// Self-generated components
import Ability_Score_Card from './widgets/Ability_Score_Card'
import Hit_Point_Tracker from './widgets/Hit_Point_Tracker'
import Random_Dog from './widgets/Random_Dog'
import Senses_Card from './widgets/Senses_Card'
import Saving_Throw_Card from './widgets/Saving_Throw_Card'
import Proficiency_Card from './widgets/Proficiency_Card'
import Tags from './Tags'

const CompleteView = () => {
    return (
        <Grid container>
            <Tags/>
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

            <Grid xs={4}>

                <Stack direction="column" spacing={2}>
                    <Senses_Card/>
                    <Saving_Throw_Card/>
                </Stack>
                

            </Grid>

            <Grid xs={4}>
                <Proficiency_Card/>
            </Grid>

            <Grid xs={4} spacing={0}>
                <Random_Dog></Random_Dog>
            </Grid>

        </Grid>
    );
}