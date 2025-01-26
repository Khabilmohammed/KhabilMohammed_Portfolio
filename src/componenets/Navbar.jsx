import logo from "../assets/3f780f5f2a7e28b898fe6baa45ca1e97.png"; 
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-24 text-white" src={logo} alt="logo"  />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
        <a href="https://www.linkedin.com/in/khabil-mohammed-07976223b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/Khabilmohammed" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://x.com/KhabilMohammed?t=3VHHL6kTe2fDB-CBGEBTuA&s=09" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/khbbil_cru_zez?igsh=MTVqenZjand0ZWNodg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        </div>
    </nav>
  )
}

export default Navbar