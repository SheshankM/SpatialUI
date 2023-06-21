
import { BsTwitter } from "react-icons/bs"
import {TbSmartHome} from "react-icons/tb"
import {FiSearch,FiMail} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import {MdOutlineBookmarks} from "react-icons/md"
import {BsPeople,BsThreeDots} from "react-icons/bs";
import {LuVerified} from "react-icons/lu"
import "./twitter.css"
import TweetBox from "../../components/TweetBox"
const Twitter = () => {
  return (
    <div className="twitter">
      <div className="sidedock">
        <div className="social"><BsTwitter/></div>
        <div className="social-options">
          <TbSmartHome/>
          <FiSearch/>
          <BiBell/>
          <FiMail/>
          <MdOutlineBookmarks/>
          <CgProfile/>
          <LuVerified/>
          <BsPeople/>
          <BsThreeDots/>
        </div>
      </div>
      <div className="mainbar">
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
       <TweetBox/>
      </div>
      <div className="sidebar"></div>
    </div>
  )
}

export default Twitter