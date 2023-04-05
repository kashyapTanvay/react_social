import "./post.css";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  let likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postUserImage"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].userName}
            </span>
            <span className="postTime">Few minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postOption" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp
              htmlColor="Blue"
              className="postLikeIcon"
              onClick={likeHandler}
            />
            <Favorite htmlColor="Red" className="postLikeIcon" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCount">
              {post.comment} people have commented
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
