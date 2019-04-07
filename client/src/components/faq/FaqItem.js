import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class FaqItem extends Component {

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
            <form>
                <label>
                    <input
                       type="text"
                        name='question'
                        value={this.state.question}
                        onChange={this.onChange}/>
                </label>
                <label>
                    <input 
                         type="text"
                        name='answer'
                        value={this.state.answer} 
                        onChange={this.onChange}/>
                </label>
                
            </form>
            <button    onClick={this.props.updatefaq.bind(this,_id,this.state.question,this.state.answer)} >update</button>
            <button    onClick={this.props.delfaq.bind(this, _id)}  >x</button>
            
        
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



export default FaqItem