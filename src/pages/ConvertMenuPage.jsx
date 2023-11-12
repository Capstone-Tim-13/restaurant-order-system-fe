import React from "react";
import TextMenu from "../components/atoms/Text";
import ButtonMenu from "../components/atoms/Button1";
import UploadFile from "../components/organisms/FormUpload";
import ButtonMenu2 from "../components/atoms/Button2";

export default function MenuConvert() {
  return (
    <>
      <div className="flex items-center">
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.750004 24.5C0.750003 37.6168 11.3832 48.25 24.5 48.25C37.6168 48.25 48.25 37.6168 48.25 24.5C48.25 11.3832 37.6168 0.75 24.5 0.749999C11.3832 0.749998 0.750004 11.3832 0.750004 24.5ZM34 26.2813C34.9838 26.2813 35.7813 25.4838 35.7813 24.5C35.7813 23.5162 34.9838 22.7188 34 22.7188L17.5265 22.7188C17.5528 22.685 17.5801 22.6506 17.6083 22.6154C18.2237 21.8492 19.1389 20.9383 20.5043 19.585L23.8539 16.2651C24.5526 15.5726 24.5577 14.4448 23.8651 13.7461C23.1726 13.0474 22.0448 13.0423 21.3461 13.7349L17.9234 17.1272C16.65 18.3892 15.5879 19.4418 14.8306 20.3847C14.0364 21.3737 13.4322 22.4131 13.2708 23.6794C13.2361 23.9519 13.2188 24.2259 13.2188 24.5C13.2188 24.7741 13.2361 25.0481 13.2708 25.3206C13.4322 26.5869 14.0364 27.6263 14.8306 28.6153C15.5879 29.5582 16.6499 30.6108 17.9234 31.8728L21.3461 35.2651C22.0448 35.9577 23.1726 35.9526 23.8651 35.2539C24.5577 34.5552 24.5526 33.4274 23.8539 32.7349L20.5043 29.415C19.1389 28.0617 18.2237 27.1508 17.6083 26.3846C17.5801 26.3495 17.5528 26.315 17.5265 26.2813L34 26.2813Z"
            fill="#783525"
          />
        </svg>
        <h3 className="text-2xl font-semibold ml-2">Menu</h3>
      </div>
      <div className="bg-gray-200 p-8 rounded-3xl shadow-md max-w-full mx-auto mt-7">
        <TextMenu />
        <ButtonMenu />
        <UploadFile />
        <ButtonMenu2 />
      </div>
    </>
  );
}