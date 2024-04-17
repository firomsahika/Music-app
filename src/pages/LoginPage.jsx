import React, { useEffect } from 'react'
import { authenticateFailure,authenticateSuccess } from '../redux/feature/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {accessToken, error}  = useSelector((state)=>state.auth);
  
  const handleLogin = () =>{
    if(accessToken){
        dispatch({ type: 'AUTHENTICATE_REQUEST',payload:{
             CLIENT_ID : "6d1f8cab2aca4206a611e21b6af501d9",
             CLIENT_SECRET :"8421c653e4df439297b1330d665ec103",
             REDIRECT_URI :"http://localhost:5173/",
             AUTH_ENDPOINT :"https://accounts.spotify.com/authorize",
             RESPONSE_TYPE :"token"
        }})
    }else{
        dispatch(authenticateFailure({error}))
    }
  }
  useEffect(()=>{
    if(accessToken){
       navigate('/home')
        console.log("Redirecting ti Home page!")
    }
  },[ accessToken, navigate])


  return (
    <div>
       <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
