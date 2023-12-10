import { useState, useEffect } from 'react';
import TableHeadPesanan from '../components/molecules/TableHeadPesanan';
import { TableBodyMasuk } from '../components/molecules/TableBodyMasuk';
import { TableBodyProses } from '../components/molecules/TableBodyProses';
import { Select, Loader } from '@mantine/core';
import { KENTANG_GORENG } from '../assets';
import { IoSearch } from 'react-icons/io5';
import cn from '../utils/cn';
import axios from 'axios';

const PesananPage = () => {
  const [booking, setBooking] = useState([]);
  const [search, setSearch] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(booking);

  const fetchData = async () => {
    setIsLoading(true);
    const api = 'https://6569e491de53105b0dd7d443.mockapi.io/api/dummy/pesanan';
    try {
      const response = await axios.get(api);
      const responseData = await response.data;
      setBooking(responseData);
      setFilter(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const valueInput = event.target.value;
    setSearch(valueInput);

    const filteredData = filter.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.idOrder.toLowerCase().includes(search.toLowerCase()) ||
        String(item.date).toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase()) ||
        item.menu.toLowerCase().includes(search.toLowerCase()) ||
        String(item.price).toLowerCase().includes(search.toLowerCase()) ||
        String(item.total).toLowerCase().includes(search.toLowerCase())
      );
    });

    valueInput !== '' ? setFilter(filteredData) : setFilter(booking);
    valueInput === '' ? setIsShow2(isShow2) : setIsShow2(!isShow2);
    filter.length === 0 ? setIsShow2(!isShow2) : setIsShow2(isShow2);
  };

  const pendingData = filter.filter((item) => item.type === 'pending');
  const prosesData = filter.filter(
    (item) => item.type === 'proses' || item.type === 'selesai' || item.type === 'batal'
  );

  return (
    <>
      <div className="flex gap-10 mb-5 mt-7">
        <div className="py-2 relative ml-0 mr-auto text-gray-600 flex bg-white rounded-full shadow-lg w-[820px] ">
          <IoSearch className="text-2xl absolute ml-4 mt-[0.8rem] text-surface font-semibold" />
          <input
            className="bg-transparent pl-12 pr-16 py-1 mt-1 focus:outline-none text-[24px] w-full"
            id="search"
            type="text"
            name="search"
            placeholder="Cari"
            value={search}
            onChange={handleSearch}
          />
          <button
            type="submit"
            id="close"
            className="absolute right-0 top-0 mt-5 mr-4"></button>
        </div>
        <div className="rounded-full shadow-lg w-[200px] h-auto bg-white align-items-center mr-11">
          <Select
            variant="unstyled"
            size="xl"
            radius="xl"
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.orange[9]
                        : theme.colors.orange[1],
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.white
                        : theme.colors.dark[9],
                    border:
                      theme.colorScheme === 'dark'
                        ? '1px solid #E25E3E'
                        : '1px solid #E25E3E',
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                '&[data-hovered]': {},
              },
            })}
            defaultValue="Hari ini"
            data={['Hari ini', 'Minggu ini']}
            className="pl-5 w-[180px] absolute top-[3.5rem]"
          />
        </div>
      </div>

      {/* PESANAN MASUK TABLE */}
      <div className="bg-white rounded-xl shadow-lg grid pb-5">
        <h1 className="font-semibold text-[24px] mt-6 mb-4 flex justify-self-start ml-8">
          Pesanan Masuk
        </h1>
        <table className="min-w-full mb-5">
          <thead>
            <TableHeadPesanan id="head-pesanan" newhead={''} />
          </thead>
          <tbody>
            {pendingData
              ?.sort((a, b) => a.data - b.date)
              ?.map((item) => {
                return (
                  <TableBodyMasuk
                    key={item.id}
                    id={item.id}
                    idOrder={item.idOrder}
                    date={item.date}
                    name={item.name}
                    address={item.address}
                    menu={item.menu}
                    price={item.price}
                    satuan={item.satuan}
                    total={item.total}
                    image={KENTANG_GORENG}
                    fetchData={fetchData}
                  />
                );
              })}
            {isShow2 ? (
              <div className="absolute left-[45%] text-[1.4rem] font-semibold">
                == No result in table ==
              </div>
            ) : (
              <div></div>
            )}
            {isLoading && (
              <Loader color="orange" className="absolute left-[50%]" />
            )}
          </tbody>
        </table>
      </div>

      {/* DIPROSES TABLE */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col gap-5 mt-5 pb-2">
        <div
          className={cn(
            'h-[480px] overflow-hidden flex flex-col',
            {
              'h-max overflow-auto': isShow,
            },
            { 'h-max': isShow2 }
          )}>
          <h1 className="font-semibold text-[24px] mt-6 mb-4 flex justify-self-start ml-8">
            Diproses
          </h1>
          <table className="min-w-full mb-5">
            <thead>
              <TableHeadPesanan id="head-pesanan" newhead={'Status'} />
            </thead>
            <tbody>
              {prosesData
                ?.sort((a, b) => a.data - b.date)
                ?.map((item) => {
                  return (
                    <TableBodyProses
                      key={item.id}
                      id={item.id}
                      idOrder={item.idOrder}
                      date={item.date}
                      name={item.name}
                      address={item.address}
                      menu={item.menu}
                      price={item.price}
                      satuan={item.satuan}
                      total={item.total}
                      type={item.type}
                      image={KENTANG_GORENG}
                      fetchData={fetchData}
                    />
                  );
                })}
              {isShow2 ? (
                <div className="absolute left-[45%] text-[1.4rem] font-semibold">
                  == No result in table ==
                </div>
              ) : (
                <div></div>
              )}
              {isLoading && (
                <Loader color="orange" className="absolute left-[50%]" />
              )}
            </tbody>
          </table>
        </div>
        <button
          className="text-[16px] font-bold pb-10 text-right pr-6"
          onClick={() => setIsShow(!isShow)}>
          {isShow ? 'Sembunyikan' : 'Lihat lainnya'}
        </button>
      </div>
    </>
  );
};

export default PesananPage;
