import React, { useEffect,useState } from "react";
import { getConnections } from "../../../AuthApi/FIreStoreApi";

const ConnectedUsers = ({ user, getCurrentUser ,currentUser}) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(()=>{
    getConnections(currentUser.id,user.id,setIsConnected)
  },[currentUser.id,user.id])
  return isConnected?(<></>):(
    <><div className="border m-2 p-2  items-center shadow-blue-300 shadow-lg flex justify-between gap-2 " >
    <img src={user.imageLink} className=" w-20 h-20 rounded-full"></img>
    <div> <p className="">{user.name}</p> <p className="text-[13px]">{user.location}</p></div>
   
    <button onClick={()=>getCurrentUser(user.id)} className="border h-10 bg-blue-400 px-2 m-2">Connect</button>
  </div>
  
  </>
    
  );
};

export default ConnectedUsers;
