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
  const [dateFilter, setDateFilter] = useState(new Date());

  const MockApi = (date) => {
    switch (date.getMonth() + 1) {
      case 11:
        return 'https://mocki.io/v1/196dab1f-f46b-4219-8476-373112f41636';
      case 12:
        return 'https://mocki.io/v1/35cda053-8e37-4204-ba0b-8f82b03c42bf';
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(MockApi(dateFilter));
        setDashboardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [dateFilter]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <CountStatistic data={dashboardData?.summary} />
        <SelectMonth dateFilter={dateFilter} setDateFilter={setDateFilter} />
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
