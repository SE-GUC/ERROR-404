//Imports
const redux = require ('redux')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios')
dotenv.config()

//MiddleWare
const asyncActionsMiddleware = store => next => action => {
    const isActionAsync = action.async;
    if (!isActionAsync) {
        return next(action);
    }
    else {
        const {httpMethodToInvoke, params, type} = action;
        httpMethodToInvoke(...params)
            .then(resultsObj => {
                const successType = generateSuccessActionTypeName(type);
                Promise.resolve(1).then(() => {
                    return next({
                        type : successType,
                        token : resultsObj.token,
                        usertype : resultsObj.usertype
                    })
            });
            })
            .catch(err => {
                console.log(err);
                const errorType = generateErrorActionTypeName(type);
                Promise.resolve(1).then(() => store.dispatch({type: errorType, err}));
            });  
    }
};

const generateSuccessActionTypeName = (basicActionName) => `${basicActionName}_SUCCESS`;
const generateErrorActionTypeName = (basicActionName) => `${basicActionName}_ERROR`;


//Actions
const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

function signIn(email,password){
    return {
        type : SIGN_IN,
        async : true,
        httpMethodToInvoke : authenticate,
        params : [email,password]
    }
}



function signOut(){
    return{
        type : SIGN_OUT,
        async : false
    }
}

//Reducer
const initialState = {
    token : null,
    usertype : null
}

 function reducer (state = initialState , action){
    let newstate = {... state};
    switch(action.type){
        case SIGN_IN_SUCCESS :
           return {
            token : action.token,
            usertype : action.usertype
            }
        case SIGN_OUT :
            return {
             token : null,
             usertype : null
            }
     default :
            return newstate

    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(asyncActionsMiddleware))
//Testing
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // Dispatch some actions
store.dispatch(signIn('mena.fadali@student.guc.edu.eg','password'))
// console.log(store.getState())
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
            usertype : type
        };
    }
    return {
        token : null,
        usertype : null
    }
}
module.exports = store