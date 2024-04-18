import React, { useEffect } from 'react'
import { authenticateFailure,authenticateSuccess } from '../redux/feature/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { authenticateRequest } from '../redux/authSaga'


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

   const handleLogin = ()=>{
    dispatch(authenticateRequest);
   }
 


  return (
    <div>
       <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
