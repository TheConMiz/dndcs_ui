import React, { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux"
// import { UPDATE_SPELLS } from './../../actions/data_actions';
// import { UPDATE_HIGHLIGHTED_SPELL } from './../../actions/app_actions';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Skeleton,
    Button,
    IconButton,
    Checkbox
} from '@mui/material'
import { useState, useEffect } from 'react'


const ListPane = () => {
    // // Base 5E Endpoint
    // const base_url = "https://www.dnd5eapi.co";
    // // Base API parameters
    // const params = {
    //     "method": "GET",
    //     "headers": {
    //         "Content-Type": "application/json"
    //     }
    // }
    // // State components
    // const [detailed_spell_urls, set_detailed_spell_urls] = useState([]);
    // const [error, set_error] = useState("");
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    // // Bind useDispatch function to a variable
    // const dispatch = useDispatch();
    // // Component defining a filled data row.
    const Filled_Row = (data, key) => {
        return (
            <TableRow
                hover
            >
                <TableCell>
                    <Checkbox/>
                </TableCell>
                <TableCell>
                    {
                        data.data.name.toString()
                    }
                </TableCell>
                <TableCell>
                    <IconButton
                        size="medium"
                        // onClick={() => {
                        //     let extracted_url = data.data.url.toString()
                        //     dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: extracted_url })
                        // }}
                    >
                        <InfoRoundedIcon/>
                    </IconButton>
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
                <TableCell>
                    <Skeleton
                        variant='wave'
                    />
                </TableCell>
                <TableCell>
                    <Skeleton
                        variant='wave'
                    />
                </TableCell>
            </TableRow>
        )
    }
    // // Function for calling the DND5E API to obtain a list of spells or individual spell data.
    // const fetch_spells = () => {
    //     let spell_url = base_url + "/api/spells";

    //     let temp_urls = [];
    //     // Make an API call to get the list of spells.
    //     fetch(spell_url, params)
            
    //         .then(response => {
    //             if (!response.ok) {
    //                 set_error(response.status);
    //             }
    //             return response.json(); 
    //         })
    //         // With the list of spells, 
    //         .then(data => {
    //             data.results.map((item) => {
    //                 temp_urls.push(item.url)
    //             })
    //             // dispatch({ type: UPDATE_SPELLS, payload: data.results })
    //             set_detailed_spell_urls(temp_urls)
    //         })

    //         .catch((err) => {
    //             set_error(err.message);
    //         })
    // }
    
    // // Asynchronous data retrieval - get detailed spell data.
    // const fetch_detailed_spells = () => {
    //     console.log("fetching detailed spells");

    //     const promises = detailed_spell_urls.map((url) => {
    //         let spell_url = base_url + url

    //         return fetch(spell_url, params)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     set_error(response.status);
    //                 }
    //                 counter += 1;
    //                 return response.json(); 
    //             })
    //             .then((data) => {
    //                 set_error("");
    //                 return data;

    //             })
    //             .catch((err) => {
    //                 set_error(err.message);
    //             })
    //     })
        
    //     Promise.all(promises).then(results => {
    //         const spells = results.map(result => {
    //             console.log(result)
    //             return result
    //         });
    //         // console.log(spells);
    //         dispatch({ type: UPDATE_SPELLS, payload: spells })
    //     })
        
    // }

    // useEffect(() => {
    //     fetch_spells();
    //     console.log("run once only")
    // }, []);

    return (
        <Fragment>

            <Paper
                sx={{
                    width: "90%",
                    height: "50%",
                    overflow: "scroll",
                }}
            >
                {/* <Button
                    variant='outlined'
                    onClick={fetch_detailed_spells}
                >
                    Test
                </Button> */}

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Prepared</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Details</TableCell>
                            {/* <TableCell>Details</TableCell> */}
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {
                            spell_list.length === 0 ? <Loading_Row /> :
                            
                                spell_list.map((spell) => {
                                    // console.log(spell)
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