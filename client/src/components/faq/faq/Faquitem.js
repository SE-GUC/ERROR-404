import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Faquitem extends Component {

  state = {
    question: ' ',
    answer:' '
};

onChange= (e) => this.setState({[e.target.name]: e.target.value});



  render() {
   const { _id,question,answer} = this.props.faq;
    return (
      <div >
        <p>
            { question }
            <br></br>
            { answer }
        </p>
     
      </div>
    )
  }
}


// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right'
//   }



export default Faquitem