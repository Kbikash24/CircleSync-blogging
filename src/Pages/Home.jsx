import React, { useEffect,useState} from 'react'
import HomeComp from '../components/HomeComp'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Firebase/FirebaseConfig'
import Loader from '../components/Common/Loader/Loader'



function Home({currentUser}) {
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

  return loading? <Loader/>: <div className='mt-10' ><HomeComp  currentUser={currentUser}/></div>
  
}

export default Home