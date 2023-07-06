import { AiOutlineGithub } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function HeaderSocialIcons() {
  return (
    <div className="flex items-center justify-center md:justify-start mt-4 gap-2">
      <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4">
        <AiOutlineGithub />
        GitHub
      </button>
      <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4">
        <SiLeetcode />
        Leetcode
      </button>
      <button className="flex items-center gap-2 bg-black text-white rounded-xl px-4">
        <FaWhatsappSquare />
        {"Contact"}
      </button>
    </div>
  );
}

export default HeaderSocialIcons;
