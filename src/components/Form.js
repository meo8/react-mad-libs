import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = props => {
  let labels = [
    "Adjective",
    "Adjective",
    "Noun",
    "Noun",
    "Plural Noun",
    "Game",
    "Plural Noun",
    "-ing Verb",
    "-ing Verb",
    "Plural Noun",
    "-ing Verb",
    "Noun",
    "Plant",
    "Body Part",
    "Place",
    "-ing Verb",
    "Adjective",
    "Number",
    "Plural Noun"
  ];
  let { form } = props;
  let input = Object.keys(form).map((name, index) => {
    return (
      <Input
        name={name}
        key={index}
        value={form[name]}
        isDisabled={props.isDisabled}
        handleChange={props.handleChange}
        placeholder={labels[index]}
      />
    );
  });

  return (
    <form>
      {input}

      <Button type="Submit" handleClick={props.handleSubmit} />
      <Button type="Clear" handleClick={props.handleReset} />
    </form>
  );
};

export default Form;
