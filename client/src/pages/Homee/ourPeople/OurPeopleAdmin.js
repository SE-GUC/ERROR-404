import React, { Component } from "react";
import "./ourPeople.css";
import FormDialog from "../../../components/users/FormDialog";
import pic5 from "../images/pic5.jpeg";

class ourPeopleAdmin extends Component {
  render() {
    console.log(this.props);
    return (
      <section id="two" class="wrapper style2">
        <header class="major">
          <h2>OUR PEOPLE</h2>
        </header>
        <div class="container">
          <div class="row">
            <div class="6u">
              <section class="special">
                <a href="#" class="image fit">
                  <img src={pic5} alt="" />
                </a>
                <h3>{this.props.user.firstName}</h3>
                <p>{this.props.user.lastName}</p>
                <ul class="actions">
                  <li>
                    <a
                      onClick={() => this.props.deleteUser(this.props.user._id)}
                      class="button alt"
                    >
                      Delete
                    </a>
                    {/* <button
                      variant="outlined"
                      style={{
                        backgroundColor: "#192024",
                        outlineColor: "#2196f3"
                      }}
                      className={"btn"}
                    >
                      vvvvvvvvvv
                    </button> */}
                    <FormDialog user={this.props} />
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ourPeopleAdmin;
