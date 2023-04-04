import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src="\assets\gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a Birthday today.
          </span>
        </div>
        <img src="\assets\ad.png" alt="" className="rightbarAdd" />

        <h4 className="rightbarTitle">Online Friend</h4>
        <div className="rightbarOnlineFriendListContainer">
          <ul className="rightbarOnlineFriendList">
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
            <li className="OnlineFriendList">
              <div className="onlineFriend">
                <img
                  className="onlineFriendImage"
                  src="\assets\person\c.jpeg"
                  alt=""
                />
                <span className="onlineLogo"></span>
                <span className="rightbarOnlineFriendName">Tanvay Kashyap</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
