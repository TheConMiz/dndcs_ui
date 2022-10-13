export const UPDATE_HIGHLIGHTED_SPELL = "UPDATE_HIGHLIGHTED_SPELL";
export const UPDATE_CONTEXT_TOGGLE = "UPDATE_CONTEXT_TOGGLE";

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