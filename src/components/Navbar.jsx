import logo from "../assets/nehanlogo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/loka-nehan-reddy-072087259/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition-colors duration-200" />
        </a>
        <a href="https://github.com/Nehanreddy" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition-colors duration-200" />
        </a>
        <a href="https://www.instagram.com/_nehan_reddy_796/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
