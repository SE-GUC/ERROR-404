import React, { Component } from "react";

import "./assets/css/ie9.css";
import "./assets/css/main.css";
import pic1 from "./images/pic01.jpg";
import pic2 from "./images/pic02.jpg";
import pic4 from "./images/pic4.jpeg";
import pic5 from "./images/pic5.jpeg";
import pic6 from "./images/pic6.jpeg";
import TIQ from "./images/TIQ.png";
import Toolbar from "../../layout/Toolbar/Toolbar";

import EventPic from "./images/Event.png";

import axios from "axios";

export class Home extends Component {
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
      <>
        <div>
          <Toolbar />
        </div>
        <section id="banner">
          <i className="icon  " />
          <h2>Welcome to TIQ </h2>
          <p>READY FOR THE CHALLANGE </p>

          <ul className="actions">
            <li>
              <a href="/getUsers" className="button big special">
                Our People
              </a>
            </li>
          </ul>
        </section>

        {/* FIRST SECTION */}
        <section id="one" className="wrapper style1">
          <div className="inner">
            <article class="feature left">
              <span class="image">
                <img src={TIQ} alt="" />
              </span>
              <div class="content">
                <h2>WHO IS LEADING NOW ....!!</h2>

                <ul class="actions">
                  <li>
                    <a href="/Score" class="button alt">
                      Check Scores
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <article class="feature right">
              <span class="image">
                <img src={TIQ} alt="" />
              </span>
              <div class="content">
                <h2>OUR LATEST EVENTS</h2>

                <ul class="actions">
                  <li>
                    <a href="/AllEvents" class="button alt">
                      Check All Events
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="two" className="wrapper special">
          <div className="inner">
            <header className="major narrow">
              <h2>OUR BEST MOMENT</h2>
              <p>{/* KLLLLAMMM BLAAA BLAAA BLAAA */}</p>
            </header>
            <div className="image-grid">
              <a href="#" className="image">
                <img src={pic4} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic5} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic5} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic4} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic5} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic4} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic5} alt="" />
              </a>
              <a href="#" className="image">
                <img src={pic5} alt="" />
              </a>
            </div>
            <ul className="actions">
              {/* <li>
                  <a href="#" className="button big alt">
                    Tempus Aliquam
                  </a>
                </li> */}
            </ul>
          </div>
        </section>

        <section id="three" className="wrapper style3 special">
          <div className="inner">
            <header className="major narrow	">
              <p>Want to Know more about our family ?</p>
            </header>
            <ul className="actions">
              <li>
                <a href="#" className="button big alt">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="four" className="wrapper style2 special">
          <div className="inner">
            <header className="major narrow">
              <h2
                style={{
                  textAlign: "center",
                  position: "relative",
                  left: "250px"
                }}
              >
                It's better to debate.A Question Without setting it than to
                settle a question without debating it.
              </h2>
              <p />
            </header>
            <form action="#" method="POST">
              {/* <p>
                We live in a world of diversity, diversity of culture, diversity
                of belief, diversity of thought. When we ask ourselves the
                important questions we reach many important conclusions but it
                is through constantly communicating with one another, constantly
                trying to understand and at the same time influence that we can
                together shape as satisfying a possible resolution. TIQ is a
                debate club, where we strive to produce dialogue in it's most
                exciting form, up on stage, going head to head with other
                people. There is nothing more remarkable than the free flowing
                of words carrying ideas, ideas that prevail with the passion,
                steadiness and charisma of those who deliver them. If riveting
                debate is something you long to learn and participate in then
                here is your home.
              </p> */}
            </form>
          </div>
        </section>

        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/TheIntelligentQuestion/?epa=SEARCH_BOX"
                  className="icon fa-facebook"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              {/* <li>
                  <a href="#" className="icon fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li> */}
            </ul>
            <ul className="copyright">
              <li>&copy; ERROR 404.</li>
              <li>
                Images: <a href="http://unsplash.com">Unsplash</a>.
              </li>
              <li>
                Design: <a href="http://templated.co">TEMPLATED</a>.
              </li>
            </ul>
          </div>
        </footer>

        <script src="assets/js/jquery.min.js" />
        <script src="assets/js/skel.min.js" />
        <script src="assets/js/util.js" />
        <script src="assets/js/ie/respond.min.js" />
        <script src="assets/js/main.js" />
      </>
    );
  }
}

export default Home;
