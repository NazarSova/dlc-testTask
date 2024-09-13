import Rating from "../components/Rating";
import light from "../../../assets/images/light.svg";
import Courses from "../components/Courses";
import Lottie from "lottie-react";
import animationData from "../../../assets/animation/DLC_Element 1.json";
export default function WelcomeSection() {
  return (
    <section className="px-[5px] sm:px-[40px] md:px-[40px] lg:px-[80px] xl:px-[115px] pb-[40px] sm:pb-[72px] relative">
      <div className="flex md:justify-between justify-center">
        <div className="flex md:block items-start md:items-center w-[80vw] md:w-auto flex-col">
          <h1 className="text-[50px] text-resize text-nowrap leading-[49px] xl:text-[68px] md:tracking-[-2.5px] md:text-nowrap lg:text-wrap md:w-[39vw] lg:w-[41vw] xl:w-[45vw] font-bold xl:leading-[67.32px]">
            Become Fluent <br className="block md:block lg:hidden" /> in{" "}
            <span className="text-[#234EF6]">
              Machine <br className="block md:block lg:hidden" /> Learning
            </span>
          </h1>
          <div className="md:block flex justify-start w-full">
            <p className="text-base small-text-resize xl:text-lg font-medium leading-[27px] mt-4 sm:w-[60vw] md:w-[35vw] xl:w-[30vw] text-start tracking-[-2%]">
              Start deep learning from scratch! Explore machine learning, data
              science, artificial intelligence{" "}
              <br className="hidden xl:block" /> from the ground up - no
              experience required!
            </p>
          </div>
          <div className="md:hidden w-full statick-image flex justify-center z-[-11] mt-10 h-[580px]">
            <div className="backImage w-[465px] h-full rounded-[18px]">
              <div className="pt-[29px] pl-[29px]">
                <p className="text-[#EBEBEB99] font-medium leading-[20px] text-base">
                  Andrew Colman
                </p>
                <p className="text-lg font-semibold leading-[26.64px] mt-[3px] text-white">
                  Machine Learning Engineer
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center m-auto md:m-0 md:mt-[22px] lg:flex-row flex-col gap-[10px] h-[112px] lg:h-[56px] w-[278px] lg:w-[406px] text-base font-normal mt-[22px]">
            <button className="w-full h-full text-white  text-base font-normal rounded-[60px] bg-[#234EF6] hover:bg-[#5876f0] ease-in-out duration-200">
              Start learning today
            </button>
            <button className="w-full h-full bg-[#EDF2F6] text-[#050317] rounded-[60px] hover:bg-[#e1f2ff] ease-out duration-200">
              Explore courses
            </button>
          </div>
          <div className="flex items-center m-auto wrap-rating mt-5 md:mt-5 lg:mt-[30px] gap-1 md:gap-2 lg:gap-[10px]">
            <Rating />
            <p className="text-[#6B6A6E] md:text-sm lg:text-lg font-normal sm:mt-[2px] md:mt-[2px] lg:mt-1">
              <span className="text-black">4.9</span>/5 from — 500k+ learners
            </p>
          </div>
          <div className="flex w-full gap-[5px] items-center z-40 mt-4 md:mt-3 lg:mt-8">
            <img
              src={light}
              alt="lightnin"
              className="md:w-2 md:h-3 lg:w-[10px] lg:h-[16px]"
            />
            <p className="uppercase md:text-[11px] lg:text-sm font-normal text-[#6B6A6E]">
              trending coures
            </p>
          </div>
          <div className="md:mt-2 w-full lg:mt-3 flex flex-col mt-2 sm:mt-2 gap-1 md:gap-1 lg:gap-[15px]">
            <Courses text="Financial Engineering" />
            <Courses text="Deep Learning" />
            <Courses text="Artificial Intelligence" />
          </div>
          <p className="text-[#234EF6] w-full mt-2 md:text-sm lg:text-base font-normal md:mt-2 lg:mt-[14px]">
            + many more
          </p>
        </div>
        <div className="hidden md:block md:w-[45vw] lg:w-[35vw] z-[-11] xl:w-[469px] h-[580px] lg:h-[610px]">
          <div className="backImage w-full h-full rounded-[18px]">
            <div className="pt-[29px] pl-[29px]">
              <p className="text-[#EBEBEB99] font-medium leading-[20px] text-base">
                Andrew Colman
              </p>
              <p className="text-lg font-semibold leading-[26.64px] mt-[3px] text-white">
                Machine Learning Engineer
              </p>
            </div>
          </div>
        </div>
        <Lottie
          animationData={animationData}
          loop={true}
          className="hidden md:block w-[600px] z-[-10] h-[130px] lg:w-[670px] lg:h-[156px] xl:w-[717px] xl:h-[166px] absolute md:right-[8vw] md:bottom-[50px] lg:right-[55px] lg:bottom-[33px] xl:right-[134px] xl:bottom-[53px]"
        />
      </div>
    </section>
  );
}
