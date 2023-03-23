export const UPDATE_HIGHLIGHTED_SPELL = "UPDATE_HIGHLIGHTED_SPELL";
export const UPDATE_CONTEXT_TOGGLE = "UPDATE_CONTEXT_TOGGLE";
export const UPDATE_SIDEBAR_EXPAND = "UPDATE_SIDEBAR_EXPAND";
export const UPDATE_SETTINGS_TOGGLE = "UPDATE_SETTINGS_TOGGLE";
export const UPDATE_DARK_MODE = "UPDATE_DARK_MODE";


export function updateHighlightedSpell(newSpell) {
    return {
        type: UPDATE_HIGHLIGHTED_SPELL,
        payload: {
            highlighted_spell: newSpell
        }
    }
}

export function updateContextToggle(newContextToggle) {
    return {
        type: UPDATE_CONTEXT_TOGGLE,
        payload: {
            context_toggle: newContextToggle
        }
    }
}

export function updateSidebarExpand(newSidebarExpand) {
    return {
        type: UPDATE_SIDEBAR_EXPAND,
        payload: {
            sidebar_expand: newSidebarExpand
        }
    }
}

export function updateSettingsToggle(newSettingsToggle) {
    return {
        type: UPDATE_SETTINGS_TOGGLE,
        payload: {
            settings_toggle: newSettingsToggle
        }
    }
}

export function updateDarkMode(newSettingsToggle) {
    return {
        type: UPDATE_DARK_MODE,
        payload: {
            dark_mode: newSettingsToggle
        }
    }
}

