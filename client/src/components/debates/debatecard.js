import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: "0 1em",
    padding: "0.25em 1em"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class DebateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      date:
        months[new Date(props.date).getMonth()] +
        " " +
        new Date(props.date).getDate() +
        ", " +
        new Date(props.date).getFullYear(),
      updateOpen: false,
      updatetitle: this.props.title,
      updatecategory: this.props.category,
      updateinfo: this.props.info,
      updatedescription: this.props.description,
      updatedate: this.props.date,
      updateerror: ""
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleUpdateClick = () => {
    this.setState(state => ({ updateOpen: !state.updateOpen }));
  };

  handleDeleteClick = async () => {
    await Axios.delete(`/api/Debates/${this.props.id}`);
    window.location.reload();
  };
  UpdateDebate = async () => {
    const reply = await Axios.put(
      `/api/Debates/${this.props.id}`,
      {
        title: this.state.updatetitle,
        category: this.state.updatecategory,
        date: this.state.updatedate,
        description: this.state.updatedescription,
        info: this.state.updateinfo
      }
    );
    if (Object.keys(reply.data)[0] === "err")
      this.setState({ updateerror: "Invalid/Missing Information" });
    else window.location.reload();
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    if (this.props.auth) {
      return (
        <>
          <Dialog
            open={this.state.updateOpen}
            onClose={this.handleUpdateClick}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Update Debate</DialogTitle>
            <DialogContent>
              <TextField
                // autoFocus
                margin="dense"
                id="updatetitle"
                label="Title"
                onChange={this.handleChange("updatetitle")}
                defaultValue={this.props.title}
              />
              <TextField
                // autoFocus
                margin="dense"
                id="updatecategory"
                label="Category"
                defaultValue={this.props.category}
                onChange={this.handleChange("updatecategory")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updatedescription"
                multiline
                label="Description"
                defaultValue={this.props.description}
                onChange={this.handleChange("updatedescription")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updateinfo"
                multiline
                label="Info"
                onChange={this.handleChange("updateinfo")}
                defaultValue={this.props.info}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updateinfo"
                type="date"
                label="Date"
                className={classes.textField}
                defaultValue={this.props.date}
                onChange={this.handleChange("updatedate")}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Typography paragraph>{this.state.updateerror}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleUpdateClick} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.UpdateDebate()} color="primary">
                Update
              </Button>
            </DialogActions>
          </Dialog>
          <Card className={classes.card}>
            <CardHeader title={this.props.title} subheader={this.state.date} />
            <CardContent>
              <Typography component="p">
                category : {this.props.category}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  this.handleDeleteClick();
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit"
                onClick={() => {
                  this.handleUpdateClick();
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>{this.props.description}</Typography>
                <Typography paragraph />
                <Typography paragraph>Info :</Typography>
                <Typography>{this.props.info}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Dialog
            open={this.state.updateOpen}
            onClose={this.handleUpdateClick}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Update Debate</DialogTitle>
            <DialogContent>
              <TextField
                // autoFocus
                margin="dense"
                id="updatetitle"
                label="Title"
                onChange={this.handleChange("updatetitle")}
                defaultValue={this.props.title}
              />
              <TextField
                // autoFocus
                margin="dense"
                id="updatecategory"
                label="Category"
                defaultValue={this.props.category}
                onChange={this.handleChange("updatecategory")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updatedescription"
                multiline
                label="Description"
                defaultValue={this.props.description}
                onChange={this.handleChange("updatedescription")}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updateinfo"
                multiline
                label="Info"
                onChange={this.handleChange("updateinfo")}
                defaultValue={this.props.info}
              />
              <TextField
                autoFocus
                margin="dense"
                id="updateinfo"
                type="date"
                label="Date"
                className={classes.textField}
                defaultValue={this.props.date}
                onChange={this.handleChange("updatedate")}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Typography paragraph>{this.state.updateerror}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleUpdateClick} color="primary">
                Cancel
              </Button>
              <Button onClick={() => this.UpdateDebate()} color="primary">
                Update
              </Button>
            </DialogActions>
          </Dialog>
          <Card className={classes.card}>
            <CardHeader title={this.props.title} subheader={this.state.date} />
            <CardContent>
              <Typography component="p">
                category : {this.props.category}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>{this.props.description}</Typography>
                <Typography paragraph />
                <Typography paragraph>Info :</Typography>
                <Typography>{this.props.info}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </>
      );
    }
  }
}

DebateCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DebateCard);