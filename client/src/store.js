//Imports
import { createStore } from "redux";
import dotenv from 'dotenv'
dotenv.config()

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
      return {
        token: action.token,
        usertype: action.usertype,
        id: action.id
      };
    case SIGN_OUT:
      return {
        token: null,
        usertype: null
      };
    default:
      return state;
  }
}

//Store
const store = createStore(reducer);

export default store;
