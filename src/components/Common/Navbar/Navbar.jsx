import React, { useState, useMemo, useEffect } from "react";
import Search from "../Search/Search";
import {
  MdBusinessCenter,
  MdComment,
  MdNotifications,
  MdOutlineHome,
  MdOutlinePeople,
  MdSearch,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Profilepopup from "../profilepopup/Profilepoup";
import { getCurrentUser,getAllUsers } from "../../../AuthApi/FIreStoreApi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [fileteredUsers,setFilteredUsers]=useState([])
  const [users,setUsers]=useState([])
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchInput !== "") {
      let searched = users.filter((user) => {
        return Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredUsers(searched);
    } else {
      setFilteredUsers(users);
    }
  };
  
  const openUser = (user) => {
    navigate("/profile", {
      state: {
        id: user.id,
        email: user.email,
      },
    });
  };

  

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  
  const gotoRoute = (route) => {
    navigate(route);
  };

  useEffect(()=>{
    getAllUsers(setUsers)
  },[])

useEffect(()=>{
  let debounced=setTimeout(()=>{
    handleSearch()
  },1000)
  return ()=>clearTimeout(debounced)
},[searchInput])

  return (
    <>
      <div className="  w-full  bg-blue-400 shadow-lg static ">
        <div className=" flex lg:justify-between md:justify-between items-center border-b ">
          <div className="lg:w-1/6 md:w-1/6 pl-5 flex items-center text-[20px] ">
            <p className="font-bold">Circle</p>
            <p className="text-slate-500 text-lg ">Sync</p>
          </div>

          <div className=" flex justify-between items-center lg:w-10/12  md:w-10/12  p-2 m-1">
            <div className=" flex items-center outline-none px-1 text-[13px] h-[30px] ">
              {isSearch ? (
                <Search
                  setIsSearch={setIsSearch}
                  setSearchInput={setSearchInput}
                />
              ) : (
                <MdSearch size={"30px"} onClick={() => setIsSearch(true)} />
              )}
            </div>

            {/* Mobile */}

            <div className=" flex justify-between items-center  w-1/3 ">
              <div className="px-2 py-1 text-xl hover:bg-sky-100 duration-300  rounded-full">
                <MdOutlineHome color="" onClick={() => gotoRoute("/home")} />
              </div>
              <div
                className="px-2 text-xl py-1 hover:bg-sky-100 duration-300   rounded-full"
                onClick={() => gotoRoute("/network")}
              >
                <MdOutlinePeople />
              </div>
              <div
                className="px-2  py-1 text-xl  hover:bg-sky-100 duration-300 rounded-full"
                onClick={() => gotoRoute("/jobs")}
              >
                <MdBusinessCenter />
              </div>
              <div className="px-2 py-1 text-xl  hover:bg-sky-100 duration-300   rounded-full">
                <MdComment />
              </div>
              <div className="text-xl  hover:bg-sky-100 duration-300 rounded-full py-1 px-2">
                <MdNotifications />
              </div>
              <div
                className="mr-5 Profile w-10 h-10 rounded-full border-[1px] "
                onClick={() => setIsOpen(true)}
              >
                <img
                  src={currentUser.imageLink}
                  className="w-full h-full rounded-full  hover:transparent  duration-300"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {searchInput.length === 0 ? (
          <></>
        ) : (
          <div className=" w-[230px] border-2 absolute left-9 top-[70px] bg-blue-50 shadow-lg shadow-blue-300 p-1 ">
            {fileteredUsers.length===0?<div>No result....</div>:fileteredUsers.map((user)=>{
              return <div className="flex items-center border-b text-[14px] cursor-pointer p-1 px-4 gap-5 hover:bg-white duration-300" onClick={()=>openUser(user)}>
                <img src={user.imageLink} className="w-[3rem] h-[3rem] rounded-full"></img>
              <p>{user.name}</p></div>
            })}
          
           
          </div>
        )}
      </div>
      {isOpen && <Profilepopup handleClose={handleClose} />}
    </>
  );
}

export default Navbar;
