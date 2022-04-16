import React, {ChangeEvent} from 'react';

type InputType = {
    title: string,
    newValue: number,
    setNewValue:(newValue:number)=>void,
    fieldName: string
    error:string
}

const Input:React.FC<InputType> = (props) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        props.setNewValue(newValue)
        localStorage.setItem(props.fieldName, JSON.stringify(newValue))
    };

    return (
        <div className={"input-wrapper"}>
            <label className={"label"}>{props.title}</label>
            <input className={props.error?"inputError":"input"} type="number" onChange={onChangeHandler} value={props.newValue}/>
        </div>
    );
};

export default Input;
