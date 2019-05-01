import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Navbar from "../../components/layout/Navbar";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store";
import axios from "axios";

const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signOut()),
    signin: (token, usertype, id) => dispatch(signIn(token, usertype, id))
  };
}

const styles = theme => ({
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   background: 'white'
  // },
  // margin: {
  //   margin: theme.spacing.unit
  // },
  // withoutLabel: {
  //   marginTop: theme.spacing.unit * 3
  // },
  // textField: {
  //   flexBasis: 200
  // }
});

class InputAdornments extends React.Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
    errormessgae: ""
  };

  handleClick = async event => {
    const Users = await axios.post(
      "/api/Users/authenticate",
      {
        email: this.state.email,
        password: this.state.password
      }
    );
    if (Users.data.token !== null) {
      this.props.signin(Users.data.token, Users.data.usertype, Users.data.id);
      this.props.history.push("/");
    } else
      this.setState({
        errormessgae: "Incorrect Email or Password please try again"
      });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.usertype);
    return (
      <>
     <Navbar/>
        <div className={classes.root}>
          <TextField
            className={classes.margin}
            id="email"
            label="Email"
            onChange={this.handleChange("email")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />

          <FormControl
            className={classNames(classes.margin, classes.textField)}
          >
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            // href="http://localhost:3000/user"
            className={classes.button}
            onClick={() => {
              this.handleClick();
            }}
          >
            Sign In
          </Button>

          <Typography paragraph>{this.state.errormessgae}</Typography>
        </div>
      </>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InputAdornments));
export default Form;
