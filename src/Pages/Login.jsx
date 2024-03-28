import React, { useEffect,useState } from 'react'
import LoginComp from '../components/LoginComp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Common/Loader/Loader'


function Login() {
  const [loading,SetLoading]=useState(true)
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
       if(res?.accessToken){
        navigate('/home')
       }
       else{
        SetLoading(false)
       }
    })
  },[])
  return (
    
   loading? <Loader/>: <LoginComp/>
  )
}

export default Login