import React, { Component } from "react";
import axios from "axios";

import SignUp from "../../pages/SignUp";
export class CreateUser extends Component {
  state = {
    type: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    bio: "",
    email: "",
    password: "",
    house: "",
    din: "",
    dor: "",
    clubs: ""
  };

  addUser = (
    type,
    firstName,
    lastName,
    birthDate,
    bio,
    email,
    password,
    house,
    din,
    dor,
    clubs
  ) => {
    axios
      .post("/api/Users/register", {
        type: type,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        bio: bio,
        email: email,
        password: password,
        house: house,
        din: din,
        dor: dor,
        clubs: clubs
      })
      
      .then(res =>
        this.setState({ users: [...this.state.users, res.data.data] })
      );
    console.log("llllll");
    
        alert("User added successfully");
      
  };

  render() {
    //  console.log(this.addUser);
    console.log(111);
    return <SignUp p={this.SignUp} addUser={this.addUser} />;
    // return <h1>Hellooo</h1>;
  }
}

export default CreateUser;

// handelChange = event => {
//   if (event.target.name === "clubs") {
//     this.setState({ clubs: [event.target.value] });
//   } else this.setState({ [event.target.name]: event.target.value });
// };

// handelSubmit = event => {
//   event.preventDefault();
//   axios
//     .post("http://localhost:5000/api/Users/register", {
//       type: this.state.type,
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       birthDate: this.state.birthDate,
//       bio: this.state.bio,
//       email: this.state.email,
//       password: this.state.password,
//       house: this.state.house,
//       din: this.state.din,
//       dor: this.state.dor,
//       clubs: this.state.clubs
//     })
//     .then(res =>
//       this.setState({ users: [...this.state.users, res.data.data] })
//     );
//   alert("User Added Sucessfully");
// };

//   <div className="center-div">
//     <h1>Register</h1>
//     <form
//       onSubmit={event => this.handelSubmit(event, this.props.createNewUser)}
//     >
//       <label>
//         Type :
//         <input
//           type="text"
//           name="type"
//           placeholder="type"
//           values={this.state.type}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         First Name :
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           values={this.state.firstName}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Last Name :
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           values={this.state.lastName}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Birth Date :
//         <input
//           type="text"
//           name="birthDate"
//           placeholder="Birth Date"
//           values={this.state.birthDate}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Bio :
//         <input
//           type="text"
//           name="bio"
//           placeholder="Bio"
//           values={this.state.bio}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Email :
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           values={this.state.email}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         password :
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           values={this.state.password}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         house :
//         <input
//           type="text"
//           name="house"
//           placeholder="House"
//           values={this.state.house}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Date of Joining the club :
//         <input
//           type="date"
//           name="din"
//           placeholder="Date of Joining"
//           values={this.state.din}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Date of leaving the club :
//         <input
//           type="date"
//           name="dor"
//           placeholder="Date Of Leaving"
//           values={this.state.dor}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />

//       <label>
//         Current Clubs You In :
//         <input
//           type="text"
//           name="clubs"
//           placeholder="Clubs"
//           values={this.state.clubs}
//           onChange={this.handelChange}
//         />
//       </label>

//       <p />
//       <input type="submit" value="ADD" />
//     </form>
//   </div>
