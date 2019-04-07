import React, { Component } from 'react';
import Content from './Content';

class AllContent extends Component {
  render() {
    return this.props.allContent.map((content) => (
        <Content key={content._id} content={content} />
    ));
  }
}

export default AllContent;
