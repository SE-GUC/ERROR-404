import React, { Component } from "react";
import FaqItem from "./FaqItem";
import PropTypes from "prop-types";

class FAQs extends Component {
  render() {
    return this.props.FAQs.map(faq => (
      <FaqItem
        key={faq._id}
        faq={faq}
        delfaq={this.props.delfaq}
        updatefaq={this.props.updatefaq}
      />
    ));
  }
}

export default FAQs;
