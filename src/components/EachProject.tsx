interface projectDetails {
  projectName: string;
  projectDescription: string;
  projectCode: string;
  projectLink: string;
  num: string;
  projectImage: string;
  projectPreview: string;
}

function EachProject({
  projectName,
  projectDescription,
  projectCode,
  projectLink,
  projectPreview,
  projectImage,
  num,
}: projectDetails) {
  return (
    <div className="flex justify-evenly gap-10 items-center">
      <div className="hidden md:flex px-5 rounded-xl items-center justify-center w-1/12 bg-black h-fit">
        <h1 className="font-bold text-8xl rounded-full text-white">{num}</h1>
      </div>
      <div className="flex w-full transition  hover:scale-110  md:w-6/7 flex-col shadow-2xl  border-2 border-slate-300 bg-slate-300 rounded-xl overflow-hidden">
        <img src={projectImage} />
        <div className="flex flex-col md:flex-row justify-between px-2 items-center">
          <div className="w-2/3">
            <h1 className="font-bold text-2xl">{projectName}</h1>
            <p>{projectDescription}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-500 py-2 rounded-xl  text-white px-4"
              onClick={() => {
                window.open(projectLink, "_blank");
              }}
            >
              Download
            </button>
            <button
              className="bg-gray-500 py-2 text-white rounded-xl px-4"
              onClick={() => {
                window.open(projectCode, "_blank");
              }}
            >
              GitHub
            </button>
            <button
              className="bg-gray-500 text-white rounded-xl px-4 py-2"
              onClick={() => {
                window.open(projectPreview, "_blank");
              }}
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachProject;
