import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feedbar from "../../components/feedbar/Feedbar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Feedbar/>
        <Rightbar/>
      </div>
    
    </>
    
  )
}
