import selected from "../../../assets/images/selected.svg";

type Props = {
  text: string;
};
export default function Courses(props: Props) {
  return (
    <div className="flex items-center gap-3">
      <img src={selected} alt="ico" />
      <p className="font-normal text-base text-black">{props.text}</p>
    </div>
  );
}
