"use client";

import { PostOwnerComponent } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
import { useState } from "react";
import { Updock } from "next/font/google";
import { comments } from "@/libs/comments";

export default function HomePage() {
  const [userOwners, setuserOwners] = useState(null);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        {postOwners.map((userOwner) => (
          <PostOwnerComponent
            username={PostOwner.username}
            commentText={PostOwner.commentText}
            likeNum={PostOwner.likeNum}
            userImagePath={PostOwner.userImg}
            key={PostOwner.username}
          />
        ))}

        {/* Comment Example */}
        {UserComments.map((comments) => (
          <Comment
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            userImagePath={comments.userImg}
          />
        ))}
        {/* Reply Example */}
        {UserReply.map((Replys) => (
          <Reply
            username={Replys.username}
            replyText={Replys.commentText}
            likeNum={Replys.likeNum}
            userImagePath={Replys.userImg}
          />
        ))}
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
