import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feedbar from "../../components/feedbar/Feedbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/h.jpeg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="assets/person/a.jpeg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <br />
            <div className="profileInfo">
              <h2 className="profileUserName">Taylor Swift</h2>
              <span className="profileUserInfo">Hello Friends, Its Me</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feedbar />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
