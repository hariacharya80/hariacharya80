import SectionImage from "../components/SectionImage";

function Skills() {
  return (
    <div>
      <div className="mt-[5vh]">
        <h1 className="font-bold text-3xl">Skills</h1>
        <p className="text-gray-500">
          We all know that skills are the thing we need. Please consider
          exploring some of my possibilities.
        </p>
      </div>
      <SectionImage
        title="Certification"
        description="I have been certified by most reputed online platforms for web development including the Cisco Networking Academy and FreeCodeCamp."
        items={[
          {
            description: "asdf",
            title: "asdf",
            provider: "FreeCodeCamp",
            url: "https://github.com/hariacharya80.png",
          },
          {
            description: "asdf",
            title: "asdf",
            provider: "FreeCodeCamp",
            url: "https://github.com/hariacharya80.png",
          },
          {
            description: "asdf",
            title: "asdf",
            provider: "FreeCodeCamp",
            url: "https://github.com/hariacharya80.png",
          },
          {
            description: "asdf",
            title: "asdf",
            provider: "FreeCodeCamp",
            url: "https://github.com/hariacharya80.png",
          },
          {
            description: "asdf",
            title: "asdf",
            provider: "FreeCodeCamp",
            url: "https://github.com/hariacharya80.png",
          },
        ]}
      />
    </div>
  );
}

export default Skills;
