import React from 'react';

import './Input.scss';

const Input = props => {
  return (
    <div className="input">
      <label className="input__label">
        {props.children}
        <input className="input__input" type="text" id={props.name} onBlur={props.blur} />
      </label>
    </div>
  );
};

export default Input;
