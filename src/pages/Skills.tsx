import SectionImage from "../components/SectionImage";
import SkillsSection from "../components/SkillsSection";

function Skills() {
  return (
    <div>
      <SkillsSection />

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
