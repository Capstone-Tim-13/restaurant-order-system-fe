import React from "react";
import { Select } from "@mantine/core";

export const TableBodyProses = ({
  id,
  name,
  date,
  address,
  menu,
  price,
  satuan,
  total,
  image,
}) => {
  return (
    <tr id="pesananmap-proses">
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
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
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
      <td className="py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        <div className="bg-white shadow-md rounded-full w-[170px] py-0 mt-0 relative right-auto left-auto">
          <Select
            variant="unstyled"
            size="xl"
            radius="xl"
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.orange[9]
                        : theme.colors.orange[1],
                    color:
                      theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors.dark[9],
                    border:
                      theme.colorScheme === "dark"
                        ? "1px solid #E25E3E"
                        : "1px solid #E25E3E",
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
            defaultValue="Disiapkan"
            data={["Disiapkan", "Dipacking", "Dikirim", "Diterima"]}
            className="pl-5 w-[170px] h-[55px] mt-0"
          />
        </div>
      </td>
      <td className="px-2"></td>
    </tr>
  );
};
