import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface cardInfo {
  name: string;
  icon: React.ReactNode;
  description: string;
  action: () => void;
  actionText: string;
}

function HomepageCard({
  name,
  icon,
  description,
  action,
  actionText,
}: cardInfo) {
  return (
    <div className="bg-gray-200 rounded-xl px-5 py-4 w-full md:w-1/2 flex gap-2 items-center">
      <div className="text-5xl">{icon}</div>
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-xl">{name}</h1>
        <h1 className="text-gray-500">{description}</h1>
        <button
          className="bg-black text-white rounded-full px-4 py-[2px] flex items-center gap-2"
          onClick={action}
        >
          {actionText}
          {<BsFillArrowRightCircleFill />}
        </button>
      </div>
    </div>
  );
}

export default HomepageCard;
