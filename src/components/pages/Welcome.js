import React, { useContext } from 'react'
import { useState } from 'react'
import Profilepage from './Profilepage'
import AuthContext from '../store/auth-context'
import {Routes ,Route} from 'react-router-dom'
import HomePage from './Homepage'
import ExpenseForm from '../expensse/ExpenseForm'
import { authActions } from '../store/auth-reducer'
import { useDispatch, useSelector } from "react-redux";

const Welcome = () => {
    // const authctx =useContext(AuthContext);

    const dispatch=useDispatch()

    const islogout = useSelector( state => state.auth.logout)

    const userIdToken = useSelector(state=>state.auth.idToken);

    const isEmailVerified = useSelector(state=>state.auth.isEmailVerified);
    // const islogout =useSelector( state => state.auth.islogout)

    const [isclicked,setisclicked] =useState(false);
    // const [islogout,setislogout] =useState(false);



 const profilecompletehandler = () =>{
    setisclicked(true)
 }

 const verifyemail = () =>{
  

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=
    AIzaSyDJzFGMehDL_Sv8YBjxCcs1Ox2VjgMBPG4`
    ,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: userIdToken,
          requestType:"VERIFY_EMAIL"
        }),
    }).then(res => console.log(res))
 }



      const logout = () =>{
        dispatch(authActions.logout())
        userIdToken=""
      }



  return (
    <>
         <Routes>
          { islogout && <Route path="/" element={<HomePage />} /> }

         </Routes>

           { !islogout && 
              <div className='head'>
          <div>Welcome To Expense Tracker</div>
          <button onClick={logout}>Logout</button>
          <div>Your Profile is  64% COMPLETE <button onClick={profilecompletehandler}>Complete Now</button></div>
          { isclicked && <Profilepage />}

            <div><button onClick={verifyemail}>Verify Email</button></div>
            <ExpenseForm />
          </div>
  
                  }
    </>
  )
}

export default Welcome