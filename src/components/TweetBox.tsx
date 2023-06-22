import "../components/styles/tweetbox.css"
import profile from "../assets/background1.jpg"
import {BsChat,BsThreeDots} from "react-icons/bs"
import {LuShare} from "react-icons/lu"

import {AiOutlineHeart,AiOutlineRetweet} from "react-icons/ai"
const TweetBox = () => {
  return (
    <div className="tweet-box">
      <div className="profile-pic">
        <img src={profile} alt=""/>
      </div>
      <div className="tweet-body">
        <div className="username">
          <span>SheshankM8</span><span className="unq">@shank__it</span>
        </div>
        <div className="tweet" >
          Another day another ui kit
        </div>
        <div className="metrics">
          <div><BsChat/><span>16</span></div>
          <div><AiOutlineRetweet/></div>
          <div><AiOutlineHeart/></div>
          <div><LuShare/></div>
        </div>
      </div>
      <div className="tweet-dots">
      <BsThreeDots/>
      </div>
    </div>
  )
}

export default TweetBox