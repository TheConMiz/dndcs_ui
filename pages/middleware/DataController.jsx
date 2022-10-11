import React, {useState, useEffect} from 'react'
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
    // Obtain list of spells from redux state.
    const spell_list = useSelector(state => state.data.spells);
    // Bind useDispatch function to a variable
    const dispatch = useDispatch();
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
            // With the list of spells, 
            .then(data => {
                data.results.map((item) => {
                    let new_item = { id: item.index, ...item }
                    modified_list.push(new_item);
                })
                dispatch({ type: UPDATE_SPELLS, payload: modified_list })
            })
            .then(() => {
                fetch_detailed_spells();
            })
            .catch((err) => {
                set_error(err.message);
            })        
    }
    // Asynchronous data retrieval - get detailed spell data.
    const fetch_detailed_spells = () => {
        console.log("Fetching detailed spell info.")
        // Define one Promise for each spell in the list.
        const promises = detailed_spell_urls.map((url) => {
            let spell_url = base_url + url
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
                    return result
                });
                // dispatch({ type: UPDATE_SPELLS, payload: spells })
            })
            .then(() => {
                console.log("Done fetching.")                
            })
    }

    useEffect(() => {
        fetch_spells();
    }, []);

    return (
        <div>DataController</div>
    )
}

export default DataController