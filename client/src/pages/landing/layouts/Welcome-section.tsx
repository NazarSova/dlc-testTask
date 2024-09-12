import Rating from "../components/Rating";
import light from "../../../assets/images/light.svg";
import Courses from "../components/Courses";
import Lottie from "lottie-react";
import animationData from "../../../assets/animation/DLC_Element 1.json";
export default function WelcomeSection() {
  return (
    <section className="px-[115px] pb-[72px] relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[68px] w-[45vw] font-bold leading-[67.32px]">
            Become Fluent in{" "}
            <span className="text-[#234EF6]">Machine Learning</span>
          </h1>
          <p className="text-lg font-medium leading-[27px] mt-4 w-[30vw] text-start tracking-[-2%]">
            Start deep learning from scratch! Explore machine learning, data
            science, artificial intelligence <br /> from the ground up - no
            experience required!
          </p>
          <div className="flex gap-[10px] h-[56px] text-base font-normal mt-[22px]">
            <button className="w-[198px] h-full text-white  text-base font-normal rounded-[60px] bg-[#234EF6] hover:bg-[#5876f0] ease-in-out duration-200">
              Start learning today
            </button>
            <button className="w-[198px] h-full bg-[#EDF2F6] text-[#050317] rounded-[60px] hover:bg-[#e1f2ff] ease-out duration-200">
              Explore courses
            </button>
          </div>
          <div className="flex items-center mt-[30px] gap-[10px]">
            <Rating />
            <p className="text-[#6B6A6E] text-lg font-normal mt-1">
              <span className="text-black">4.9</span>/5 from — 500k+ learners
            </p>
          </div>
          <div className="flex gap-[5px] items-center mt-8">
            <img src={light} alt="lightnin" className="w-[10px] h-[16px]" />
            <p className="uppercase text-sm font-normal text-[#6B6A6E]">
              trending coures
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-[15px]">
            <Courses text="Financial Engineering" />
            <Courses text="Deep Learning" />
            <Courses text="Artificial Intelligence" />
          </div>
          <p className="text-[#234EF6] text-base font-normal mt-[14px]">
            + many more
          </p>
        </div>
        <div className="backImage w-[469px] h-[610px]">
          <div className="mt-[29px] ml-[29px]">
            <p className="text-[#EBEBEB99] font-medium leading-[20px] text-base">
              Andrew Colman
            </p>
            <p className="text-lg font-semibold leading-[26.64px] mt-[3px] text-white">
              Machine Learning Engineer
            </p>
          </div>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-[717px] h-[166px] absolute right-[134px] bottom-[53px]"
        />
      </div>
    </section>
  );
}
