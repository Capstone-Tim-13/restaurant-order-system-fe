import ChartPenjualan from '../molecules/ChartPenjualan';

export default function RingkasanPenjualan() {
  const datas = Array.from({ length: 30 }, (_, i) =>
    Math.floor(Math.random() * (500 - 1 + i) + 1)
  );

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col gap-5 w-max">
      <div className="flex flex-col gap-5">
        <h1 className="text-[24px] font-medium">Ringkasan Penjualan</h1>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-gray-500">Pemasukan</p>
          <p className="font-semibold text-[24px]">+Rp 200.000</p>
        </div>
      </div>
      <ChartPenjualan datas={datas} />
    </div>
  );
}
