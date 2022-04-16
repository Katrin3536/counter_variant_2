import React from 'react';

type ScoreBoardType = {
    count: number
    minValue: number,
    maxValue: number,
    error: string
    editMode:boolean
}

const ScoreBoard = (props:ScoreBoardType) => {
    return ( props.error
            ? <span className={'error'}>{props.error}</span>
            : props.editMode
                ? <div className={'enter_value'}>Enter values and press 'set'</div>
                :<div className={(props.count === props.maxValue)
                ? 'redCount'
                : 'count'}>
                {props.count}
            </div>
    );
};

export default ScoreBoard;