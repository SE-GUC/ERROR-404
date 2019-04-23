import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          Type: {this.props.content.type} ,Date: {this.props.content.date}{" "}
          ,Description: {this.props.content.description}
        </p>
      </div>
    );
  }
}

export default Content;
