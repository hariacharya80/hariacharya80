interface sectionDetails {
  title: string;
  description: string;
  items: Array<{
    title: string;
    provider: string;
    description: string;
    url: string;
  }>;
}

function SectionImage({ title, description, items }: sectionDetails) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-gray-500 -mt-1">{description}</p>
      {items.map((item, index) => (
        <div
          className="bg-gray-200 my-4  rounded-xl gap-2 p-2 flex items-start"
          key={index}
        >
          <div>
            <img className="w-20 rounded-xl" src={item.url} />
          </div>
          <div className="block">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <span className="font-thin">{item.provider}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionImage;
