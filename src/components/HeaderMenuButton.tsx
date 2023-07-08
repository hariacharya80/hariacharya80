import { Link } from "react-router-dom";

interface menuDetails {
  name: string;
  link: string;
  icon: React.ReactNode;
}

function HeaderMenuButton({ name, link, icon }: menuDetails) {
  return (
    <Link to={link}>
      <h1 className="flex hover:shadow-lg hover:bg-gray-200 transition-colors duration-150 py-[3px] px-3 rounded-md items-center gap-1 font-bold">
        <div className="mb-1">{icon}</div>
        {name}
      </h1>
    </Link>
  );
}

export default HeaderMenuButton;
