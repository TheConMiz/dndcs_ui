import { Paper, Tabs, Tab, TabList, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { UPDATE_HIGHLIGHTED_SPELL } from './../actions/app_actions';


const DetailsPane = () => {

    const highlighted_spell = useSelector(state => state.app.highlighted_spell);

    const [error, set_error] = useState("");
    const dispatch = useDispatch();


    const fetch_detailed_spell = () => {
        const base_url = "https://www.dnd5eapi.co";
        const spell_url = base_url + highlighted_spell;

        const params = {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        }
    
        fetch(spell_url, params)
            
            .then(response => {
                if (!response.ok) {
                    set_error(response.status);
                }
                return response.json(); 
            })
    
            .then(data => {
                // if (selected_spell_url.length !== 0) {
                    // console.log(data);
                    // set_selected_spell(data);
                // }

                // else{
                // set_spell_list(data.results);
                // dispatch({ type: UPDATE_SPELLS, payload: data.results })
                // console.log(data)
                dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: data })

                // }
                set_error("");
            })

            .catch((err) => {
                set_error(err.message);
                // set_spell_list([]);
            })
    }

    useEffect(() => {
        fetch_detailed_spell();
    }, [highlighted_spell]);

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
                <Typography>
                    {highlighted_spell.name}
                </Typography>

                <Typography>
                    {highlighted_spell.range}
                </Typography>

                <Typography>
                    {highlighted_spell.ritual}
                </Typography>

                <Typography>
                    {highlighted_spell.duration}
                </Typography>
                
                <Typography>
                    {highlighted_spell.desc}
                </Typography>
              
                <Typography>
                    {highlighted_spell.level}
                </Typography>

            </Paper>
        </Fragment>
    )
}

export default DetailsPane