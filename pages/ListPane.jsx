import React, { Fragment } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableBar,
    Skeleton,
    Button
} from '@mui/material'
 
import { useState, useEffect } from 'react'

const ListPane = () => {

    const [spell_list, set_spell_list] = useState([]);
    const [error, set_error] = useState("");

    const Filled_Row = (data) => {
        console.log(data)
        return (
            <TableRow>
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
    // Call the DND5E API to obtain list of spells.
    const fetchSpells = () => {
        const base_url = "https://www.dnd5eapi.co";
        const params = {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        }
    
        let spell_url = base_url + "/api/spells"
    
        fetch(spell_url, params)
        .then(response => {
            if (!response.ok) {
                set_error(response.status);
            }
            return response.json(); 
        })
    
        .then(data => {
            set_spell_list(data.results)
            set_error("");
        })
        .catch((err) => {
            set_error(err.message)
            set_spell_list([])
        })
    }
    

    useEffect(() => {
        fetchSpells()
    }, []);


    return (
        <Fragment>
            <Button
                onClick={() => {
                    console.log(spell_list)
                }}
            >
                API Test
            </Button>
            <Paper
                sx={{
                    width: "40vw",
                    height: "95vh"
                }}
            >
                <Table>
                    <TableHead>
                        
                    </TableHead>

                    <TableBody>

                        {
                            spell_list.length === 0 ? <Loading_Row /> :
                            
                                spell_list.map((spell) => {
                                    return (
                                        <Filled_Row
                                            data={spell}
                                            key={spell.index}
                                        />
                                    // console.log(spell.name)
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