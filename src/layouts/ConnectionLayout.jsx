import React, { useMemo, useState } from "react";
import Connections from "../Pages/Connections";
import { getCurrentUser } from "../AuthApi/FIreStoreApi";
import Navbar from "../components/Common/Navbar/Navbar";


const ConnectionLayout = () => {
  const [currentUser,setCurrentUser]=useState({})
  useMemo (()=>{
    getCurrentUser(setCurrentUser);
  },[])
  return (
    <>
   <div className="relative h-screen">
      <div className="fixed w-screen top-0"> <Navbar /></div>
      <div className="pt-[100px] ">   <Connections currentUser={currentUser}/></div>
     
      </div>
    </>
  );
};

export default ConnectionLayout;
