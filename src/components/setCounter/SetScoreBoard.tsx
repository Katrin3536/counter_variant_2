import React from 'react';
import Input from '../Input';

type SetScoreBoardType = {
    maxValue: number,
    minValue: number,
    setMaxValue: (maxValue: number) => void,
    setMinValue: (minValue: number) => void,
    setEditMode: (editMode: boolean) => void,
    error: string
}

const SetScoreBoard: React.FC<SetScoreBoardType> = (props) => {
    const setNewMinValue = (minValue: number) => {
        props.setEditMode(true);
        props.setMinValue(minValue);
    };
    const setNewMaxValue = (maxValue: number) => {
        props.setEditMode(true);
        props.setMaxValue(maxValue);
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