import {
  MENU_TERJUAL_ICON,
  PELANGGAN_ICON,
  PEMASUKAN_ICON,
  TOTAL_PESANAN_ICON,
} from '../assets';
import SelectMonth from '../components/atoms/SelectMonth';
import CountStatistic from '../components/organisms/CountStatistic';
import InfoTransaksi from '../components/organisms/InfoTransaksi';
import PermintaanPesanan from '../components/organisms/PermintaanPesanan';
import PetaPelanggan from '../components/organisms/PetaPelanggan';
import RingkasanPenjualan from '../components/organisms/RingkasanPenjualan';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <CountStatistic data={countStatisticDatas} />
        <SelectMonth />
      </div>
      <div className="flex gap-3 flex-wrap">
        <RingkasanPenjualan />
        <PetaPelanggan />
      </div>
      <div className="flex gap-3 flex-wrap">
        <PermintaanPesanan />
        <InfoTransaksi />
      </div>
    </div>
  );
}

const countStatisticDatas = [
  {
    icon: MENU_TERJUAL_ICON,
    title: 'Total Menu Terjual',
    count: 345,
    isUp: true,
    persent: 20,
    daily: {
      isUp: true,
      count: 20,
      persent: 4.5,
    },
  },
  {
    icon: TOTAL_PESANAN_ICON,
    title: 'Total Pesanan',
    count: 200,
    isUp: true,
    persent: 10,
    daily: {
      isUp: true,
      count: 20,
      persent: 2.5,
    },
  },
  {
    icon: PELANGGAN_ICON,
    title: 'Pelanggan',
    count: 235,
    isUp: false,
    persent: 5,
    daily: {
      isUp: false,
      count: 20,
      persent: 2.7,
    },
  },
  {
    icon: PEMASUKAN_ICON,
    title: 'Pemasukan',
    count: 500_000,
    isUp: false,
    persent: 10,
    daily: {
      isUp: false,
      count: 10_000,
      persent: 1.5,
    },
  },
];
