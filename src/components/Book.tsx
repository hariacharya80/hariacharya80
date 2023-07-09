import { BsFillPatchCheckFill } from "react-icons/bs";
interface bookData {
  name: string;
  status: string;
  image: string;
}

function Book({ name, status, image }: bookData) {
  switch (status) {
    case "reading":
      return (
        <div className=" flex flex-col w-fit bg-gray-300 p-2 rounded-md">
          <img src={image} alt={name} />
          <div className="flex mt-2 items-center justify-between">
            <h3 className="font-bold">{name}</h3>
            <div className="text-red-600">
              <BsFillPatchCheckFill />
            </div>
          </div>
        </div>
      );

    case "done":
      return (
        <div className="flex flex-col bg-gray-300 p-2 rounded-md">
          <img src={image} alt={name} />
          <div className="flex mt-2 items-center justify-between">
            <h3 className="font-bold">{name}</h3>
            <div className="text-green-600">
              <BsFillPatchCheckFill />
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-col bg-gray-300 p-2 rounded-md">
          <img src={image} alt={name} />
          <div className="flex mt-2 items-center justify-between">
            <h3 className="font-bold">{name}</h3>
          </div>
        </div>
      );
  }
}

export default Book;
