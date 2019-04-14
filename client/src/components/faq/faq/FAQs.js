<<<<<<< HEAD:client/src/components/faq/FAQs.js
import React, { Component } from "react";
import FaqItem from "./FaqItem";
import PropTypes from "prop-types";

=======
import React, { Component } from 'react';
import FaqItem from './FaqItem';
>>>>>>> 9898e49db50acb9470671b93fd53bc27222720ec:client/src/components/faq/faq/FAQs.js
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
