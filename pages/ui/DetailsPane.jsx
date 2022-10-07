import { Paper, Tabs, Tab, TabList, Typography, Skeleton } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { UPDATE_HIGHLIGHTED_SPELL } from './../../actions/app_actions';
import fetch_detailed_spell from './../../functions/fetch_data';

const DetailsPane = () => {

    const highlighted_spell = useSelector(state => state.app.highlighted_spell);

    const [error, set_error] = useState("");
    const dispatch = useDispatch();


    // const fetch_detailed_spell = () => {
    //     const base_url = "https://www.dnd5eapi.co";
    //     const spell_url = base_url + highlighted_spell;

    //     const params = {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type": "application/json"
    //         }
    //     }
    
    //     fetch(spell_url, params)
            
    //         .then(response => {
    //             if (!response.ok) {
    //                 set_error(response.status);
    //             }
    //             return response.json(); 
    //         })
    
    //         .then(data => {
    //             dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: data })
    //             set_error("");
    //         })

    //         .catch((err) => {
    //             set_error(err.message);
    //         })
    // }

    // useEffect(() => {
    //     fetch_detailed_spell();
    // }, [highlighted_spell]);

    return (    
        <Fragment>
            <Paper
                variant='outlined'
                elevation={0}
                sx={{
                    width: "45vw",
                    height: "50vh",
                    overflow: "scroll"
                }}

            >
                {
                    highlighted_spell.length === 0 ?
                        <Fragment>
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="rectangular" width={210} height={60} />
                            <Skeleton variant="rounded" width={210} height={60} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Fragment>:
                        
                        <Fragment>
                            <Typography variant='h5'>
                                {highlighted_spell.name}
                            </Typography>

                            <Typography variant='h6'>
                                {"Range: " + highlighted_spell.range}
                            </Typography>

                            <Typography>
                                {highlighted_spell.ritual}
                            </Typography>

                            <Typography>
                                {"Duration: " + highlighted_spell.duration}
                            </Typography>
                            
                            <Typography>
                                {"Description: " + highlighted_spell.desc}
                            </Typography>
                        
                            <Typography>
                                {"Level: " + highlighted_spell.level}
                            </Typography>

                            <Typography>
                                {/* {highlighted_spell} */}
                            </Typography>
                        </Fragment>
                }

                
            </Paper>
        </Fragment>
    )
}

export default DetailsPane