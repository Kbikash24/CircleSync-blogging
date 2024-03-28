import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import Login from '../Pages/Login'
import SignUp from '../components/SignUp'
import HomeLayout from '../layouts/HomeLayout'
import ProfileLayout from '../layouts/ProfileLayout'
import ConnectionLayout from '../layouts/ConnectionLayout'

export const router = createBrowserRouter([
    { path:'/',element:<Login/>},
    { path:'/signup',element:<SignUp/>},
    { path:'/home',element:<HomeLayout/>},
    { path:'/profile',element:<ProfileLayout/>},
    { path:'/network',element:<ConnectionLayout/>},

])