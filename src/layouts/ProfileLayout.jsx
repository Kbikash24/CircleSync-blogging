import React, { useMemo, useState } from 'react'
import Navbar from '../components/Common/Navbar/Navbar'
import Profile from '../Pages/Profile'
import { getCurrentUser } from '../AuthApi/FIreStoreApi'

const ProfileLayout = () => {
    const[currentUser,setCurrentUser]=useState({})
    useMemo(()=>{
        getCurrentUser(setCurrentUser)
    },[])
  return (
    <div className='relative  '>
    <div className='mb-2 fixed w-screen'><Navbar currentUser={currentUser}/></div>
    <div className='py-24'><Profile currentUser={currentUser}/></div>
    </div>
  )
}

export default ProfileLayout