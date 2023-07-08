import IndividualSkill from "./IndividualSkill";
import { AiFillHtml5 } from "react-icons/ai";
import { FaDocker } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiPostman,
  SiMongodb,
} from "react-icons/si";
import { BiLogoCss3 } from "react-icons/bi";
import { GrNode } from "react-icons/gr";
function SkillsSection() {
  return (
    <div className="mt-[5vh]">
      <h1 className="font-bold text-3xl">Skills</h1>
      <p className="text-gray-500">
        We all know that skills are the thing we need. Please consider exploring
        some of my possibilities.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col  md:flex-row w-full gap-2 mt-2">
          <IndividualSkill
            color="text-yellow-500"
            description="Everyone knows HTML."
            icon={<AiFillHtml5 />}
            name="HTML"
            percent={100}
          />
          <IndividualSkill
            description="Learn as much as needed."
            icon={<BiLogoCss3 />}
            color="text-blue-500"
            name="CSS"
            percent={100}
          />{" "}
          <IndividualSkill
            color="text-yellow-500"
            description="The ultimate power."
            icon={<SiJavascript />}
            name="JavaScript"
            percent={100}
          />
        </div>
        <div className="flex flex-col  md:flex-row w-full gap-2">
          <IndividualSkill
            color="text-green-500"
            description="It's the power we have"
            icon={<GrNode />}
            name="Node.js"
            percent={100}
          />{" "}
          <IndividualSkill
            color="text-black"
            description="I love this."
            icon={<SiExpress />}
            name="Express.js"
            percent={100}
          />
          <IndividualSkill
            color="text-black"
            description="Be a superhuman."
            icon={<SiNextdotjs />}
            name="Next.js"
            percent={100}
          />
        </div>{" "}
        <div className="flex flex-col  md:flex-row w-full  gap-2">
          <IndividualSkill
            color="text-orange-500"
            description="API is fun"
            icon={<SiPostman />}
            name="Postman"
            percent={100}
          />{" "}
          <IndividualSkill
            color="text-green-500"
            description="Best of what I learned."
            icon={<SiMongodb />}
            name="MongoDB"
            percent={100}
          />
          <IndividualSkill
            color="text-blue-500"
            description="Containers are lit."
            icon={<FaDocker />}
            name="Docker"
            percent={100}
          />
        </div>
      </div>
      <p className="text-gray-500">
        * Including but not limited to those mentioned above.
      </p>
    </div>
  );
}

export default SkillsSection;
