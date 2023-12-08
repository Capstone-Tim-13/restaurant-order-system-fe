import { useEffect, useState } from 'react';
import axios from 'axios';
import SelectMonth from '../components/atoms/SelectMonth';
import CountStatistic from '../components/organisms/CountStatistic';
import InfoTransaksi from '../components/organisms/InfoTransaksi';
import PermintaanPesanan from '../components/organisms/PermintaanPesanan';
import PetaPelanggan from '../components/organisms/PetaPelanggan';
import RingkasanPenjualan from '../components/organisms/RingkasanPenjualan';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          'https://mocki.io/v1/0d8dfbc7-9ad2-4505-a0e1-b7e3d9cb2460'
        );
        setDashboardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <CountStatistic data={dashboardData?.summary} />
        <SelectMonth />
      </div>
      <div className="flex flex-wrap gap-3">
        <RingkasanPenjualan datas={dashboardData?.ringkasanPenjualan} />
        <PetaPelanggan datas={dashboardData?.petaPelanggan} />
      </div>
      <div className="flex flex-wrap gap-3">
        <PermintaanPesanan />
        <InfoTransaksi datas={dashboardData?.totalTransaksi} />
      </div>
    </div>
  );
}
