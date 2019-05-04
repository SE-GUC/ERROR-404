import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Navbar from "../components/layout/Navbar"
import { red } from "@material-ui/core/colors";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});
class SignUp extends React.Component {
  state = {
    type: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    bio: "",
    email: "",
    password: "",
    house: "",
    din: "",
    dor: "",
    clubs: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log("hhhhhhhhhhhhhhhh");
    return (
      
      <main className={classes.main}>
       <Navbar/>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="type"> Type</InputLabel>
              <Input
                id="type"
                name="type"
                autoComplete="type"
                placeholder="TIQadmin,member,...."
                style={{color:"black"}}
                onChange={this.onChange}
                value={this.state.type}
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">firstName </InputLabel>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="firstName"
                onChange={this.onChange}
                value={this.state.firstName}
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastName">Last Name </InputLabel>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="lastName"
                onChange={this.onChange}
                value={this.state.lastName}
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="birthDate">Birth Date</InputLabel>
              <Input
                id="birthDate"
                name="birthDate"
                onChange={this.onChange}
                value={this.state.birthDate}
                placeholder="DD-MM-YYYY"
                autoComplete="birthDate"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="bio"> Bio</InputLabel>
              <Input
                id="bio"
                name="bio"
                onChange={this.onChange}
                value={this.state.bio}
                autoComplete="bio"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                placeholder="example@student.guc.edu.eg"
                autoComplete="email"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="house"> House</InputLabel>
              <Input
                id="house"
                name="house"
                autoComplete="house"
                onChange={this.onChange}
                value={this.state.house}
                placeholder="Pegasus,Orion,Neutral"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="din"> Date Of Joining</InputLabel>
              <Input
                id="din"
                name="din"
                autoComplete="din"
                onChange={this.onChange}
                value={this.state.din}
                placeholder="DD-MM-YYYY"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="dor">Date Of Leaving </InputLabel>
              <Input
                id="dor"
                name="dor"
                autoComplete="dor"
                onChange={this.onChange}
                value={this.state.dor}
                placeholder="DD-MM-YYYY"
                autoFocus
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="clubs"> Clubs</InputLabel>
              <Input
                id="clubs"
                name="clubs"
                autoComplete="clubs"
                onChange={this.onChange}
                value={this.state.clubs}
                autoFocus
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/signin"
              onClick={this.props.addUser.bind(
                this,
                this.state.type,
                this.state.firstName,
                this.state.lastName,
                this.state.birthDate,
                this.state.bio,
                this.state.email,
                this.state.password,
                this.state.house,
                this.state.din,
                this.state.dor,
                this.state.clubs
              )}
            >
              DEBATE NOW!
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
