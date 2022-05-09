import React, {Dispatch} from 'react';
import Input from '../Input';
import {ActionType, maxValueAC, minValueAC, setEditModeAC} from '../../bll/counter-reducer';

type SetScoreBoardType = {
    maxValue: number,
    minValue: number,
    setMaxValue: Dispatch<ActionType>,
    setMinValue: Dispatch<ActionType>,
    setEditMode: Dispatch<ActionType>,
    error: string
}

const SetScoreBoard: React.FC<SetScoreBoardType> = (props) => {
    const setNewMinValue = (minValue: number) => {
        props.setEditMode(setEditModeAC(true));
        props.setMinValue(minValueAC(minValue));
    };
    const setNewMaxValue = (maxValue: number) => {
        props.setEditMode(setEditModeAC(true));
        props.setMaxValue(maxValueAC(maxValue));
    };

    return (
        <div className={'inputs'}>
            <Input
                title={'max value:'}
                setNewValue={setNewMaxValue}
                newValue={props.maxValue}
                fieldName={'maxValue'}
                error={props.error}
            />
            <Input
                title={'start value:'}
                newValue={props.minValue}
                setNewValue={setNewMinValue}
                fieldName={'minValue'}
                error={props.error}
            />
        </div>
    );
};

export default SetScoreBoard;