import React, { Component } from "react";
import AllClubs from "./components/Clubs/AllClubs";
import axios from "axios";
import AddClub from "./components/Clubs/AddClub";
import DeleteClub from "./components/Clubs/DeleteClub";
import UpdatingClubs from "./components/Clubs/UpdatingClubs";
import SignedInNavBar from "./components/layout/NavbarSignedIn";
import "./App.css";

class Clubs extends Component {
  state = {
    allClubs: []
  };

  componentDidMount() {
    axios
      .get("/api/Clubs")
      .then(res => this.setState({ allClubs: res.data.data }));
  }

  addClub = club => {
    axios
      .post("/api/Clubs", club)
      .then(res =>
        this.setState({ allClubs: [...this.state.allClubs, res.data.data] })
      );
  };

  delClub = id => {
    axios.delete(`/api/Clubs/${id}`).then(
      this.setState({
        allClubs: [...this.state.allClubs.filter(club => club._id !== id)]
      })
    );
  };

  updateClub = club => {
    console.log(club);
    const clubs = this.state.allClubs;
    var i;
    for (i = 0; i < clubs.length; i++) {
      if (clubs[i]._id === club._id) {
        if (club.name !== "") clubs[i].name = club.name;
        if (club.description !== "") clubs[i].description = club.description;
      }
    }
    const updatedData = {};
    if (club.name !== "") updatedData.name = club.name;
    if (club.description !== "") updatedData.description = club.description;
    axios
      .put(`/api/Clubs/${club._id}`, updatedData)
      .then(this.setState({ allClubs: clubs }));
  };

  render() {
    return (
     <div className="App">
     <SignedInNavBar/>
        {/* <h1>ALL CLUBS</h1>
        <AllClubs allClubs={this.state.allClubs} /> */}
        <h1>ADD NEW CLUB</h1>
        <AddClub addClub={this.addClub} />
        <h1>DELETE CLUB</h1>
        <DeleteClub allClubs={this.state.allClubs} delClub={this.delClub} />
        <h1>UPDATE CLUB</h1>
        <UpdatingClubs
          allClubs={this.state.allClubs}
          updateClub={this.updateClub}
        />
         <footer id="footer">
            <div class="inner">
              <h2>GUC HUB</h2>
              <p>Connecting the GUCians togther</p>

              <p class="copyright">&copy; ERROR 404 </p>
            </div>
          </footer>
      </div>
      
    );
  }
}

export default Clubs;
