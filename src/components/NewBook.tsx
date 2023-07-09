import { BiSolidBookAdd } from "react-icons/bi";
function NewBook() {
  return (
    <div className="flex flex-col items-center bg-slate-200 w-auto rounded-md justify-center">
      <div
        onClick={() => {
          window.open(
            "https://www.goodreads.com/user/show/167299645-hari-acharya"
          );
        }}
        className="text-6xl border-2 hover:border-white bg-white hover:text-green-600 transition cursor-pointer border-black rounded-full p-2"
      >
        <BiSolidBookAdd />
      </div>
      <h1>Suggest a new book</h1>
    </div>
  );
}

export default NewBook;
