import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";
import FollowingFriends from "../followingFriends/FollowingFriends";
import Add from "../add/Add";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" src="\assets\gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a Birthday today.
          </span>
        </div>
        <Add />
        {/* <img src="\assets\ad.png" alt="" className="rightbarAdd" /> */}

        <h4 className="rightbarTitle">Online Friend</h4>
        <div className="rightbarOnlineFriendListContainer">
          <ul className="rightbarOnlineFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTittle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">City : </span>
            <span className="rightbarInfoItemValue">Pune</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">From : </span>
            <span className="rightbarInfoItemValue">New Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoItemKey">Relationship : </span>
            <span className="rightbarInfoItemValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTittle">Your Friends</h4>
        <div className="rightbarFollowings">
          {Users.map((f) => (
            <FollowingFriends key={f.id} friends={f} />
          ))}

          {/* <div className="rightbarfollowing">
            <img
              src="assets/person/a.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/b.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/c.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/d.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/e.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/f.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/g.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/h.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="assets/person/i.jpeg"
              alt=""
              className="rightbarFollowingUserImage"
            />
            <span className="rightbarFollowingUserName">Taylor Swift</span>
          </div> */}
        </div>
        <Add />
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
