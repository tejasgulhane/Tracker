import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { useContext ,useState } from 'react'
// import { Routes, Route } from "react-router-dom";
import AuthContext from '../store/auth-context';
import {Routes ,Route , Navigate} from 'react-router-dom'
import Welcome from './Welcome';
import { useSelector ,useDispatch } from 'react-redux';
import { authActions } from '../store/auth-reducer';


const HomePage = () => {
    const [forgotpass ,setforgotpass ] = useState(false)

    // const authctx = useContext(AuthContext);

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)


  return (
    <>
      <AuthForm />
     { isLoggedIn && <Navigate to={'/welcome'}/>} 
    </>
  )
}

export default HomePage