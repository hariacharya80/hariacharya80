import {
  FcFolder,
  FcInfo,
  FcApproval,
  FcReading,
  FcOnlineSupport,
  FcAlphabeticalSortingAz,
} from "react-icons/fc";
import HomepageCard from "./HomepageCard";
import { useNavigate } from "react-router-dom";

function HomepageCardHolder() {
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl">Explore</h1>
      <p className="text-gray-500">
        This is my simple website where I share my latest projects, updates and
        some personal things that I want to share with the world. Please explore
        as you wish.
      </p>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            window.open("/resume.pdf", "_blank");
          }}
          description="View or download my resume"
          icon={<FcInfo />}
          name="Resume"
        />
        <HomepageCard
          action={() => {
            navigate("/projects");
          }}
          description="I'd like you explore my projects."
          icon={<FcFolder />}
          name="Projects"
        />
      </div>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            navigate("/skills");
          }}
          description="Find Something interesting about my skills."
          icon={<FcApproval />}
          name="Certifications"
        />
        <HomepageCard
          action={() => {
            navigate("/reading");
          }}
          description="Find my reading list or suggest something new to read."
          icon={<FcReading />}
          name="Reading List"
        />
      </div>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            navigate("/blog");
          }}
          description="Read something that I have posted recently."
          icon={<FcAlphabeticalSortingAz />}
          name="Blog"
        />
        <HomepageCard
          action={() => {
            navigate("/contact");
          }}
          description="Let's have something to chat about."
          icon={<FcOnlineSupport />}
          name="Talk to me"
        />
      </div>
    </div>
  );
}

export default HomepageCardHolder;
