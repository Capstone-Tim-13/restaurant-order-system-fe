import React, { useState } from "react";
import TableHeadPesanan from "../components/molecules/TableHeadPesanan";
import { TableBodyMasuk } from "../components/molecules/TableBodyMasuk";
import { TableBodyProses } from "../components/molecules/TableBodyProses";
import { SEARCH_ICON } from "../assets";
import { Select } from "@mantine/core";
import cn from "../utils/cn";

const PesananPage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Pending");
  const [isShow, setIsShow] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const failedClick = () => {
    setStatus(status === "Pending" ? "Cancelled" : status);
  };

  const data = [
    {
      id: "#355216",
      date: "10 November 2023 11.32 WIB",
      name: "Rita Martini",
      address: "Jl. Puputan 56, Jakarta",
      total: "25000",
      status: status,
    },
    {
      id: "#355217",
      date: "10 November 2023 11.32 WIB",
      name: "John Oey",
      address: "Jl. Kebon sari 56, Jakarta",
      total: "25000",
      status: status,
    },
    {
      id: "#355218",
      date: "10 November 2023 11.32 WIB",
      name: "Lala Sepuh",
      address: "Jl. Dimana yh 23, Jakarta",
      total: "25000",
      status: status,
    },
    {
      id: "#355219",
      date: "10 November 2023 11.35 WIB",
      name: "Mang Eak",
      address: "Jl. Puputan 56, Jakarta",
      total: "25000",
      status: status,
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex gap-10 mb-5 mt-7">
        <div className="pt-2 relative ml-0 mr-auto text-gray-600 flex bg-white rounded-full shadow-lg w-[820px] ">
          <img
            className="text-gray-600 h-5 w-5 fill-current my-auto mx-4"
            id="search-icon"
            src={SEARCH_ICON}
          />
          <input
            className="bg-transparent pl-1 pr-16 py-2 focus:outline-none text-[24px] w-full"
            id="search"
            type="search"
            name="search"
            placeholder="Cari"
            value={search}
            onChange={handleSearch}
          />
          <button
            type="submit"
            id="close"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
        <div className="rounded-full shadow-lg w-[200px] h-auto bg-white align-items-center mr-11">
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
            defaultValue="Hari ini"
            data={["Hari ini", "Minggu ini"]}
            className="pl-5 w-[180px]"
          />
        </div>
      </div>

      {/* PESANAN MASUK TABLE */}
      <div className="bg-white rounded-xl shadow-lg grid">
        <h1 className="font-semibold text-[24px] mt-6 mb-4 flex justify-self-start ml-8">
          Pesanan Masuk
        </h1>
        <table className="min-w-full mb-5">
          <thead>
            <TableHeadPesanan id="head-pesanan" />
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <TableBodyMasuk
                key={item.id}
                id={item.id}
                date={item.date}
                name={item.name}
                address={item.address}
                total={item.total}
                status={item.status}
                onClick={failedClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* DIPROSES TABLE */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col gap-5 mt-5 pb-2">
        <div
          className={cn("h-[450px] overflow-hidden flex flex-col", {
            "h-max overflow-auto": isShow,
          })}
        >
          <h1 className="font-semibold text-[24px] mt-6 mb-4 flex justify-self-start ml-8">
            Diproses
          </h1>
          <table className="min-w-full mb-5">
            <thead>
              <TableHeadPesanan id="head-pesanan" />
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <TableBodyProses
                  key={item.id}
                  id={item.id}
                  date={item.date}
                  name={item.name}
                  address={item.address}
                  total={item.total}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="text-[16px] font-bold pb-10 text-right pr-6"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Sembunyikan" : "Lihat lainnya"}
        </button>
      </div>
    </>
  );
};

export default PesananPage;
