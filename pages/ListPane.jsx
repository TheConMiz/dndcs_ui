import React, { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { UPDATE_SPELLS } from './../actions/data_actions';
import { UPDATE_HIGHLIGHTED_SPELL } from './../actions/app_actions';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Skeleton,
    Button
} from '@mui/material'
import { useState, useEffect } from 'react'


const ListPane = () => {
    // State components
    const [selected_spell, set_selected_spell] = useState("");
    const [selected_spell_url, set_selected_spell_url] = useState("");
    const [error, set_error] = useState("");
    
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    const highlighted_spell = useSelector(state => state.app.highlighted_spell);

    // Bind useDispatch function to a variable
    const dispatch = useDispatch();

    // Component defining a filled data row.
    const Filled_Row = (data, key) => {
        return (
            <TableRow
                hover
                onClick={() => {
                    let extracted_url = data.data.url.toString()
                    dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: extracted_url })


                }}
            >
                <TableCell>
                    {
                        data.data.name.toString()
                    }
                </TableCell>
                <TableCell>
                    {
                        data.data.url.toString()
                    }
                </TableCell>
            </TableRow>
        )
    }
    // Component defining a placeholder row.
    const Loading_Row = () => {
        return (
            <TableRow>
                <TableCell>
                    <Skeleton
                        variant='wave'
                    />
                </TableCell>
            </TableRow>
    
        )
    }

    // Interface function for re-using fetch_spells for both spell list and specific spells. 
    const prepare_fetch_spell = () => {
        const base_url = "https://www.dnd5eapi.co";
        let spell_url = "";

        // if (selected_spell_url.length === 0) {
            spell_url = base_url + "/api/spells";
        // }

        // else {
            // spell_url = base_url + selected_spell_url
        // }

        return spell_url;
    }

    // Function for calling the DND5E API to obtain a list of spells or individual spell data.
    const fetch_spells = () => {
        const spell_url = prepare_fetch_spell();

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
                dispatch({ type: UPDATE_SPELLS, payload: data.results })

                // }
                set_error("");
            })

            .catch((err) => {
                set_error(err.message);
                // set_spell_list([]);
            })
    }
    
    useEffect(() => {
        fetch_spells();
    }, []);


    return (
        <Fragment>

            <Paper
                sx={{
                    width: "40vw",
                    height: "95vh",
                    overflow: "scroll"
                }}
            >

                <Table>
                    {/* <TableHead>
                        
                    </TableHead> */}

                    <TableBody>

                        {
                            spell_list.length === 0 ? <Loading_Row /> :
                            
                                spell_list.map((spell) => {
                                    return (
                                        <Filled_Row
                                            data={spell}
                                            key={spell.index}
                                        />
                                    )

                                })
                        }

                    </TableBody>

                </Table>
                
            </Paper>



            {/* <TableContainer component={Paper}>
                <Table
                    sx={{
                        width: "40vw",
                        height: "95vh"
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Test
                            </TableCell>

                            <TableCell>
                                Test 2
                            </TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Item 1
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Item 1
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                Item 1
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>

            </TableContainer> */}

        </Fragment>
    )
}

export default ListPane