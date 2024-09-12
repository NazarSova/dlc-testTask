import star from "../../../assets/images/whiteStar.svg";
import halfStar from "../../../assets/images/whiteHalfStar.svg";
export default function Rating() {
  return (
    <div className="flex gap-[4.6px] items-center">
      <img src={star} alt="star" className="w-[15px] h-[14px]" />
      <img src={star} alt="star" className="w-[15px] h-[14px]" />
      <img src={star} alt="star" className="w-[15px] h-[14px]" />
      <img src={star} alt="star" className="w-[15px] h-[14px]" />
      <img src={halfStar} alt="star" className="w-[15px] h-[14px]" />
    </div>
  );
}
