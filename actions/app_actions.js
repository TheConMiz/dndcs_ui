export const UPDATE_HIGHLIGHTED_SPELL = "UPDATE_HIGHLIGHTED_SPELL";
// export const UPDATE_CLASSES = "UPDATE_CLASSES";
// export const UPDATE_STATE_SETTINGS_MENU = "UPDATE_STATE_SETTINGS_MENU";


export function updateHighlightedSpell(newSpell) {
    return {
        type: UPDATE_HIGHLIGHTED_SPELL,
        payload: {
            highlighted_spell: newSpell
        }
    }
}