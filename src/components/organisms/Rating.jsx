import { BG_RATING } from "../../assets";
import { CardRating } from "../molecules/CardRating";

export default function Rating() {
  return (
    <div className="max-w-[1800px]">
      <div className="w-full bg-black relative">
        <img
          src={BG_RATING}
          alt="rating"
          className="w-full relative h-[650px]"
        />
        <div className="absolute top-[200px] left-[220px] w-[1020px] transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 class="text-[#FFFFFF] ml-96 text-left text-[56px] font-bold">
            Ini Kata mereka nih....
          </h1>
          <p class="text-[#FFFFFF] ml-96 text-[30px] mt-2 text-left">
            Kamu juga bisa bagikan pengalaman kamu bersama kami ya!
          </p>
        </div>
        <CardRating />
      </div>
    </div>
  );
}
