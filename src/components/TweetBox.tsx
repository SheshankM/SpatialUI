import "../components/styles/tweetbox.css"
import profile from "../assets/background1.jpg"
import {BsChat,BsThreeDots} from "react-icons/bs"
import {LuShare} from "react-icons/lu"
import { Tweets } from "../@types/twitter"
import {AiOutlineHeart,AiOutlineRetweet} from "react-icons/ai"
interface propsTypes{
  tweets: Tweets[],
  name: string
}

const TweetBox : React.FC<propsTypes>= ({tweets} ) => {
  return (
    <div className="tweet-box">
      <div className="profile-pic">
        <img src={profile} alt=""/>
      </div>
      <div className="tweet-body">
        <div className="username">
          <span>{tweets[0].name}</span><span className="unq">{tweets[0].username}</span>
        </div>
        <div className="tweet" >
          {tweets[0].tweet}
        </div>
        <div className="metrics">
          <div><BsChat/><span>{tweets[0].commentsCount}</span></div>
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