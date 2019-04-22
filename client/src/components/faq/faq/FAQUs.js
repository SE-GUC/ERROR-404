import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaqUItem from './FaqUItem'

class FAQUs extends Component {
  render() {
    return this.props.FAQs.map((faq) => (
      <FaqUItem key={faq._id} faq={faq}  />

    ));
  }
}


export default FAQUs;