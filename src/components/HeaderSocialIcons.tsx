import { AiOutlineGithub } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeaderSocialIcons() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-fit mt-4 gap-2">
      <button
        onClick={() => {
          window.open("https://www.github.com/hariacharya80", "_blank");
        }}
        className="flex items-center gap-2 hover:bg-gray-800 transition-colors duration-150 bg-black w-full text-white rounded-xl px-8 py-2"
      >
        <AiOutlineGithub />
        GitHub
      </button>
      <button
        onClick={() => {
          window.open("https://leetcode.com/harryacharya2003/");
        }}
        className="hover:bg-gray-800 transition-colors duration-150 flex items-center gap-2 bg-black w-full text-white rounded-xl px-8 py-2"
      >
        <SiLeetcode />
        Leetcode
      </button>
      <button
        onClick={() => {
          window.open("tel:+977-9849951111");
        }}
        className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 transition-colors duration-150 rounded-xl w-full px-8 py-2"
      >
        <FaWhatsappSquare />
        {"Contact"}
      </button>
    </div>
  );
}

export default HeaderSocialIcons;
