interface skillItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  percent: number;
  color: string;
}
function IndividualSkill({ name, icon, description, color }: skillItem) {
  const classNamewithcolor = `text-6xl ${color}`;
  return (
    <div className="flex hover:cursor-pointer hover:scale-105 transition w-full md:w-1/3 items-center gap-2 bg-gray-200 rounded-md py-3 px-2">
      <div className={classNamewithcolor}>{icon}</div>
      <div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default IndividualSkill;
