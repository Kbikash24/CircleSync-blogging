import React, { useEffect,useState} from 'react'
import ConnectionComponent from '../components/ConnectionComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Firebase/FirebaseConfig'
import Loader from '../components/Common/Loader/Loader'



function Connections({currentUser}) {
    const [loading,SetLoading]=useState(true)
    const navigate=useNavigate()
useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
        if(!res?.accessToken){
            navigate('/')
        }
        else{
            SetLoading(false)
           }
        
    });
},[])

  return loading? <Loader/>: <div ><ConnectionComponent  currentUser={currentUser}/></div>
  
}

export default Connections