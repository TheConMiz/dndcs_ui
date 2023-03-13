const initalState = {
    app: {
        settings: {
            settings_toggle: false,
            context_toggle: false,
            dark_mode: false,
            sidebar_expand: false,
            drawer_width: 200,
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