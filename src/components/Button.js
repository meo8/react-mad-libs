import React from "react";

const Button = props => {
  return (
    <>
      <button onClick={props.handleClick}>{props.type}</button>
    </>
  );
};

export default Button;
