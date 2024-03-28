import React, { useEffect, useState } from "react";
import { addConnection, getAllUsers } from "../AuthApi/FIreStoreApi";
import ConnectedUsers from "./Common/ConnectedUsers/ConnectedUsers";
const ConnectionComponent = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <>
      <div className="">
        
        {users.map((user) => {
          return user.id === currentUser.id ? (
            <></>
          ) : (
            <div className=" lg:mx-[20rem]"> <ConnectedUsers
          
            user={user}
            getCurrentUser={getCurrentUser}
            currentUser={currentUser}
          /></div>
           
          );
        })}
      </div>
    </>
  );
};

export default ConnectionComponent;
