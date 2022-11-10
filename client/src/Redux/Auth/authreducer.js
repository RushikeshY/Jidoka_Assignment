import { lOGIN_SUCCESS, lOGOUT_SUCCESS } from "./authaction";

const init={
    isAuth:false,
    token:null
}

export const isAuthReducer=(state=init,{type,payload})=>{
    switch (type) {
        case lOGIN_SUCCESS:
            return{
                ...state,
                isAuth:true,
                token:payload
            }
        case lOGOUT_SUCCESS:
            return{
                ...state,
                isAuth:false,
                token:payload
            }
            
    
        default:
            return state
    }
}