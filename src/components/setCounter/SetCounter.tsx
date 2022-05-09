import React, {Dispatch} from 'react';
import {ActionType, setEditModeCounterAC} from '../../bll/counter-reducer';
import Button from '../Button';
import SetScoreBoard from './SetScoreBoard';

type SetCounterType = {
    countSetClick: () => void,
    maxValue: number,
    minValue: number,
    setMaxValue: Dispatch<ActionType>,
    setMinValue: Dispatch<ActionType>,
    setEditMode: (editMode: boolean) => void,
    setEditModeCounter: Dispatch<ActionType>,
    error: string
}

const SetCounter: React.FC<SetCounterType> = (props) => {
    const onSetClickHandler = () => {
        props.setEditMode(false);
        props.countSetClick();
        props.setEditModeCounter(setEditModeCounterAC(false));
    };

    return (
        <div className={'setMain'}>
            <SetScoreBoard
                minValue={props.minValue}
                setMinValue={props.setMinValue}
                setMaxValue={props.setMaxValue}
                maxValue={props.maxValue}
                setEditMode={props.setEditMode}
                error={props.error}
            />
            <div className={'buttons'}>
                <Button
                    name={'Set'}
                    onClickHandler={onSetClickHandler}
                    disabled={
                        props.maxValue < 0
                        || props.minValue < 0
                        || props.maxValue === props.minValue
                    }
                />
            </div>
        </div>
    );
};

export default SetCounter;

