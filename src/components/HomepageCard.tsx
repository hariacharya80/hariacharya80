import { FcNext } from "react-icons/fc";

interface cardInfo {
  name: string;
  icon: React.ReactNode;
  description: string;
  action: () => void;
}

function HomepageCard({ name, icon, description, action }: cardInfo) {
  return (
    <div
      onClick={action}
      className="hover:cursor-pointer hover:scale-105 hover:bg-gray-200 bg-gray-100 transition-all mt-2 rounded-xl px-5 py-4 w-full md:w-1/2 flex gap-2 items-center"
    >
      <div className="text-5xl">{icon}</div>
      <div className="flex gap-5 items-center w-full justify-between">
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <h1 className="text-gray-500">{description}</h1>
        </div>
        <button className="text-4xl">{<FcNext />}</button>
      </div>
    </div>
  );
}

export default HomepageCard;
