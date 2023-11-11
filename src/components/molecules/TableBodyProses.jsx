import React from "react";
import { Select } from "@mantine/core";

export const TableBodyProses = ({ id, date, name, address, total }) => {
  return (
    <tr>
      <td className="px-2"></td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        {id}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        {date}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        {name}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        {address}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        Rp. {total}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        <div className="bg-white shadow-md rounded-full w-[160px] py-0 mt-0">
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
            className="pl-2.5 w-[160px] h-[55px] mt-0"
          />
        </div>
      </td>
      <td className="px-2"></td>
    </tr>
  );
};
