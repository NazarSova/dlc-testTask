import SkillPoint from "../components/SkillPoint";
import generateImage from "../../../assets/images/generateai.svg";
import secureImage from "../../../assets/images/cybersecur.svg";
import masineImage from "../../../assets/images/mashine.svg";
import backendImage from "../../../assets/images/backend.svg";
import arrowLeft from "../../../assets/images/arrowleft.svg";
import arrowRight from "../../../assets/images/arrowright.svg";

export default function RoadMapSection() {
  return (
    <section className="bg-[#F6F8FA] px-[40px] sm:px-[40px] md:px-[40px] lg:px-[80px] xl:px-[115px] relative h-[350px] md:h-[500px] sm:h-[777px]">
      <h2 className="text-black text-[26px] font-black sm:text-[22px] md:text-[32px] xl:text-[41px] pt-[44px] sm:pt-[64px] sm:font-bold">
        Learn the Skills Hiring Managers Want
      </h2>
      <div className="flex overflow-x-scroll pb-4 gap-6 mt-8">
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
      <div className="hidden sm:flex gap-3 absolute h-8 top-[63px] md:top-[73px] right-[40px] lg:right-[84px] ">
        <div className="w-8 h-8 rounded-full bg-white border-1 border-[#F0EFF1] cursor-pointer flex justify-center text-center items-center">
          <img src={arrowLeft} alt="arrow" className="mt-[2px] mr-1" />
        </div>
        <div className="w-8 h-8 rounded-full bg-white border-1 border-[#F0EFF1] cursor-pointer shadow-md flex justify-center items-center">
          <img src={arrowRight} alt="arrow" className="mt-[2px]" />
        </div>
      </div>
    </section>
  );
}
