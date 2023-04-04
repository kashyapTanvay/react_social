import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feedbar.css";

export default function Feedbar() {
  return (
    <div className="feedBar">
      <div className="feedbarWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
