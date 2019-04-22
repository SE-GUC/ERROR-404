import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store";

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
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  }
});

class logOut extends React.Component {
  render() {
    const { classes } = this.props;
    if (this.props.token === null) {
      return (
        <>
          <div className={classes.root}>
            <Typography paragraph>You are already LoggedOut</Typography>
          </div>
        </>
      );
    } else {
      this.props.signout();
      this.props.history.push("/");
      return(<></>)
    }
  }
}

logOut.propTypes = {
  classes: PropTypes.object.isRequired
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(logOut));
export default Form;
