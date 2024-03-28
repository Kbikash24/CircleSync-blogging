import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LikeButton from "../Likebuttton/LikeButton";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../AuthApi/FIreStoreApi";
import { IoPencil, IoTrashBinOutline } from "react-icons/io5";
import SizeContext from "antd/es/config-provider/SizeContext";

const Postcard = ({ posts, id, getEditData }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections(currentUser.id, posts.userId, setIsConnected);
  }, [currentUser.id, posts.userId]);

  return isConnected || currentUser.id === posts.userId ? (
    <div
      className=" bg-white rounded-lg shadow-md flex  flex-col overflow-hidden lg:w-[42rem] m-auto p-1 mb-2 border-[1px] w-[21rem]"
      key={id}
    >
      <div className="flex items-center px-4 py-3 ">
        <img
          src={
            allUsers
              .filter((item) => item.id === posts.userId)
              .map((item) => item.imageLink)[0]
          }
          alt="Profile picture"
          className="rounded-full w-10 h-10 mr-3 object-cover"
        />
        <div className="flex items-center">
          <a
            href="#"
            className="font-bold text-gray-700 mr-1 lg:text-[15px] text-[12px]"
            onClick={() =>
              navigate("/profile", {
                state: { id: posts?.userId, email: posts?.userEmail },
              })
            }
          >
            {allUsers.filter((user) => user.id === posts.userId)[0]?.name}
          </a>
          <span className="text-gray-500 text-xs  ">{posts.timeStamp}</span>
        </div>
        <div></div>
        {currentUser.id === posts.userId ? (
          <div className="  items-center  lg:flex ml-2 md:flex gap-5 flex">
            <FaPen onClick={() => getEditData(posts)} color="gray" />
            <MdDelete
              color="gray"
              size={20}
              onClick={() => {
                deletePost(posts.id);
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="p-1">
        <p className="text-gray-700 ">{posts.status}</p>

        {posts.postImage && (
          <img
            src={posts.postImage}
            alt=" "
            className="mt-4  w-full object-cover "
          />
        )}
      </div>

      <button className="text-gray-500 focus:outline-none">
        <div className="text-[30px] flex">
          <LikeButton
            userId={currentUser?.id}
            postsId={posts?.id}
            currentUser={currentUser}
          />
        </div>
      </button>
    </div>
  ) : (
    <></>
  );
};

export default Postcard;
