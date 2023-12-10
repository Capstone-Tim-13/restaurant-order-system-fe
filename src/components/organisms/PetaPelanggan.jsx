import CountPetaPelanggan from '../atoms/CountPetaPelanggan';
import ChartPelanggan from '../molecules/ChartPelanggan';

export default function PetaPelanggan({ datas }) {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col gap-8">
      <h1 className="text-[24px] font-medium">Peta Pelanggan</h1>
      <ChartPelanggan
        pelangganDatas={datas?.pelanggan.data}
        pelangganBaruDatas={datas?.pelangganBaru.data}
        penjualanDatas={datas?.penjualan.data}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-[24px] font-medium">Pelanggan</h1>
        <div className="flex items-end gap-8">
          <CountPetaPelanggan {...datas?.pelanggan} />
          <CountPetaPelanggan {...datas?.pelangganBaru} />
          <CountPetaPelanggan {...datas?.penjualan} />
        </div>
      </div>
    </div>
  );
}