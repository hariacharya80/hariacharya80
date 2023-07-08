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
            description: "HTML and Responsive CSS with practical projects.",
            title: "Responsive Web Desgin Certification",
            provider: "FreeCodeCamp",
            url: "/images/fcc.jpeg",
          },
          {
            description: "Design, develop, and improve JavaScript programs.",
            title: "JavaScript Essentials",
            provider: "Cisco Networking Academy",
            url: "/images/cisco.png",
          },
          {
            description: "Learn the MERN stack with some prerequisites.",
            title: "Full Stack Development with JavaScript",
            provider: "Udacity",
            url: "/images/udacity.webp",
          },
          {
            description: "Full Data Structures and Algorithm with JavaScript.",
            title: "JavaScript Algorithms and Data Structures Certification",
            provider: "FreeCodeCamp",
            url: "/images/fcc.jpeg",
          },
          {
            description:
              "Get going with the javascript libraries for frontend.",
            title: "Front End Development Libraries Certification",
            provider: "FreeCodeCamp",
            url: "/images/fcc.jpeg",
          },
        ]}
      />
    </div>
  );
}

export default Skills;
