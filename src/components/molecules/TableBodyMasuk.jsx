import React from "react";
import { GoXCircleFill, GoCheckCircleFill } from "react-icons/go";
import { IconContext } from "react-icons";

export const TableBodyMasuk = ({
  id,
  name,
  date,
  address,
  menu,
  price,
  satuan,
  total,
  onClick,
  image,
}) => {
  return (
    <tr id="pesananmap-masuk">
      <td className="px-2"></td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400 text-gray-400">
        {id}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap border-b border-gray-400">
        <div className="flex flex-col">
          <span className="font-medium text-[19px]">{name}</span>
          <span className="text-[0.75rem] font-normal text-gray-600">
            {address}
          </span>
        </div>
      </td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-medium text-[18px] border-b border-gray-400">
        {date}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        <div className="flex gap-3">
          <img
            src={image}
            className="w-[4.2rem] h-[4.2rem] rounded-full shadow-md"
            alt="gambar-menu"
          />
          <div className="flex flex-col gap-5">
            {menu.map((data) => {
              return (
                <span key={data.id} className="my-auto font-medium">
                  {data.menu}
                </span>
              );
            })}
          </div>
        </div>
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        Rp. {price}
      </td>
      <td className="px-3 py-6 text-center whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        {satuan}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        Rp. {total}
      </td>
      <td className="border-b border-gray-400 px-0 mx-0">
        <div className="flex gap-5 px-0">
          <IconContext.Provider value={{ color: "#D31515", size: "26px" }}>
            <GoXCircleFill onClick={onClick} />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#009735", size: "26px" }}>
            <GoCheckCircleFill />
          </IconContext.Provider>
        </div>
      </td>
      <td className="px-2"></td>
    </tr>
  );
};
