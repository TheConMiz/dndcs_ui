import {
    UPDATE_HIGHLIGHTED_SPELL,
    UPDATE_CONTEXT_TOGGLE,
    UPDATE_SIDEBAR_EXPAND,
    UPDATE_SETTINGS_TOGGLE
} from './../actions/app_actions';

export default function app_reducer(state = [], action) {

    switch (action.type) {
        case UPDATE_HIGHLIGHTED_SPELL:
            return Object.assign({}, state, {
                highlighted_spell: action.payload
            });
        
        case UPDATE_CONTEXT_TOGGLE:
            return Object.assign({}, state, {
                settings: Object.assign({}, state.settings, {
                    context_toggle: action.payload,
                })
            });
        
        case UPDATE_SIDEBAR_EXPAND:
            return Object.assign({}, state, {
                settings: Object.assign({}, state.settings, {
                    sidebar_expand: action.payload,
                })
            });
        
        case UPDATE_SETTINGS_TOGGLE:
            return Object.assign({}, state, {
                settings: Object.assign({}, state.settings, {
                    settings_toggle: action.payload,
                })
            });
                
        default:
            return state
    }
}