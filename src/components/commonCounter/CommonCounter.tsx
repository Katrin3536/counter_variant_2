import React, {Dispatch} from 'react';
import Button from '../Button';
import ScoreBoard from './ScoreBoard';
import {ActionType, setEditModeCounterAC} from '../../bll/counter-reducer';

type CommonCounterType = {
    count: number
    maxValue: number,
    minValue: number,
    countIncrementClick: () => void,
    countResetClick: () => void,
    error: string,
    editMode: boolean,
    countSetClick: () => void,
    setEditMode: (editMode: boolean) => void,
    setEditModeCounter: Dispatch<ActionType>
}

const CommonCounter: React.FC<CommonCounterType> = (props) => {

    const onSetClickHandlerCounter = () => {
        props.setEditMode(false);
        props.countSetClick();
        props.setEditModeCounter(setEditModeCounterAC(true));
    };

    return (
        <div className={'commonMain'}>
            <ScoreBoard
                count={props.count}
                minValue={props.minValue}
                maxValue={props.maxValue}
                error={props.error}
                editMode={props.editMode}
            />

            <div className={'buttons'}>
                <Button name={'Inc'} onClickHandler={props.countIncrementClick}
                        disabled={props.count === props.maxValue || props.maxValue === props.minValue}/>
                <Button name={'Reset'} onClickHandler={props.countResetClick}
                        disabled={props.maxValue === props.minValue}/>
                <Button
                    name={'Set'}
                    onClickHandler={onSetClickHandlerCounter}
                    disabled={props.maxValue < 0 || props.minValue < 0 || props.maxValue === props.minValue}/>
            </div>
        </div>
    );
};

export default CommonCounter;