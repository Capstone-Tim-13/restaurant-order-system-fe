import React from "react";
import { GoXCircleFill, GoCheckCircleFill } from "react-icons/go";
import { IconContext } from "react-icons";

export const TableBodyMasuk = ({
  id,
  date,
  name,
  address,
  total,
  status,
  onClick,
}) => {
  return (
    <tr key={id}>
      <td className="px-2"></td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        {id}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        {date}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        {name}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        {address}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        Rp. {total}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-t border-gray-400">
        {status}
      </td>
      <td className="border-t border-gray-400 px-0 mx-0">
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
