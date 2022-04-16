import React from 'react';

type ButtonType = {
    name: string,
    onClickHandler:() => void
    disabled?: boolean
}

const Button: React.FC<ButtonType> = (props) => {

    const callback = ()=> {
        props.onClickHandler()
    }

    return (
        <button onClick={callback} disabled={props.disabled}>{props.name}</button>
    );
};

export default Button;