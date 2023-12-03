import { MENU_SATU } from "../../assets";
import { MENU_DUA } from "../../assets";
import { MENU_TIGA } from "../../assets";
import { Rating } from "@mantine/core";

export default function TopMenu() {
  return (
    <div>
      <div className="h-[800px] w-full bg-[#0c0c0c]">
        <div className="w-[400px] absolute mt-20 ml-20 h-[630px] [border-top:4px_dashed_#FCFCFC] [border-left:4px_dashed_#FCFCFC] [border-right:4px_dashed_#FCFCFC] [border-bottom:4px_dashed_#FCFCFC] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
          <div className="bg-[#783525] text-white p-8 w-[350px] h-[580px] mt-5 ml-5 rounded-tl-[499px] rounded-br-[64px] rounded-tr-[499px] rounded-bl-[64px]">
            <img
              src={MENU_SATU}
              className="w-full h-auto m-0 block max-w-[433px]"
            />
            <div class="w-full max-w-[450px] mt-0 min-h-[88.49097442626953px] text-center">
              <p class="text-[#fcfcfc] text-[25px] text-center font-bold">
                Steak With Potatoes Wedges
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Rating defaultValue={4} color="#FFBC80" size="xl" readOnly />
            </div>
            <div class="w-full max-w-[295px] mt-5 min-h-[110.61371612548828px] text-center">
              <p class="text-[#fcfcfc] text-[18px] text-center">
                Daging steak lembut yang juicy dipadu dengan irisan kentang yang
                lembut dan renyah
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] absolute mt-20 ml-[650px] h-[630px] [border-top:4px_dashed_#FCFCFC] [border-left:4px_dashed_#FCFCFC] [border-right:4px_dashed_#FCFCFC] [border-bottom:4px_dashed_#FCFCFC] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
          <div className="bg-[#783525] text-white p-8 w-[350px] h-[580px] mt-5 ml-5 rounded-tl-[499px] rounded-br-[64px] rounded-tr-[499px] rounded-bl-[64px]">
            <img
              src={MENU_DUA}
              className="w-full h-auto m-0 block max-w-[351px]"
            />
            <div class="w-full max-w-[358px] mt-0 min-h-[87.63539123535156px] text-center">
              <p class="text-[#fcfcfc] text-[28px] text-center font-bold">
                New England Clam Chowder
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Rating defaultValue={4} color="#FFBC80" size="xl" readOnly />
            </div>
            <div class="w-full max-w-[295px] mt-5 min-h-[110.61371612548828px] text-center">
              <p class="text-[#fcfcfc] text-[18px] text-center">
                Sup krim yang lezat dipadu dengan kerang yang segar
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] absolute mt-20 ml-[1200px] h-[630px] [border-top:4px_dashed_#FCFCFC] [border-left:4px_dashed_#FCFCFC] [border-right:4px_dashed_#FCFCFC] [border-bottom:4px_dashed_#FCFCFC] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[48px] rounded-bl-[48px]">
          <div className="bg-[#783525] text-white p-8 w-[350px] h-[580px] mt-5 ml-5 rounded-tl-[499px] rounded-br-[64px] rounded-tr-[499px] rounded-bl-[64px]">
            <img
              src={MENU_TIGA}
              className="w-full h-auto m-0 block max-w-[632px]"
            />
            <div class="w-full max-w-[200px] ml-11 text-center">
              <p class="text-[#fcfcfc] text-[28px] text-center font-bold">
                Fusilli Aglio Olio
              </p>
            </div>
            <div className="flex justify-center gap-2">
              <Rating defaultValue={4} color="#FFBC80" size="xl" readOnly />
            </div>
            <div class="w-full max-w-[250px] mt-5 min-h-[110.61371612548828px] text-center ml-5">
              <p class="text-[#fcfcfc] text-[18px] text-center">
                Fusilli yang lembut dengan tomat segar dimasak bersama minyak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
