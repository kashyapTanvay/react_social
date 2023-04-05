import "../online/online.css";

export default function Online({ user }) {
  return (
    <div>
      <li className="OnlineFriendList">
        <div className="onlineFriend">
          <img className="onlineFriendImage" src={user.profilePicture} alt="" />
          <span className="onlineLogo"></span>
          <span className="rightbarOnlineFriendName">{user.userName}</span>
        </div>
      </li>
    </div>
  );
}
