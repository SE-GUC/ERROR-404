//Imports
import { createStore } from 'redux';

//Actions
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

const signIn = (token, usertype) =>{
  return {
    type: SIGN_IN,
    token : token,
    usertype : usertype
};
}

const signOut = () =>{
  return {
    type: SIGN_OUT,
  };
}

//Reducer
const initialState = {
  token: null,
  usertype: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        token: action.token,
        usertype: action.usertype
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

const store = createStore(reducer)

export default store;