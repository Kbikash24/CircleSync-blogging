import React, { useMemo, useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { getSingleStatus, getSingleUser } from "../../../AuthApi/FIreStoreApi";
import Postcard from "../Postcad/Postcard";
import { useLocation } from "react-router-dom";
import { FileUplaodModal } from "../FileUploadModal/FileUplaodModal";
import { uploadImage as uploadImageAPI } from "../../../AuthApi/ImageUpload";
import { MdEmail } from "react-icons/md";

const ProfileCard = ({ currentUser, onEdit }) => {
  const location = useLocation();
  const [allStatus, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const getImage = (e) => {
    setCurrentImage(e.target.files[0]);
  };

  const uploadImage = () => {
    uploadImageAPI(
      currentImage,
      currentUser.id,
      setModalOpen,
      setProgress,
      setCurrentImage
    );
  };

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location.state.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location.state.email);
    }
  }, [location?.state?.id, location?.state?.email]);

  return (
    <>
      {currentUser?.id === location.state?.id && (
        <FileUplaodModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          getImage={getImage}
          uploadImage={uploadImage}
          progress={progress}
        />
      )}
      <div className=" border mb-2 m-auto lg:w-[42rem] w-[21rem]  bg-white shadow-lg shadow-blue-400">
        <div className=" p-4 rounded-lg shadow-md ">
          {currentUser?.id === location.state?.id && (
            <div
              className="text-[22px] flex justify-end cursor-pointer"
              onClick={onEdit}
            >
              <FaRegPenToSquare />
            </div>
          )}
          <div className="flex gap-6 items-center border-b-[2px] ">
            <div
              className=" lg:w-40 md:w-40 w-20 cursor-pointer border-slate-500  p-1 m-4 flex justify-center items-center border rounded-full lg:h-40 md:h-40  overflow-hidden  "
              onClick={() => setModalOpen(true)}
            >
              <img
                src={
                  Object.values(currentProfile).length === 0
                    ? currentUser.imageLink
                    : currentProfile?.imageLink
                }
                alt=""
                className=" lg:h-full lg:w-full w-[5rem] h-[4rem] rounded-full "
              />
            </div>
            <div className=" lg:w-fit flex flex-col gap-1 justify-between items-start">
              <h1 className=" lg:text-[25px] md:text-[25px] text-[15px] font-semibold text-center">
                {Object.values(currentProfile).length === 0
                  ? currentUser.name
                  : currentProfile?.name}
              </h1>
              <p className="text-gray-600 text-center text-[15px] ">
                {Object.values(currentProfile).length === 0
                  ? currentUser.headline
                  : currentProfile?.headline}
              </p>
              <p className="text-[14px] text-slate-500  text-center">
                {Object.values(currentProfile).length === 0
                  ? currentUser.location
                  : currentProfile?.location}
              </p>
              <div className="flex items-center text-slate-500 gap-2">
                <MdEmail />
                <p className="text-[16px] text-slate-500 ">
                  {Object.values(currentProfile).length === 0
                    ? currentUser.email
                    : currentProfile?.email}
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5 text-[14px] font-family:sans;">
            About:
            <p>
              {Object.values(currentProfile).length === 0
                ? currentUser.about
                : currentProfile?.about}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        {allStatus.map((posts) => (
          <div key={posts.id}>
            <Postcard posts={posts} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
