import React, { useMemo, useState } from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../AuthApi/FIreStoreApi";
import Navbar from "../components/Common/Navbar/Navbar";


const HomeLayout = () => {
  const [currentUser,setCurrentUser]=useState({})
  useMemo (()=>{
    getCurrentUser(setCurrentUser);
  },[])
  return (
    <><div className="relative h-screen">  <div className="fixed top-0 w-full bg-white shadow-md">  <Navbar />
    </div>
    <div className="pt-[65px] ">  <Home currentUser={currentUser} />
    </div>
  </div>
  
    </>
  );
};

export default HomeLayout;
