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

const styles = theme => ({
  card: {
    maxWidth: 1000,
    margin: "0 1em",
    padding: "0.25em 1em"
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
  }
});

class DebateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      date:
        new Date(props.date).getDate() +
        "-" +
        (new Date(props.date).getMonth() + 1) +
        "-" +
        new Date(props.date).getFullYear()
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

DebateCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DebateCard);
