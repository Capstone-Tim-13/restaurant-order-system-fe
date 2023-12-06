import ListPermintaanPesanan from '../molecules/ListPermintaanPesanan';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PermintaanPesanan() {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          'https://6569e491de53105b0dd7d443.mockapi.io/api/dummy/pesanan'
        );
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetch();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-8 bg-white shadow-lg rounded-3xl">
      <h1 className="text-[24px] font-medium">Permintaan Pesanan</h1>
      <div className="flex flex-col gap-6 mt-7">
        {datas?.sort((a, b) => a.data - b.date).slice(0, 5).map((item, index) => (
          <ListPermintaanPesanan key={index} {...item} />
        ))}
      </div>
    </div>
  );
}