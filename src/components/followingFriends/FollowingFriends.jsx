import "../followingFriends/followingFriends.css";

export default function FollowingFriends({ friends }) {
  return (
    <div className="rightbarfollowing">
      <img
        src={friends.profilePicture}
        alt=""
        className="rightbarFollowingUserImage"
      />
      <span className="rightbarFollowingUserName">{friends.userName}</span>
    </div>
  );
}
