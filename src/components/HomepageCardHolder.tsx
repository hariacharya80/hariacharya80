import {
  FcFolder,
  FcInfo,
  FcApproval,
  FcReading,
  FcOnlineSupport,
  FcAlphabeticalSortingAz,
} from "react-icons/fc";
import HomepageCard from "./HomepageCard";

function HomepageCardHolder() {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl">Explore this site</h1>
      <p className="text-gray-500">
        This is my simple website where I share my latest projects, updates and
        some personal things that I want to share with the world. Please explore
        as you wish.
      </p>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="Download CV"
          description="Find Something interesting about me."
          icon={<FcInfo />}
          name="Resume"
        />
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="View projects"
          description="I'd like you explore my projects."
          icon={<FcFolder />}
          name="Projects"
        />
      </div>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="Download CV"
          description="Find Something interesting about me."
          icon={<FcApproval />}
          name="Certifications"
        />
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="View Message"
          description="I'd like you explore my projects."
          icon={<FcReading />}
          name="Reading List"
        />
      </div>
      <div className="mt-2 flex flex-col md:flex-row flex-grow gap-5">
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="Download CV"
          description="Find Something interesting about me."
          icon={<FcAlphabeticalSortingAz />}
          name="Blog"
        />
        <HomepageCard
          action={() => {
            alert("ok");
          }}
          actionText="View Message"
          description="I'd like you explore my projects."
          icon={<FcOnlineSupport />}
          name="Talk to me"
        />
      </div>
    </div>
  );
}

export default HomepageCardHolder;
