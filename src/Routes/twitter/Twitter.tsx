
import { BsTwitter } from "react-icons/bs"
import {TbSmartHome} from "react-icons/tb"
import {FiSearch,FiMail} from "react-icons/fi"
import {BiBell} from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import {MdOutlineBookmarks} from "react-icons/md"
import {BsPeople,BsThreeDots} from "react-icons/bs";
import {LuVerified} from "react-icons/lu"
import "./twitter.css"
import { useState } from "react"
const Twitter = () => {
  const [click,setClicked] = useState(false);
  return (
    <div className={click? "twitter tilted": "twitter"}>
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
        <button onClick={()=>setClicked(true)}>click</button>
      </div>
      <div className="sidebar"></div>
    </div>
  )
}

export default Twitter