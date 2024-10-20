import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return <nav className="flex items-center justify-between py-3 mb-15 ">
    <div className="flex items-center flex-shrink-0 size-40">
        <img className="w-12 mx-2 size-5xl" src={logo} alt="logo"/>
    </div>
    <div className="flex items-center justify-center gap-10 m-6 text-3xl">
      <a href="https://github.com/amansingh5ba2004" className="">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/aman-singh-16273727a/">
        <FaLinkedin  />
      </a>
        <a href="https://x.com/AMANSIN81238414">
        <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/_amansingh1007_/?hl=en">
        <FaInstagram  />
        </a>
    </div>
  </nav>
}

export default Navbar
