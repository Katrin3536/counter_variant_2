import React, {useEffect, useReducer} from 'react';
import './App.css';
import SetCounter from './components/setCounter/SetCounter';
import CommonCounter from './components/commonCounter/CommonCounter';
import {
    reducer2,
    SET_EDIT_MODE_COUNTER,
    SET_COUNT,
    SET_EDIT_MODE,
    SET_ERROR,
    SET_MAX_VALUE,
    SET_MIN_VALUE
} from './reducer2';


function App() {
    const minInitialValue = localStorage.getItem('minValue') || '';
    const maxInitialValue = localStorage.getItem('maxValue') || '';
    // let [count, setCount] = useState<number>(+minInitialValue);
    // let [minValue, setMinValue] = useState<number>(+minInitialValue);
    // let [maxValue, setMaxValue] = useState<number>(+maxInitialValue);
    // let [error, setError] = useState<string>('');
    // let [editMode, setEditMode] = useState<boolean>(false);
    // let [editModeCounter, setEditModeCounter] = useState<boolean>(false);
    const [values, dispatch] = useReducer(reducer2, {
        count: +minInitialValue,
        minValue: +minInitialValue,
        maxValue: +maxInitialValue,
        error: '',
        editMode: false,
        editModeCounter: false
    });

    const checkError2 = () => {
        if (values.minValue >= values.maxValue || values.minValue < 0 || values.maxValue < 0) {
            dispatch({type: SET_ERROR, value: 'Incorrect value!'});
        } else {
            dispatch({type: SET_ERROR, value: ''});
        }
    };

    useEffect(() => {
            if (values.editMode) {
                checkError2();
            }
        }, [values.minValue, values.maxValue, values.editMode]
    );

    const countIncrementClick = () => {
        dispatch({type: SET_COUNT, value: values.count + 1});
    };

    const countResetClick = () => {
        dispatch({type: SET_COUNT, value: values.minValue});
    };

    const onSetClick = () => {
        dispatch({type: SET_COUNT, value: values.minValue});
    };

    const setMinValueAC =(minValue:number) => dispatch({type: SET_MIN_VALUE, value: minValue})
    const setMaxValueAC =(maxValue:number) => dispatch({type: SET_MAX_VALUE, value: maxValue})
    const setEditModeAC =(editMode:boolean) => dispatch({type: SET_EDIT_MODE, value: editMode})
    const setEditModeCounterAC =(editModeCounter:boolean) => dispatch({
        type: SET_EDIT_MODE_COUNTER,
        value: editModeCounter
    })

    return (
        <div className="wrapper">
            {values.editModeCounter
                ? <SetCounter
                    countSetClick={onSetClick}
                    minValue={values.minValue}
                    setMinValue={setMinValueAC}
                    setMaxValue={setMaxValueAC}
                    maxValue={values.maxValue}
                    setEditMode={setEditModeAC}
                    error={values.error}
                    setEditModeCounter={setEditModeCounterAC}
                />
                : <CommonCounter
                    countSetClick={onSetClick}
                    count={values.count}
                    minValue={values.minValue}
                    maxValue={values.maxValue}
                    countIncrementClick={countIncrementClick}
                    countResetClick={countResetClick}
                    error={values.error}
                    editMode={values.editMode}
                    setEditMode={setEditModeAC}
                    setEditModeCounter={setEditModeCounterAC}
                />
            }
        </div>
    );
}

export default App;
