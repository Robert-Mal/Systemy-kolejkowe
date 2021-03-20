import React from 'react';

import './Input.scss'

const Input = (props) => {
    return (
        <div className="input">
            <label className="input__label" for={props.name}>{props.children}</label>
            <input className="input__input" type="text" id={props.name}/>
        </div>
    )
}

export default Input;