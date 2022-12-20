import React from 'react'
import { types } from '../types/types';

// const initialState = {
//     logged: false,
//     name:'Mario'    
// }

export const authReducer = (state={},action) => {
 

switch (action.types) {
    case types.login:
        
        return{
            ...state,
            logged:true,
            user:action.payload,

        };

        case types.logout:
            return{
                logged:false,
            

            }


    default:
        return state;
}


}
