//Reducer
export const initialState = {
    token : null,
    usertype : null
}

export default  (state = initialState , action)=>{
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
