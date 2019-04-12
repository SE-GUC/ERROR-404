//Imports
const redux = require ('redux')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios')
dotenv.config()

//MiddleWare
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
  
const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }


//Actions
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

function signIn(email,password){
    return {type : SIGN_IN , email , password}
}

function signOut(){
    return{type : SIGN_OUT}
}

//Reducer
const initialState = {
    token : null,
    usertype : null
}

 function reducer (state = initialState , action){
    let newstate = {... state};
    switch(action.type){
        case SIGN_IN :
            authenticate(action.email,action.password).then(res=>{
                newstate.token = res.token
                newstate.usertype = res.type
            })
            console.log(newstate)
            return newstate
        case SIGN_OUT :
         return {
             token : null,
             usertype : null
         }
     default :
         return state

    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(logger, crashReporter))
//Testing
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // Dispatch some actions
store.dispatch(signIn('mena.fadali@student.guc.edu.eg','password'))
// store.dispatch(signOut())
// store.dispatch(signIn('Learn about actions','bla bla'))
 
// unsubscribe()

//Authentication
async function authenticate(email, password ) {
    const Users = await axios.get("http://localhost:5000/api/Users")
    const user = await Users.data.data.find(u => u.email === email);;
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user._id }, process.env.secret);
        const type = user.type
        return {
            token : token,
            type : type
        };
    }
    return {
        token : null,
        type : null
    }
}
module.exports = store