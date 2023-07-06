import { Dispatch, SetStateAction, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
interface headerState {
  currentMenu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}

function Header({ currentMenu, setMenu }: headerState) {
  const documentChange = () => {
    setMenu("");
  };
  useEffect(() => {
    if (document.location.pathname == "/") {
      setMenu("Intro");
    }
    if (document.location.pathname == "/projects") {
      setMenu("Projects");
    }
    if (document.location.pathname == "/stack") {
      setMenu("Stack");
    }
    if (document.location.pathname == "/reading") {
      setMenu("Reading");
    }
    if (document.location.pathname == "/blog") {
      setMenu("Blog");
    }
    if (document.location.pathname == "/contact") {
      setMenu("Contact");
    }
  }, [currentMenu, setMenu]);

  return (
    <header className="flex justify-between items-center mt-2 md:mt-4 ">
      <h1 className="font-bold  text-5xl">
        <Link
          onClick={() => {
            documentChange();
          }}
          to={"/"}
        >
          Hari.
        </Link>
      </h1>
      <div className="flex md:hidden font-bold text-3xl mx-2">
        <ImMenu />
      </div>
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Intro" ? "underline font-bold" : ""}
            to={"/"}
          >
            Intro
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Projects" ? "underline font-bold" : ""}
            to={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Stack" ? "underline font-bold" : ""}
            to={"/stack"}
          >
            Stack
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Reading" ? "underline font-bold" : ""}
            to={"/reading"}
          >
            Reading List
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Blog" ? "underline font-bold" : ""}
            to={"/blog"}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              documentChange();
            }}
            className={currentMenu === "Contact" ? "underline font-bold" : ""}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
