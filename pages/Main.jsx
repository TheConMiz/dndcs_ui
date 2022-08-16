import React from 'react'
import Ability_Score_Card from './widgets/Ability_Score_Card'
import Hit_Point_Tracker from './widgets/Hit_Point_Tracker'

const Main = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Ability_Score_Card mode="Strength"></Ability_Score_Card>
            <Ability_Score_Card mode="Dexterity"></Ability_Score_Card>
            <Ability_Score_Card mode="Constitution"></Ability_Score_Card>
            <Ability_Score_Card mode="Wisdom"></Ability_Score_Card>
            <Ability_Score_Card mode="Intelligence"></Ability_Score_Card>
            <Ability_Score_Card mode="Charisma"></Ability_Score_Card>

            <Hit_Point_Tracker></Hit_Point_Tracker>
        </div>


    )
}

export default Main