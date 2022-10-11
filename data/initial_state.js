const initalState = {
    app: {
        settings_toggle: false,
        settings: {
            dark_mode: false,
        },
        highlighted_spell: "",
        endpoints: {
            srd: ""
        },

    },
    data: {
        spells: [],
        rules: {
            abilityScores: [],
            conditions: [],
            damageTypes: [],
            spellComponents: [],
            magicSchools: [],
            levels: [],
            sources: [],  
        },

    }
};

export default initalState