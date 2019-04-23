import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import FormDialog from "./FormDialog";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

// const handleChange = panel => (event, isExpanded) => {
//   setExpanded(isExpanded ? panel : false);
// };

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}> Name </Typography>
          </div>

          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {props.user.firstName}
            </Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> Last Name </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.lastName}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> Type </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.type}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> BirthDate </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.birthDate}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> Bio </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.bio}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> Email </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.email}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> House </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.house}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {" "}
                  Date Of Joining{" "}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.din}
                </Typography>
              </div>
            </Typography>
          </div>
          <br />

          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {" "}
                  Date Of Leaving{" "}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.dor}
                </Typography>
              </div>
            </Typography>
          </div>

          <br />
          <div className={classes.column}>
            <Typography variant="caption">
              <div className={classes.column}>
                <Typography className={classes.heading}> Clubs </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {props.user.clubs}
                </Typography>
              </div>
            </Typography>
          </div>
        </ExpansionPanelDetails>

        <Divider />
        <ExpansionPanelActions>
          {/* <Button size="small" onClick={() => props.deleteUser(props.user._id)}>
          Delete
          </Button> */}
          <Button
            variant="outlined"
            // href="#outlined-buttons"
            href="#primary"
            className={classes.button}
            onClick={() => props.deleteUser(props.user._id)}
          >
            Delete
          </Button>
          <FormDialog user={props.user} id={props.user.id} />
          {/* <Button size="small" color="primary" onClick={FormDialog}>
            Update
          </Button> */}
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedExpansionPanel);
