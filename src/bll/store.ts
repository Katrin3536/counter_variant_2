import {combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {counterReducer} from './counter-reducer';

const rootReducer = combineReducers({
    count: counterReducer,
    minValue: counterReducer,
    maxValue: counterReducer,
    error: counterReducer,
    editMode: counterReducer,
    editModeCounter: counterReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);