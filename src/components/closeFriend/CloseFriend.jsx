import "../closeFriend/closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <div>
      <li className="leftbarFriend">
        <img src={user.profilePicture} alt="" className="leftbarFriendImage" />
        <span className="leftbarFriendName">{user.userName}</span>
      </li>
    </div>
  );
}
