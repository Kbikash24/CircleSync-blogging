import React, { useMemo, useState } from "react";
import { AiFillLike, AiFillMessage, AiFillSwitcher } from "react-icons/ai";
import {
  getComments,
  getLikesByUser,
  likePost,
  postComment,
} from "../../../AuthApi/FIreStoreApi";
import { getCurrentTimestamp } from "../../../Helper/UseMoment";

const LikeButton = ({ userId, postsId, currentUser }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setliked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleLike = () => {
    likePost(userId, postsId, liked);
  };
  const getComment = (e) => {
    setComment(e.target.value);
  };
  
  const addComment = () => {
    postComment(
      postsId,
      comment,
      getCurrentTimestamp("LLL"),
      currentUser?.name,
    );
    setComment("");
  };
  useMemo(() => {
    getLikesByUser(userId, postsId, setliked, setLikesCount);
    getComments(postsId, setComments);
  }, [userId, postsId]);
  return (
    <div className="border w-full p-2 ">
      <div className="flex justify-between">
        <div className="flex hover:text-black">
          <AiFillLike onClick={handleLike} />
          <span className="text-[20px]">{likesCount}</span>
        </div>

        <AiFillMessage onClick={() => setShowCommentBox(!showCommentBox)} className=" hover:text-black"/>
        <AiFillSwitcher />
      </div>
      {showCommentBox && (
        <div>
          <div className="flex  m-2   justify-between ">
            <input
              className="w-full border-[1px] outline-none border-sky-200 text-[14px] p-2"
              onChange={getComment}
              placeholder="Add a comment."
              value={comment}
              name="comment"
            ></input>
            <button
              className=" lg:text-[14px] text-[11px]  w-1/4 bg-sky-400 border-sky-400 text-slate-800"
              onClick={addComment}
            >
              Add Comment
            </button>
          </div>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className="flex flex-col  items-start   bg-slate-200 p-2 px-4">
                  <p className="text-[14px] font-bold">{comment.name}</p>
                  <div className="text-[14px] flex w-full  justify-between">
                    <p className="">{comment.comment}</p>
                    <p className="text-[12px]">{comment.timeStamp}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default LikeButton;
