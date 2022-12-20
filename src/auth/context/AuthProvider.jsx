import { useReducer } from 'react';
import { AuthContext } from '../context/AuthContext'
import { types } from '../types/types';
import { authReducer } from './authReducer';

//  const initialState = {
//      logged: false,
//      name:'Mario'    
//  }

 const init = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
 
  return{
    logged:!!user,
    user:user,
  }

 }

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {} ,init)

    const login =  (name= '') =>{

      const user ={ id: 'ABC',name  }

      const action ={
        types:types.login,
        payload:{
          id:'ABC',
          name:name,
        }
      }
      localStorage.setItem('user',JSON.stringify(user))
      dispatch(action);
    }

    const logOut = () =>{
      localStorage.removeItem('user')
      const action ={
        types:types.logout
      };
      dispatch(action)
    }

  return (

    <AuthContext.Provider value={{...authState,login,logOut}}>
        {children}
    </AuthContext.Provider>

  );
}
