import React, {useState, useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { UPDATE_SPELLS } from './../../actions/data_actions';
import { UPDATE_HIGHLIGHTED_SPELL } from './../../actions/app_actions';

const DataController = () => {
    // Base 5E Endpoint
    const base_url = "https://www.dnd5eapi.co";
    // Base API parameters
    const params = {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    }
    // State components
    const [error, set_error] = useState("");
    // Bind useDispatch function to a variable
    const dispatch = useDispatch();
    // Asynchronous data retrieval - get detailed spell data.
    const fetch_detailed_spells = (detailed_spell_list) => {
        // Define one Promise for each spell in the list.
        // console.log(detailed_spell_list)
        const promises = detailed_spell_list.map((spell) => {
            let spell_url = base_url + spell.url
            // Fetch each Promise variable one by one.
            return fetch(spell_url, params)
                .then(response => {
                    if (!response.ok) {
                        set_error(response.status);
                    }
                    return response.json(); 
                })
                .then((data) => {
                    set_error("");
                    return data;
                })
                .catch((err) => {
                    set_error(err.message);
                })
        })
        // Obtain the data and map it to the data Store.
        Promise.all(promises)
            .then(results => {
                const spells = results.map(result => {
                    let modded_result = { id: result._id, ...result }
                    return modded_result
                });
                // console.log(spells)
                dispatch({ type: UPDATE_SPELLS, payload: spells })
            })
    }
    // Function for calling the DND5E API to obtain a list of spells or individual spell data.
    const fetch_spells = () => {
        let spell_url = base_url + "/api/spells";
        // Define an array for storing the modified list of spell URLs
        let modified_list = [];
        // Make an API call to get the list of spells.
        fetch(spell_url, params)
            .then(response => {
                if (!response.ok) {
                    set_error(response.status);
                }
                return response.json(); 
            })
            //! Modify the spell to include an ID field, so that it can be used with the DataGrid.
            .then(data => {
                data.results.map((item) => {
                    modified_list.push(item);
                })
            })
            .then(() => {
                // console.log(modified_list)
                fetch_detailed_spells(modified_list);
            })
            .catch((err) => {
                set_error(err.message);
            })
    }

    useEffect(() => {
        fetch_spells();
    }, []);

    return (
        <Fragment/>
    )
}

export default DataController