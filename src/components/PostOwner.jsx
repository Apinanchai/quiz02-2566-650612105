"use clinent";

import React, { useState } from "react";

export const PostOwner = ({ userImg, username, commentText, likeNum }) => {
  const userImg = "/profileImages/handsome1.jpg";
  const username = "Apinanchai yooyativong 650612105";
  const commentText = "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207";
  const likeNum = "100 คน";
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={userImg}
          // src="/profileImages/handsome1.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          {username}
          {/* Apinanchai yooyativong 650612105 */}
        </span>
      </div>

      <span className="text-white">
        {commentText}
        {/* Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207 */}
      </span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{likeNum}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
