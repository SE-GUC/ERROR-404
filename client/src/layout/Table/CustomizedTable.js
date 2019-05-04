import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class CustomizedTable extends React.Component {
  constructor(props) {
     super(props);
    this.state = {
      
      updateOpen: false,
      updateScore: this.props.score,
      scoree:0,
      idd:0
    };
  }
  handleUpdateClick = (id) => { console.log(id);
    this.setState(state => ({ updateOpen: !state.updateOpen }));
    this.setState(state => ({ idd: id}));
   
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  UpdateScore = async (id,score) => {
    console.log(score);
    console.log(`/updateScores/${id}/${score}`)
      await Axios.put(
      `/api/Users/updateScores/${id}/${score}` );
    alert("updated");
  };
  onSubmit= (e) => {
    e.preventDefault();
      // this.setState(this.state.debateLiveTitle);
    
       this.setState({scoree:0})
       this.render();
}
  render() {
    const auth = this.props.usertype === "TIQadmin";
    if (auth) {
    console.log(this.props.scores);
    const { classes } = this.props;
    return (
      <div style={{position:"relative",top:"20px"}}>
      <Paper className={classes.root}>
      <Dialog
            open={this.state.updateOpen}
            onClose={this.handleUpdateClick}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Update Score</DialogTitle>
            <DialogContent>
            <TextField
                // autoFocus
                // margin="dense"
                id="scoree"
                // multiline
                label="Score"
                // placeholder={score.score}
                onChange={this.handleChange("scoree")}
              />
            </DialogContent>
            <DialogActions>
               <Button class="button" onClick={() => this.UpdateScore(this.state.idd,this.state.scoree)} onSubmit={this.onSubmit}> Update </Button>
            </DialogActions>
          </Dialog>
        <Table className={classes.table}style={{position:"absolute",top:"-199px"}} >
          <TableHead>
            <TableRow>
              <CustomTableCell>Member Of</CustomTableCell>
              <CustomTableCell align="right">First Name</CustomTableCell>
              <CustomTableCell align="right">Last Name</CustomTableCell>
              <CustomTableCell align="right"> Score</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {this.props.scores.map(score => (
              
              <TableRow className={classes.score} key={score._id}>
             
                <CustomTableCell component="th" scope="row">
                  {score.type}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.firstName}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.lastName}
                </CustomTableCell>
                <CustomTableCell align="right">
                
                 {score.score} {"  "} 
               <a onClick={() => {
                  this.handleUpdateClick(score._id);
                }}>
                <EditIcon /></a>
                   
                    </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </div>
    );
            
  }else{
    console.log(this.props.scores);
    const { classes } = this.props;
    return (
      <div style={{position:"relative",top:"20px"}}>
      <Paper className={classes.root}>
      <Table className={classes.table}style={{position:"absolute",top:"-199px"}} >
          <TableHead>
            <TableRow>
              <CustomTableCell>Member Of</CustomTableCell>
              <CustomTableCell align="right">First Name</CustomTableCell>
              <CustomTableCell align="right">Last Name</CustomTableCell>
              <CustomTableCell align="right"> Score</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.scores.map(score => (
              <TableRow className={classes.score} key={score._id}>
              
                <CustomTableCell component="th" scope="row">
                  {score.type}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.firstName}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {score.lastName}
                </CustomTableCell>
                <CustomTableCell align="right"> {score.score} {"  "} 
               
                    </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </div>
    );
  }

}
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const Form = connect(
  mapStateToProps,
  null
)(withStyles(styles)(CustomizedTable));
  

export default Form;
//export default withStyles(styles)(CustomizedTable);
