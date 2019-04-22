import React, { Component } from "react";

import "./assets/css/main.css";
import "./assets/css/ie9.css";
import pic1 from "./images/pic01.jpg";
import pic2 from "./images/pic02.jpg";
import pic4 from "./images/pic4.jpeg";
import pic5 from "./images/pic5.jpeg";
import pic6 from "./images/pic6.jpeg";
import TIQ from "./images/TIQ.png";

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
      <div>
        <html>
          <head>
            <title>Retrospect by TEMPLATED</title>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />

            <link rel="stylesheet" href="assets/css/main.css" />
          </head>

          <body className="landing">
            <header id="header" className="alt" />

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
                  <h2>Get in touch</h2>
                  <p />
                </header>
                <form action="#" method="POST">
                  <div className="container 75%">
                    <div className="row uniform 50%">
                      <div className="6u 12u$(xsmall)">
                        <input name="name" placeholder="Name" type="text" />
                      </div>
                      <div className="6u$ 12u$(xsmall)">
                        <input name="email" placeholder="Email" type="email" />
                      </div>
                      <div className="12u$">
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input type="submit" className="special" value="Submit" />
                    </li>
                    <li>
                      <input type="reset" className="alt" value="Reset" />
                    </li>
                  </ul>
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
                  <li>&copy; Untitled.</li>
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
          </body>
        </html>
      </div>
    );
  }
}

export default Home;
