export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

export const signIn = (email,password)=>{
    return {
        type : SIGN_IN,
        async : true,
        httpMethodToInvoke : authenticate,
        params : [email,password]
    }
}



export const signOut = ()=>{
    return{
        type : SIGN_OUT,
        async : false
    }
}

