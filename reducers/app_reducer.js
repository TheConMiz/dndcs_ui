import {
    UPDATE_HIGHLIGHTED_SPELL,
    // UPDATE_CLASSES,
    // UPDATE_STATE_SETTINGS_MENU
} from './../actions/app_actions';

export default function app_reducer(state = [], action) {

    switch (action.type) {
        case UPDATE_HIGHLIGHTED_SPELL: 
            return Object.assign({}, state, {
                
                highlighted_spell: action.payload
                
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