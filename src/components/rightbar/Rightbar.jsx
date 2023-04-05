import { Users } from "../../dummyData";
import Online from "../online/Online";
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
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
