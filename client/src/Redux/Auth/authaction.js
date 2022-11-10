export const lOGIN_SUCCESS="lOGIN_SUCCESS";
export const lOGOUT_SUCCESS="lOGOUT_SUCCESS";

export const loginSuccess=(payload)=>{
    return{
        type:lOGIN_SUCCESS,
        payload
    }
}
export const logoutSuccess=(payload)=>{
    return{
        type:lOGOUT_SUCCESS,
        payload:null
    }
}   