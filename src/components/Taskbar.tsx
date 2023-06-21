import { NavLink } from "react-router-dom"
import { BsTwitter,BsInstagram,BsGithub,BsDiscord,BsPlusCircle } from "react-icons/bs"
const Taskbar = () => {
  return (
    <div className="taskbar">
      <NavLink to='/twitter'><BsTwitter/></NavLink>
      <NavLink to='/insta' ><BsInstagram/></NavLink>
      <NavLink to='/github'><BsGithub/></NavLink>
      <NavLink to='/discord'><BsDiscord/></NavLink>
      <NavLink to='/add'><BsPlusCircle/></NavLink>
    </div>
  )
}

export default Taskbar