import React, { useEffect, useMemo, useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Assuming you have Font Awesome icons
import { MdOutlineClose } from "react-icons/md";
import { onLogout } from "../../../AuthApi/LoginApi";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../AuthApi/FIreStoreApi";

const Profilepopup = ({ handleClose }) => {
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState({});
  
  useEffect( () => {
  getCurrentUser(setcurrentUser);

  }, []); // Include getCurrentUser as a dependency
 console.log(currentUser.id)
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50  flex justify-end items-start">
        <div className="bg-white rounded-lg shadow-lg p-4 m-2">
          <h3 className="  mb-2 border-b">Profile</h3>
          <ul className="list-none space-y-2">
            {/* Add other profile options here if needed */}
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-sky-500 text-[13px]"
                onClick={() =>
                  navigate("/profile", { state: { id: currentUser?.id } })
                }
              >
                <FaUserCircle className="mr-2 h-5 w-4" /> View Profile
              </button>
            </li>
            <li>
              <button
                className="flex items-center text-gray-700 hover:text-red-500 text-[13px]"
                onClick={onLogout}
              >
                <FaSignOutAlt className="mr-2 w-4 h-5" /> Logout
              </button>
            </li>
          </ul>
          <button
            className="mt-4 text-center text-sm font-bold bg-sky-500 text-white rounded-full p-2 hover:bg-sky-600"
            onClick={handleClose}
          >
            <MdOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default Profilepopup;
