const fetch_detailed_spell = (highlighted_spell_url) => {
    const base_url = "https://www.dnd5eapi.co";
    const spell_url = base_url + highlighted_spell_url;

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
            let err = ""
            return { data, err};
            // dispatch({ type: UPDATE_HIGHLIGHTED_SPELL, payload: data })
            // set_error("");
        })

        .catch((err) => {
            return err;
        })
}

export default fetch_detailed_spell