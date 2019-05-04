import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddFaq extends Component {
  state = {
    question: "",
    answer: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addFAQ(this.state.question, this.state.answer);
    this.setState({ question: "", answer: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="question"
          style={{ flex: "10", padding: "5px",fontFamily:'Arial',backgroundColor:"#black",color:"black" }}
          placeholder="Add Question ..."
          value={this.state.question}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="answer"
          style={{ flex: "10", padding: "5px",fontFamily:'Arial',backgroundColor:"#black",color:"black" }}
          placeholder="Add Answer ..."
          value={this.state.answer}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{backgroundColor:"#70c7be"}}
          />
      </form>
    );
  }
}

export default AddFaq;
