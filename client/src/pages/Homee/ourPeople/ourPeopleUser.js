import React, { Component } from "react";
import "./ourPeople.css";

import pic5 from "../images/pic5.jpeg";

class ourPeopleUser extends Component {
  render() {
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
                <h3>Mollis adipiscing nisl</h3>
                <p>
                  Eget mi ac magna cep lobortis faucibus accumsan enim lacinia
                  adipiscing metus urna adipiscing cep commodo id. Ac quis arcu
                  amet. Arcu nascetur lorem adipiscing non faucibus odio nullam
                  arcu lobortis. Aliquet ante feugiat. Turpis aliquet ac posuere
                  volutpat lorem arcu aliquam lorem.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ourPeopleUser;
