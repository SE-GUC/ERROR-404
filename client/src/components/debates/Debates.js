import React, { Component } from "react";
import DebateCard from "./debatecard.js";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Debates.css";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    color: "#8f1814",
    background: "#e2a325"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class Debates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debates: [],
      createopen: false,
      title: null,
      category: null,
      date: null,
      info: null,
      description: null,
      error: ""
    };
  }

  createDebate = event => {
    axios
      .post("http://localhost:5000/api/Debates", {
        title: "" + this.state.title,
        category: "" + this.state.category,
        date: "" + this.state.date,
        info: "" + this.state.info,
        description: "" + this.state.description
      })
      .then(response => {
        if (Object.keys(response.data)[0] === "err")
          this.setState({ error: "Missing/Incomplete Data" });
        else 
        window.location.reload();
      })
      .catch(err => {
        this.setState({ error: "Missing/Incomplete Data" });
        return;
      });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleCreateClick = () => {
    this.setState(state => ({ createopen: !state.createopen }));
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/debates")
      .then(res => this.setState({ debates: res.data.data }));
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Dialog
          open={this.state.createopen}
          onClose={this.handleCreateClick}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Debate</DialogTitle>
          <DialogContent>
            <TextField
              required
              id="title"
              label="Title"
              className={classes.textField}
              onChange={this.handleChange("title")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              required
              id="category"
              label="Category"
              className={classes.textField}
              onChange={this.handleChange("category")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="description"
              label="Description"
              multiline
              rowsMax="100"
              //          value={this.state.multiline}
              onChange={this.handleChange("description")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="info"
              label="Info"
              multiline
              rowsMax="100"
              //        value={this.state.multiline}
              onChange={this.handleChange("info")}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

            <TextField
              required
              id="date"
              label="Date"
              type="date"
              className={classes.textField}
              onChange={this.handleChange("date")}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Typography paragraph>{this.state.error}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCreateClick} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.createDebate()} color="primary">
              Create
              <CloudUploadIcon className={classes.rightIcon} />

            </Button>
          </DialogActions>
        </Dialog>

        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.handleCreateClick}
        >
          <AddIcon />
        </Fab>
        <div className="center-div">
          <h1>Our Debates</h1>
          {this.state.debates.map(debate => (
            <DebateCard
              key={debate._id}
              id={debate._id}
              title={debate.title}
              date={debate.date}
              category={debate.category}
              description={debate.description}
              info={debate.info}
            />
          ))}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Debates);
