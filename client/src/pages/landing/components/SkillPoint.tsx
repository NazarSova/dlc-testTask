import arrow from "../../../assets/images/Arrow_right.svg";

type Props = {
  isBorder: boolean;
  image: string;
  text: string;
};

export default function SkillPoint(props: Props) {
  return (
    <div
      className={` ${
        props.text == "Machine Learning"
          ? "min-w-[239px] lg:min-w-[269px]"
          : "min-w-[200px] lg:min-w-[240px]"
      } h-[60px] lg:h-[70px] ${
        props.isBorder ? "border-2 border-[#4D23F6]" : ""
      } text-sm lg:text-base  font-bold tracking-[-2%] flex items-center justify-between rounded-full bg-white`}
    >
      <img src={props.image} alt="ico" className="w-[46px] h-[46px] ml-3" />
      <p className="text-nowrap tracking-[-2%]">{props.text}</p>
      <img src={arrow} alt="ico" className="mr-4" />
    </div>
  );
}
