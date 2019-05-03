import React, { Component } from "react";

import "./assets/css/main.css";
import "./assets/css/ie9.css";
import Toolbar from "../../layout/Toolbar/Toolbar";
import pic1 from "./images/pic01.jpg";
import axios from "axios";

export class AllEvents extends Component {
  state = {
    allConents: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Contents")
      .then(res => this.setState({ allConents: res.data.data }));
  }

  render() {
    return (
      <section id="one" className="wrapper style1">
       <div className="inner">
          {this.state.allConents.map(content => (
            <article className="feature left">
              <section>
                <span className="image">
                  <img src={pic1} alt="" />
                </span>
                <div className="content">
                  <div>
                    <h2>{content.title}</h2>
                  </div>

                  <div>
                    <h2>{content.date}</h2>
                  </div>

                  <p>{content.description}</p>

                  {/* <ul className="actions">
                    <li>
                      <a to="#" className="button alt">
                        More
                      </a>
                    </li>
                  </ul> */}
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>

      // <div id="three-column" class="container">
      // 	<div class="tbox1">
      // 		<div class="box-style box-style01">
      //         {this.state.allConents.map(content => (
      // 			<div class="content">
      // 				<div class="image"><img src="images/img01.jpg" width="324" height="200" alt="" /></div>
      // 				<h2>{content.title}</h2>
      // 				<h2>{content.title}</h2>

      // 				<p>Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. </p>
      // 				<a href="#" class="button">Learn More</a>
      // 			</div>
      //         ))};
      // 		</div>
      // 	</div>
      //  </div>
    );
  }
}
export default AllEvents;
