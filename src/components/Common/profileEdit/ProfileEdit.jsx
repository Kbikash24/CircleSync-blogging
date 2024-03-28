import React, { useState } from "react";
import { editprofile } from "../../../AuthApi/FIreStoreApi";

const ProfileEdit = ({ onEdit,currentUser }) => {
  const [editInput, setEditInputs] = useState(currentUser);
  const getInput = (e) => {
    const{name,value}=e.target;
    const input={[name]:value}
    setEditInputs({...editInput,...input})
   }
  const updateProfileData=async()=>{
 await editprofile(currentUser?.id,editInput)
 await onEdit();
  }
  return (
    <>
      <div className=" lg:max-w-[500px] max-w-[300px]   m-auto border mt-24 p-4 mb-10 shadow-lg shadow-blue-300">
        <div className="flex flex-col space-y-4">
          <button
            className="flex border max-w-fit p-1 cursor-pointer shadow-sm bg-slate-100 px-1 text-[12px]"
            onClick={onEdit}
          >
            Go back
          </button>
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="w-1/4 text-gray-700 text-sm font-bold mr-2"
            >
              Name:
            </label>
            <input
              className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={getInput}
              name="name"
              value={editInput.name}
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="w-1/4 text-gray-700 text-sm font-bold mr-2"
            >
              Headline:
            </label>
            <input
              className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Headline"
              onChange={getInput}
              name="headline"
              value={editInput.headline}
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="text"
              className="w-1/4 text-gray-700 text-sm font-bold mr-2"
            >
              Location:
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Location"
              onChange={getInput}
              name="location"
              value={editInput.loaction}
            />
          </div>
          

          <div className="flex items-center">
            <label
              htmlFor="College"
              className="w-1/4 text-gray-700 text-sm font-bold mr-2"
            >
             Email :
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             type="email"
              placeholder="Email"
              onChange={getInput}
              name="email"
              value={editInput.email}
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="phone"
              className="w-1/4 text-gray-700 text-sm font-bold mr-2"
            >
              About:
            </label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             
              type="text"
              placeholder="About yourself"
              onChange={getInput}
              name="about"
              value={editInput.about}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4 bg-blue-400  shadow-md cursor-pointer" onClick={updateProfileData}>
          <button className="p-2 ">Save</button>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
