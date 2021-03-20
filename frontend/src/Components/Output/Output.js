import React from 'react';

import './Output.scss'

const Output = (props) => {
    return (
        <div className="output">
            <p className="output__label" for={props.name}>{props.children}</p>
            <div className="output__output" type="text">&nbsp;</div>
        </div>
    )
}

export default Output;