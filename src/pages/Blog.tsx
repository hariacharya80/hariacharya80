import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Blog() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-[5vh] border-2 border-red-500 bg-red-500 text-white p-2 rounded-xl flex items-center justify-between">
        Sorry, I'm currently working on backend to make dynamic blog content
        avilable. Should be avilable in a day.
        <button
          onClick={() => {
            navigate("/");
          }}
          className="border-2 bg-white rounded-full text-4xl text-red-500 "
        >
          <AiFillCloseCircle />
        </button>
      </div>
    </div>
  );
}

export default Blog;
