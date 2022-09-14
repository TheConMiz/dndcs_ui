import {
    UPDATE_SPELLS,
    // UPDATE_CLASSES,
    // UPDATE_STATE_SETTINGS_MENU
} from './../actions/data_actions';

export default function data_reducer(state = [], action) {

    switch (action.type) {
        case UPDATE_SPELLS: 

            return Object.assign({}, state, {
                spells: action.payload
            });
        
        // case UPDATE_CLASSES:
        //     return Object.assign({}, state, {
        //         classes: action.payload
        //     });
        
        // case UPDATE_STATE_SETTINGS_MENU:
        //     return Object.assign({}, state, {
        //         settingsOpen: action.payload
        //     });
        
        default:
            return state
    }
}