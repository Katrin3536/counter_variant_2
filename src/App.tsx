import React, {useEffect} from 'react';
import './App.css';
import SetCounter from './components/setCounter/SetCounter';
import CommonCounter from './components/commonCounter/CommonCounter';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {InitialStateType, setCountAC, setErrorAC} from './bll/counter-reducer';

function App() {
    const count = useSelector<AppStateType, InitialStateType>(state => state.count);
    const minValue = useSelector<AppStateType, InitialStateType>(state => state.minValue);
    const maxValue = useSelector<AppStateType, InitialStateType>(state => state.maxValue);
    const error = useSelector<AppStateType, InitialStateType>(state => state.error);
    const editMode = useSelector<AppStateType, InitialStateType>(state => state.editMode);
    const editModeCounter = useSelector<AppStateType, InitialStateType>(state => state.editModeCounter);
    const dispatch = useDispatch();

    const checkError2 = () => {
        if (minValue.minValue >= maxValue.maxValue || minValue.minValue < 0 || minValue.maxValue < 0) {
            dispatch(setErrorAC('Incorrect value!'));
        } else {
            dispatch(setErrorAC(''));
        }
    };

    useEffect(() => {
            if (editMode.editMode) {
                checkError2();
            }
        }, [minValue.minValue, maxValue.maxValue, minValue.editMode]
    );

    const countIncrementClick = () => {
        dispatch(setCountAC(count.count + 1));
    };

    const countResetClick = () => {
        dispatch(setCountAC(minValue.minValue));
    };

    const onSetClick = () => {
        dispatch(setCountAC(minValue.minValue));
    };

    return (
        <div className="wrapper">
            {editModeCounter.editModeCounter
                ? <SetCounter
                    countSetClick={onSetClick}
                    minValue={minValue.minValue}
                    setMinValue={dispatch}
                    setMaxValue={dispatch}
                    maxValue={maxValue.maxValue}
                    setEditMode={dispatch}
                    error={error.error}
                    setEditModeCounter={dispatch}
                />
                : <CommonCounter
                    countSetClick={onSetClick}
                    count={count.count}
                    minValue={minValue.minValue}
                    maxValue={maxValue.maxValue}
                    countIncrementClick={countIncrementClick}
                    countResetClick={countResetClick}
                    error={error.error}
                    editMode={editMode.editMode}
                    setEditMode={dispatch}
                    setEditModeCounter={dispatch}
                />
            }
        </div>
    );
}

export default App;
