import { React } from "react";
import { useState } from "react";
import {
  postStatus,
  getPosts,
  updatePost,
} from "../../../AuthApi/FIreStoreApi";
import { FaPlus } from "react-icons/fa";
import ModalComponet from "../Modal/Modals";
import { useMemo } from "react";
import { getUniqueId } from "../../../Helper/GetUniqueId";
import Postcard from "../Postcad/Postcard"
import { getCurrentTimestamp } from "../../../Helper/UseMoment";
import { uploadPostImage } from "../../../AuthApi/ImageUpload";

const PostUpdate = ({ currentUser }) => {
  let userEmail = localStorage.getItem("userEmail");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allstatus, setAllstatus] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const [postImage, setPostImage] = useState("");

  const sendSatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimestamp("LLL"),
      userEmail: currentUser.email,
      UserName: currentUser.name,
      PostId: getUniqueId(),
      userId: currentUser.id,
      postImage:postImage,
    };
    await postStatus(object);
    await setIsModalOpen(false);
    setIsEdit(false);
    await setStatus("");
  };

  const getEditData = (posts) => {
    setIsModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status,postImage);
    setIsModalOpen(false);
  };

  useMemo(() => {
    getPosts(setAllstatus);
  }, []);
  return (
    <div className=" p-2 ">
      <div className="p-4 border lg:w-[42rem] w-[21rem] m-auto shadow-blue-300 shadow-lg">
        <img src={currentUser.imageLink} className="w-[8rem] h-[8rem] rounded-full m-auto mt-[-50px]"/>
        <p className="text-center font-bold text-[20px]">{currentUser.name}</p>
        <p className="text-center text-gray text-[17px]" >{currentUser.headline}</p>
      </div>
      <div className=" flex items-center justify-center overflow-hidden">
        <div className="p-4 border-[1px] rounded-lg flex items-center shadow-lg lg:w-[42rem] bg-white w-[21rem] my-2">
          <img
            src={currentUser.imageLink}
            alt="Profile picture"
            className="rounded-full w-10 h-10 mr-3 obeject-cover"
          />
          {/* Remove inline width and height */}
          <div
            onClick={() => {
              setIsEdit(false);
              setIsModalOpen(true);
            }}
            className=" justify-between w-full border-[1px] px-5  py-2  flex items-center text-slate-500 hover:translate-y-1 duration-300 shadow-lg"
          >
            <button className="px-2">Start a post</button>
            <FaPlus color="black" />
          </div>
        </div>
      </div>

      <ModalComponet
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setStatus={setStatus}
        status={status}
        sendSatus={sendSatus}
        isEdit={isEdit}
        updateStatus={updateStatus}
        uploadPostImage={uploadPostImage}
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
        postImage={postImage}
        setPostImage={setPostImage}
      />
      {allstatus.map((posts) => {
        return (
          <div key={posts.id}>
            <Postcard  posts={posts} getEditData={getEditData}  />
          </div>
        );
      })}
    </div>
  );
};

export default PostUpdate;
