import React, { Component } from "react";
import Content from "./Content";
// import ReviewCard from "../../layout/ReviewCard/ReviewCard";
import Home from "../../pages/Homee/Home";

class AllContent extends Component {
  render() {
    return this.props.allContent.map(content => (
      // <ReviewCard key={content._id} content={content} />
      <Content key={content._id} content={content} />
      // <Home key={content._id} content={content} />
    ));
  }
}

export default AllContent;
