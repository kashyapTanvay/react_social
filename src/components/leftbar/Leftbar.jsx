import "./leftbar.css";
import {
  Bookmarks,
  Chat,
  EventAvailable,
  Groups,
  LocalLibrary,
  QuestionAnswer,
  RssFeed,
  VideoLibrary,
  Work,
} from "@mui/icons-material";

export default function Leftbar() {
  return (
    <div className="leftBar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarListIcon" />
            <span className="leftbarListText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarListIcon" />
            <span className="leftbarListText">Chat</span>
          </li>
          <li className="leftbarListItem">
            <VideoLibrary className="leftbarListIcon" />
            <span className="leftbarListText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Groups className="leftbarListIcon" />
            <span className="leftbarListText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmarks className="leftbarListIcon" />
            <span className="leftbarListText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <QuestionAnswer className="leftbarListIcon" />
            <span className="leftbarListText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <Work className="leftbarListIcon" />
            <span className="leftbarListText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventAvailable className="leftbarListIcon" />
            <span className="leftbarListText">Events</span>
          </li>
          <li className="leftbarListItem">
            <LocalLibrary className="leftbarListIcon" />
            <span className="leftbarListText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
          <li className="leftbarFriend">
            <img
              src="/assets/person/a.jpeg"
              alt=""
              className="leftbarFriendImage"
            />
            <span className="leftbarFriendName">Tilak Raj</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
