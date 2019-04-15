import React, { Component } from 'react';
import Faquitem from './Faquitem';
import PropTypes from 'prop-types';

class FAQUs extends Component {
  render() {
    return this.props.FAQs.map((faq) => (
      <Faquitem key={faq._id} faq={faq}  />
    ));
  }
}


export default FAQUs;