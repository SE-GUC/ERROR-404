import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from'@material-ui/core/colors/orange';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  cssEdit: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  css: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
},},}
);

class SimplePopper extends React.Component {
  state = {
    question:'',
    answer:'',
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div>
      <Button variant="contained"  color="primary"    className={classNames(classes.margin, classes.cssEdit)} onClick={this.handleClick}>
        EDIT
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} style={{paddingLeft:'80px'}} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{backgroundColor:'#d81b60',padding:'10px 10px 10px 10px'}}>
            <form>
                <label>
                    <input
                       type="text"
                       placeholder="Edit Question ..."
                        name='question'
                        value={this.state.question}
                        style={{backgroundColor:'#9575cd', padding: "5px",width:'300px' }}
                       
                        onChange={this.onChange}/>
                </label>
                <label>
                    <input 
                    
                         type="text"
                        name='answer'
                        
                        value={this.state.answer} 
                        style={{ flex: "5", padding: "5px",backgroundColor:'#9575cd', width:'300px'}}
                        placeholder="Edit Answer ..."
                        onChange={this.onChange}/>
                </label>
               
            </form>
            
            <button  className="btn" style={btnStyle} onClick={this.props.updatefaq.bind(this,this.props.faq._id,this.state.question,this.state.answer)} >update</button>
            <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon onClick={this.props.delfaq.bind(this, this.props.faq._id)}/> 
      </IconButton>

            
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  textalign: 'center',
  textdecoration: 'none',
  display: 'inline-block',
  fontsize: '16px',
  borderradius: '12px'
}
const btnStyle2 = {
  background: '#',
  color: 'black',
  border: 'none',
  padding: '5px 10px',
  textalign: 'center',
  textdecoration: 'none',
  display: 'inline-block',
  fontsize: '16px',
  borderradius: '12px'
}

export default withStyles(styles)(SimplePopper);
