import React, { Component } from "react";
import DebateCard from "./debatecard.js";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./Debates.css";
import ToolBar from "../../layout/Toolbar/Toolbar";

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class SearchDate extends Component {
  componentDidMount() {
    const { date } = this.props.match.params;
    this.setState({ date: date });
    axios
      .get(`/api/debates/searchbydate/${date}`)
      .then(res => this.setState({ debates: res.data.data }));
  }
  constructor(props) {
    super(props);
    this.state = {
      debates: [],
      date: null
    };
  }

  render() {
    const { classes } = this.props;
    try {
      return (
        <>
          <ToolBar />
          <div className="center-div">
            <h1>Debates on Date {this.state.date}</h1>
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
    } catch (Error) {
      return (
        <>
          <div className="center-div">
            <h1>Debates on Date {this.state.date}</h1>
          </div>
        </>
      );
    }
  }
}

export default withStyles(styles)(SearchDate);
