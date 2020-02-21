import React, { Component } from "react";
import Form from "./components/Form";
import Story from "./components/Story";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        adj1: "",
        adj2: "",
        noun1: "",
        noun2: "",
        pNoun1: "",
        game: "",
        pNoun2: "",
        ingVerb1: "",
        ingVerb2: "",
        pNoun3: "",
        ingVerb3: "",
        noun3: "",
        plant: "",
        bodyPt: "",
        place: "",
        ingVerb4: "",
        adj3: "",
        num: "",
        pNoun4: ""
      },
      isDisabled: "",
      showStory: false
    };
    this.baseState = this.state.form;
  }

  handleChange = e => {
    e.preventDefault();
    // set a new variable and assign it to the form object within the state object
    // variable can be named ANYTHING; it's used to retrieve a specific key
    let form = this.state.form;
    // destructure form's key to equal the value
    // form[e.target.name] is equivalent to form[adj1], form[adj2], etc.
    // e.target.name = the targeted name attribute of the input tag retrieved through the use of the onChange event method
    // e.target.value = the targeted value of the onChange event method
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isDisabled: "disabled" });
    this.setState({ showStory: true });
  };

  handleReset = e => {
    e.preventDefault();
    // this.setState({ form: this.baseState }); // Clears each object to empty string
    this.setState({ isDisabled: "" });
    this.setState({ showStory: false });
  };

  render() {
    return (
      <>
        <h1>Mad Libs</h1>
        <Form
          form={this.state.form}
          handleReset={this.handleReset}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          isDisabled={this.state.isDisabled}
        />

        {this.state.showStory === true && <Story form={this.state.form} />}
      </>
    );
  }
}

export default App;
