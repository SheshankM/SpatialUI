
import { useEffect, useState } from "react";
import "./instagram.css"
const Instagram = () => {
  const [dots, setdots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setdots((dots) =>{
        if (dots === "...") {
          return "";
        }
        return dots + ".";
    })
    },700)
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="insta">
      <div className="text">In Progress{dots}</div>
    </div>
  )
}

export default Instagram