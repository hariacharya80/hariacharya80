import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { BsFillFolderFill } from "react-icons/bs";
import { GoLog } from "react-icons/go";
import { AiFillCheckCircle, AiFillBook } from "react-icons/ai";
import HeaderMenuButton from "./HeaderMenuButton";

function Header() {
  return (
    <header className="flex justify-between items-center mt-2 md:mt-4 ">
      <h1 className="font-bold  text-5xl">
        <Link to={"/"}>Hari.</Link>
      </h1>
      <div className="flex md:hidden font-bold text-3xl items-center mx-2">
        <ImMenu />
      </div>
      <div className="hidden md:flex items-center gap-2">
        <HeaderMenuButton icon={<IoHome />} link="/" name="Home" key={"home"} />
        <HeaderMenuButton
          icon={<BsFillFolderFill />}
          link="/projects"
          name="Projects"
          key={"home"}
        />
        <HeaderMenuButton
          icon={<AiFillCheckCircle />}
          link="/skills"
          name="Skills"
          key={"home"}
        />
        <HeaderMenuButton
          icon={<GoLog />}
          link="/blog"
          name="Blog"
          key={"home"}
        />
        <HeaderMenuButton
          icon={<AiFillBook />}
          link="/reading"
          name="Reading List"
          key={"home"}
        />
      </div>
    </header>
  );
}

export default Header;
