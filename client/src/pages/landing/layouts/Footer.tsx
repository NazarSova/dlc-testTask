import FooterRating from "../components/FooterRating";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center pb-5">
      <div className="w-[1304px] h-[283px] bg-[#234EF6] rounded-[20px] overflow-hidden">
        <div className="w-[1282px] h-[1282px] rounded-full bg-[#4067FF] flex flex-col items-center">
          <button className="w-[390px] shadow-md h-[80px] rounded-[118px] bg-white font-bold text-[25px] mt-[79px] hover:bg-[#e0e6ff] ease-in-out duration-200 text-[#234EF6]">
            Start learning today
          </button>
          <p className="text-base font-medium text-[#8CA4FF] mt-2">
            Join 30 day bootcamp for free
          </p>
          <div className="flex gap-[2.7px] items-center mt-[42px]">
            <FooterRating />
            <p className="font-normal text-[13.6px] text-white">
              4.9/5 from — 500k+ learners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
