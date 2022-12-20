import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

 const onLogin = () =>{
  const lastPath = localStorage.getItem('lastPath') || '/';
  login('Mario Alonso Mora')
  navigate(lastPath,{
    replace:true
  })
 }

  return (
    <div className='container'>

     <h1 className='animate__animated animate__fadeInRight text-primary '><strong>HEROES APP LOGIN </strong></h1>

     

      <button onClick={onLogin} className='animate__animated animate__fadeInRight btn btn-primary mt-3 text-dark'>Login</button>
    </div>
    
  )
}


