import React from "react";

const TableHeadPesanan = ({newhead}) => {
  return (
    <>
      <tr className="border-b border-gray-400">
        <th></th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px] ">
          Order ID
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Nama
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Tanggal
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Menu
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Harga
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Satuan
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Total
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          {newhead}
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default TableHeadPesanan;
