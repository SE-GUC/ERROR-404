import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class CreateDebate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      category: null,
      date: null,
      info: null,
      description: null,
      error: ""
    };
  }
  handleClick = event => {
    axios
      .post("/api/Debates", {
        title: "" + this.state.title,
        category: "" + this.state.category,
        date: "" + this.state.date,
        info: "" + this.state.info,
        description: "" + this.state.description
      })
      .then(response => {
        if (Object.keys(response.data)[0] === "err")
          this.setState({ error: "Missing/Incomplete Data" });
        else this.props.history.push("/debates");
        return;
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

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
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

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => {
            this.handleClick();
          }}
        >
          Post
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>

        <Typography paragraph>{this.state.error}</Typography>
      </form>
    );
  }
}

CreateDebate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateDebate);