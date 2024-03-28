import React, { useState } from "react";
import { Modal, Button, Progress } from "antd";
import ReactQuill from 'react-quill';
import { RiImageAddFill } from "react-icons/ri";

const ModalComponet = ({
  isModalOpen,
  setIsModalOpen,
  setStatus,
  status,
  sendSatus,
  isEdit,
  updateStatus,
  setPostImage,
  uploadPostImage,
  postImage,
  currentPost,
  setCurrentPost,
}) => {
  const [progress, setProgress] = useState("0");
  return (
    <>
      <Modal
        title="Create a post"
        open={isModalOpen}
        onOk={() => {
          setStatus("");
          setIsModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        onCancel={() => {
          setStatus("");
          setIsModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        footer={[
          <Button
            onClick={isEdit ? updateStatus : sendSatus}
            key="post"
            className="  rounded-full shadow-lg bg-sky-400 shadow-slate-300"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </Button>,
        ]}
      >
        <div>
          <div>
           <textarea
              placeholder="What do you want to talk about?"
              
              type="text"
              className=" outline-none resize-none w-full h-full"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            ></textarea>
           
            {progress>0 ||progress==='100' && <div className="progress-bar flex justify-center">
                <Progress type="circle" percent={progress} size={90} />
              </div>
            } 
            {postImage?.length > 0 || currentPost?.postImage?.length ? (
              <img
                className="preview-image"
                src={postImage || currentPost?.postImage}
                alt="postImage"
              />
            ) : (
              <></>
            )}
            <input
              type="file"
              id="pic-upload"
              hidden
              onChange={(e) =>
                uploadPostImage(e.target.files[0], setPostImage, setProgress)
              }
            ></input>
            <label for="pic-upload">
              <RiImageAddFill
                className=" relative top-9"
                size={25}
                color="#0785F4"
              />
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalComponet;
