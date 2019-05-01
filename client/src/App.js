import React, { Component } from "react";
import "./hubHomepage/temp.css";
import "./hubHomepage/content.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import SignedInNavBar from "./components/layout/NavbarSignedIn";
import Logo from "./components/images/pic05.jpg";
import news from "./components/images/news.jpg";
import addIcon from "./components/images/addIcon.png";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

class App extends Component {
  state = {
    allClubs: [],
    allContent: []
  };

  componentDidMount() {
    axios
      .get("/api/Clubs")
      .then(res => this.setState({ allClubs: res.data.data }));

    axios
      .get("/api/Contents")
      .then(res => this.setState({ allContent: res.data.data }));
  }

  render() {
    console.log(this.props.usertype);
    if (this.props.token === null) {
      return (
        <div>
          <Navbar />
          <section id="banner1">
            <div class="inner">
              <header>
                <h1>GUC HUB</h1>

                <p>
                  A platform for all the AWGs in the German University in Cairo
                  camps <br />
                  to allow the students to discover themselves
                </p>
              </header>
              <Link to="#main" class="more">
                Learn More
              </Link>
            </div>
          </section>

          <div id="main">
            <div class="inner">
              <div class="thumbnails">
                {this.state.allClubs.map(club => (
                  <div class="box">
                    <Link to={"/" + club.name + "Home"} class="image fit">
                      <img src={Logo} alt="" />
                    </Link>
                    <div class="inner">
                      <h3>{club.name}</h3>
                      <p>{club.description}</p>
                      <Link to={"/" + club.name + "Home"} class="button fit">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <header>
              <center>
                <h1>ANNONCEMENTS</h1>
              </center>
            </header>
          </div>
          {this.state.allContent.map(content => (
            <section id="one" class="wrapper style1">
              <div class="inner">
                <article class="feature left">
                  <span class="image">
                    <img src={news} alt="" />
                  </span>
                  <div class="content">
                    <h2>
                      {content.type} {content.date} {content.description}{" "}
                    </h2>
                  </div>
                </article>
              </div>
            </section>
          ))}

          <footer id="footer">
            <div class="inner">
              <h2>GUC HUB</h2>
              <p>Connecting the GUCians togther</p>

              <p class="copyright">&copy; ERROR 404 </p>
            </div>
          </footer>
        </div>
      );
    } else {
      const auth = this.props.usertype === "HUBadmin";
      if(auth){
      return (
        <div>
          <SignedInNavBar />
          <section id="banner1">
            <div class="inner">
              <header>
                <h1>GUC HUB</h1>
                <p>
                  A platform for all the AWGs in the German university in Cairo
                  camps <br />
                  To allow the students to discover themselves
                </p>
              </header>
              <Link to="#main" class="more">
                Learn More
              </Link>
            </div>
          </section>

          <div id="main">
            <div class="inner">
              <div class="thumbnails">
                {this.state.allClubs.map(club => (
                  <div class="box">
                    <Link to={"/" + club.name + "Home"} class="image fit">
                      <img src={Logo} alt="" />
                    </Link>
                    <div class="inner">
                      <h3>{club.name}</h3>
                      <p>{club.description}</p>
                      <Link to={"/" + club.name + "Home"} class="button fit">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                ))}
                 <div class="box">
                    <Link to={"/clubs"} class="image fit">
                      <img src={addIcon} alt="" />
                    </Link>
                    <div class="inner">
                       ADD A NEW ONE OR DELETE AN OLD ONE
                     
                      {/* <a to={"/clubs"} class="button fit">
                        CLICK HERE
                      </a> */}
                    </div>
                  </div>
              </div>

             </div>
            
            <header>
              <center>
                <h1>ANNONCEMENTS</h1>
              </center>
            </header>
          </div>
          {this.state.allContent.map(content => (
            <section id="one" class="wrapper style1">
              <div class="inner">
                <article class="feature left">
                  <span class="image">
                    <img src={news} alt="" />
                  </span>
                  <div class="content">
                    <h2>
                      {content.type} {content.date} {content.description}{" "}
                    </h2>
                  </div>
                </article>
              </div>
            </section>
          ))}

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
          else{
            return (
              <div>
                <SignedInNavBar />
                <section id="banner1">
                  <div class="inner">
                    <header>
                      <h1>GUC HUB</h1>
                      <p>
                        A platform for all the AWGs in the German university in Cairo
                        camps <br />
                        To allow the students to discover themselves
                      </p>
                    </header>
                    <Link to="#main" class="more">
                      Learn More
                    </Link>
                  </div>
                </section>
      
                <div id="main">
                  <div class="inner">
                    <div class="thumbnails">
                      {this.state.allClubs.map(club => (
                        <div class="box">
                          <Link to={"/" + club.name + "Home"} class="image fit">
                            <img src={Logo} alt="" />
                          </Link>
                          <div class="inner">
                            <h3>{club.name}</h3>
                            <p>{club.description}</p>
                            <Link to={"/" + club.name + "Home"} class="button fit">
                              Discover Now
                            </Link>
                          </div>
                        </div>
                      ))}
                      
                    </div>
      
                   </div>
                  
                  <header>
                    <center>
                      <h1>ANNONCEMENTS</h1>
                    </center>
                  </header>
                </div>
                {this.state.allContent.map(content => (
                  <section id="one" class="wrapper style1">
                    <div class="inner">
                      <article class="feature left">
                        <span class="image">
                          <img src={news} alt="" />
                        </span>
                        <div class="content">
                          <h2>
                            {content.type} {content.date} {content.description}{" "}
                          </h2>
                        </div>
                      </article>
                    </div>
                  </section>
                ))}
      
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
  }
}

const Form = connect(
  mapStateToProps,
  null
)(App);
export default Form;

// import React, { Component } from "react";
// import "./App.css";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer"
// import AllClubs from "./components/Clubs/AllClubs";
// import AllContent from "./components/Contents/AllContent";
// import axios from "axios";

// const mapStateToProps = state => {
//   return { token: state.token, usertype: state.usertype, id: state.id };
// };

// class App extends Component {

//   state = {
//     allClubs: [],
//     allContent: []
//   }

//   componentDidMount() {
//     console.log(this.props.token)
//     axios.get('http://localhost:5000/api/Clubs')
//       .then(res => this.setState({allClubs:res.data.data}));

//     axios.get('http://localhost:5000/api/Contents')
//       .then(res => this.setState({allContent:res.data.data}));
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <h1>TIQ</h1>
//         <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-4">
//           <div className="container">
//             <AllClubs allClubs = {this.state.allClubs} />
//           </div>
//         </nav>
//         <AllContent allContent = {this.state.allContent} />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;