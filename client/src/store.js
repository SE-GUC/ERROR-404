//Imports
<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import dotenv from 'dotenv'
dotenv.config()
=======
import { createStore } from "redux";
import dotenv from "dotenv";
dotenv.config();
>>>>>>> 0b9c742151c5d42d00f0473c44196005b35740ae

//Actions
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";


export const signIn = (token, usertype, id) => {
  return {
    type: SIGN_IN,
    token: token,
    usertype: usertype,
    id: id
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//Reducer
const initialState = {
  token: null,
  usertype: null,
  id: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        token: action.token,
        usertype: action.usertype,
        id: action.id
      });
    case SIGN_OUT:
      return Object.assign({}, state, {
        token: null,
        usertype: null
      });
    default:
      return state;
  }
}

//Store
const store = createStore(reducer);

export default store;
