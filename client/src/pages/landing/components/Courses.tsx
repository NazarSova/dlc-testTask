import selected from "../../../assets/images/selected.svg";

type Props = {
  text: string;
};
export default function Courses(props: Props) {
  return (
    <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
      <img src={selected} alt="ico" className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
      <p className="font-normal md:text-sm lg:text-base text-black">
        {props.text}
      </p>
    </div>
  );
}
