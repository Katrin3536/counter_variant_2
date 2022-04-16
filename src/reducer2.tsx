export type StateType = {
    count: number,
    minValue: number,
    maxValue: number,
    error: string,
    editMode: boolean,
    editModeCounter: boolean
}

type ValuesType = string | number | boolean

export type ActionType = {
    type: string,
    value: ValuesType
}

export const SET_ERROR = 'SET-ERROR';
export const SET_COUNT = 'SET-COUNT';
export const SET_MIN_VALUE = 'SET-MIN-VALUE';
export const SET_MAX_VALUE = 'SET-MAX-VALUE';
export const SET_EDIT_MODE = 'SET-EDIT-MODE';
export const SET_EDIT_MODE_COUNTER = 'SET-EDIT-MODE_COUNTER'

export const reducer2 = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.value as string};
        case SET_COUNT:
            return {...state, count: action.value as number};
        case SET_MIN_VALUE:
            return {...state, minValue: action.value as number};
        case SET_MAX_VALUE:
            return {...state, maxValue: action.value as number};
        case SET_EDIT_MODE:
            return {...state, editMode: action.value as boolean};
        case SET_EDIT_MODE_COUNTER:
            return {...state, editModeCounter: action.value as boolean};
        default:
            return state;
    }
};
