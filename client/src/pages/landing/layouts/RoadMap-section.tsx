import SkillPoint from "../components/SkillPoint";
import generateImage from "../../../assets/images/generateai.svg";
import secureImage from "../../../assets/images/cybersecur.svg";
import masineImage from "../../../assets/images/mashine.svg";
import backendImage from "../../../assets/images/backend.svg";
import arrowLeft from "../../../assets/images/arrowleft.svg";
import arrowRight from "../../../assets/images/arrowright.svg";

export default function RoadMapSection() {
  return (
    <section className="bg-[#F6F8FA] px-[116px] relative h-[777px]">
      <h2 className="text-black text-[41px] pt-[64px] font-normal">
        Learn the Skills Hiring Managers Want
      </h2>
      <div className="flex gap-6 mt-8">
        <SkillPoint
          text="Generative AI"
          isBorder={true}
          image={generateImage}
        />
        <SkillPoint text="Cybersecurity" isBorder={false} image={secureImage} />
        <SkillPoint
          text="Machine Learning"
          isBorder={false}
          image={masineImage}
        />
        <SkillPoint text="Back-End" isBorder={false} image={backendImage} />
        <SkillPoint text="Cybersecurity" isBorder={false} image={secureImage} />
      </div>
      <div className="flex gap-3 absolute h-8 top-[73px] right-[84px]">
        <div className="w-8 h-8 rounded-full bg-white border-1 border-[#F0EFF1] cursor-pointer flex justify-center text-center items-center">
          <img src={arrowLeft} alt="arrow" className="mt-[2px] mr-1" />
        </div>
        <div className="w-8 h-8 rounded-full bg-white border-1 border-[#F0EFF1] cursor-pointer flex justify-center items-center">
          <img src={arrowRight} alt="arrow" className="mt-[2px]" />
        </div>
      </div>
    </section>
  );
}
