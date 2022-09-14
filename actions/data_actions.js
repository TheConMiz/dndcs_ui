export const UPDATE_SPELLS = "UPDATE_SPELLS";
// export const UPDATE_CLASSES = "UPDATE_CLASSES";
// export const UPDATE_STATE_SETTINGS_MENU = "UPDATE_STATE_SETTINGS_MENU";


export function updateSpells(newSpells) {
    return {
        type: UPDATE_SPELLS,
        payload: {
            spells: newSpells
        }
    }
}