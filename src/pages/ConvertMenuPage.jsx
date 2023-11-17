import React from "react";
import TextMenu from "../components/atoms/Text";
import ButtonMenu from "../components/atoms/Button1";
import UploadFile from "../components/organisms/FormUpload";
import ButtonMenu2 from "../components/atoms/Button2";
import { BACK_MENU } from "../assets";

export default function MenuConvert() {
  return (
    <>
      <div className="flex items-center">
        <img className="" id="back-menu" src={BACK_MENU} />
        <h3 className="text-2xl font-semibold ml-5">Menu</h3>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-full mx-auto mt-7">
        <TextMenu />
        <ButtonMenu />
        <UploadFile />
        <ButtonMenu2 />
      </div>
    </>
  );
}
