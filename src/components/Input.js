import React from "react";

const Input = props => {
  return (
    <>
      <label htmlFor={props.name}>
        <input
          name={props.name}
          key={props.index}
          value={props.value}
          disabled={props.isDisabled}
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
      </label>
    </>
  );
};

export default Input;
