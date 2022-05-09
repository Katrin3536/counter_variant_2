export const initialState = {
    count: +(localStorage.getItem('minValue') || ''),
    minValue: +(localStorage.getItem('minValue') || ''),
    maxValue: +(localStorage.getItem('maxValue') || ''),
    error: '',
    editMode: false,
    editModeCounter: false,
}

export type InitialStateType = typeof initialState
export type ActionType = SetCountType | MinValueType | MaxValueType | SetErrorType | SetEditModeType | SetEditModeCounterType

export const counterReducer = (state:InitialStateType=initialState,action: ActionType):InitialStateType => {
    switch (action.type) {
        case 'SET-COUNT': {
            return {...state, count: action.value};
        }
        case 'MIN-VALUE': {
            return {...state, minValue: action.value};
        }
        case 'MAX-VALUE': {
            return {...state, maxValue: action.value};
        }
        case 'SET-ERROR': {
            return {...state, error: action.value};
        }
        case 'SET-EDIT-MODE': {
            return {...state, editMode: action.value};
        }
        case 'SET-EDIT-MODE-COUNTER': {
            return {...state, editModeCounter: action.value};
        }

        default:
            return state
    }
}

export type SetCountType = ReturnType<typeof setCountAC>

export const setCountAC = (value: number) => {
    return {
        type: 'SET-COUNT',
        value
    } as const;
};

export type MinValueType = ReturnType<typeof minValueAC>

export const minValueAC = (value: number) => {
    return {
        type: 'MIN-VALUE',
        value
    } as const;
};

export type MaxValueType = ReturnType<typeof maxValueAC>

export const maxValueAC = (value: number) => {
    return {
        type: 'MAX-VALUE',
        value
    } as const;
};

export type SetErrorType = ReturnType<typeof setErrorAC>

export const setErrorAC = (value: string) => {
    return {
        type: 'SET-ERROR',
        value
    } as const;
};

export type SetEditModeType = ReturnType<typeof setEditModeAC>

export const setEditModeAC = (value: boolean) => {
    return {
        type: 'SET-EDIT-MODE',
        value
    } as const;
};

export type SetEditModeCounterType = ReturnType<typeof setEditModeCounterAC>

export const setEditModeCounterAC = (value: boolean) => {
    return {
        type: 'SET-EDIT-MODE-COUNTER',
        value
    } as const;
};

