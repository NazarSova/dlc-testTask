import star from "../../../assets/images/star.svg";
import halfStar from "../../../assets/images/halfStar.svg";
export default function Rating() {
  return (
    <div className="flex gap-[4.6px] items-center">
      <img
        src={star}
        alt="star"
        className="w-5 h-[19px] md:w-4 md:h-4 lg:w-5 lg:h-[19px]"
      />
      <img
        src={star}
        alt="star"
        className="w-5 h-[19px] md:w-4 md:h-4 lg:w-5 lg:h-[19px]"
      />
      <img
        src={star}
        alt="star"
        className="w-5 h-[19px] md:w-4 md:h-4 lg:w-5 lg:h-[19px]"
      />
      <img
        src={star}
        alt="star"
        className="w-5 h-[19px] md:w-4 md:h-4 lg:w-5 lg:h-[19px]"
      />
      <img
        src={halfStar}
        alt="star"
        className="md:w-4 md:h-4 lg:w-5 lg:h-[19px]"
      />
    </div>
  );
}
