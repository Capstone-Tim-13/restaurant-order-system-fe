import React from "react";

const TableHeadPesanan = () => {
  return (
    <>
      <tr className="border-b border-gray-400">
        <th></th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px] ">
          Order ID
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Tanggal
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Nama
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Alamat
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Jumlah
        </th>
        <th className="px-3 py-3 text-start tracking-wider font-medium text-[19px]">
          Status
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default TableHeadPesanan;
