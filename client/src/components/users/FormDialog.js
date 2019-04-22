import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import "../../pages/Homee/ourPeople/ourPeople.css";

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstName: this.props.user.firstName,
      lastName: null,
      birthDate: null,
      bio: null,
      clubs: null,
      din: null,
      Error: ""
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  handleUpdateClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleSubmit = () => {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.bio);
    console.log(this.state.firstName);
    //   console.log(this.state.birthDate);
    console.log(this.state.clubs);
    console.log(this.props.user.id);
    axios
      .put("http://localhost:5000/api/Users/update/" + this.props.user.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        bio: this.state.bio,
        birthDate: this.setState.birthDate,
        clubs: this.state.clubs,
        din: this.state.din,
        dor: this.state.dor
      })
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
    // console.log("Ammmmmmmmmmmmmmmmmmmmmmmmarrr");
    // if (Object.keys(update.data)[0] === "err")
    //   this.setState({ Error: "Invalid/Missing Information" });
    // else window.location.reload();
    /*
     * axios ... put whatver using this.state.firstName, this.staet.lastName
     */
  };

  render() {
    console.log("hey");
    console.log(this.props.user.user.firstName);
    return (
      <div>
        <div />
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          UPDATE
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Profile</DialogTitle>
          <DialogContent>
            <DialogContentText />
            <TextField
              onChange={e => {
                this.setState({
                  firstName: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="FirstName"
              label="FirstName"
              type="FirstName"
              defaultValue={this.props.user.firstName}
            />
            <TextField
              onChange={e => {
                this.setState({
                  lastName: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="LastName"
              label="LastName"
              type="LastName"
              defaultValue={this.props.user.lastName}
            />
            <TextField
              onChange={e => {
                this.setState({
                  date: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="date"
              type="date"
              defaultValue={this.props.user.date}
            />

            <TextField
              onChange={e => {
                this.setState({
                  bio: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="bio"
              label="bio"
              type="bio"
              defaultValue={this.props.user.bio}
            />
            <TextField
              onChange={e => {
                this.setState({
                  din: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="din"
              label="din"
              type="din"
              defaultValue={this.props.user.din}
            />

            <TextField
              onChange={e => {
                this.setState({
                  dor: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="dor"
              label="dor"
              type="dor"
              defaultValue={this.props.user.dor}
            />

            <TextField
              onChange={e => {
                this.setState({
                  clubs: e.target.value
                });
              }}
              autoFocus
              margin="dense"
              id="clubs"
              label="Clubs"
              type="clubs"
              defaultValue={this.props.user.clubs}
            />

            <Typography paragraph>{this.state.Error}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              CANCEL
            </Button>
            <Button onClick={() => this.handleSubmit()} color="primary">
              UPDATE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
