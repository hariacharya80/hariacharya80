import EachProject from "./EachProject";

function ProjectsSection() {
  return (
    //project code is the github link, project link is the download link, preview is the live deployment url.
    <div className="flex flex-col items-center mt-[4vh] gap-[4vh]">
      <EachProject
        num="1"
        projectCode="asdf"
        projectDescription="This is a sample project description."
        projectImage="/images/project.png"
        projectLink="localhost"
        projectName="Project One"
        projectPreview="asdf"
      />
      <EachProject
        num="2"
        projectCode="asdf"
        projectDescription="This is a sample project description."
        projectImage="/images/project.png"
        projectLink="localhost"
        projectName="Project One"
        projectPreview="asdf"
      />
      <EachProject
        num="3"
        projectCode="asdf"
        projectDescription="This is a sample project description."
        projectImage="/images/project.png"
        projectLink="localhost"
        projectName="Project One"
        projectPreview="asdf"
      />
    </div>
  );
}

export default ProjectsSection;
