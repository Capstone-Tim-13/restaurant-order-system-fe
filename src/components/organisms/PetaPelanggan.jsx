import CountPetaPelanggan from '../atoms/CountPetaPelanggan';
import ChartPelanggan from '../molecules/ChartPelanggan';

export default function PetaPelanggan() {
  const pelangganDatas = [];
  const pelangganBaruDatas = [];
  const penjualanDatas = [];

  for (let i = 0; i < 30; i++) {
    const x = 2 * (i + 1);

    if (x > 30) {
      break; // Menghentikan perulangan ketika x sama dengan 30
    }

    pelangganDatas.push({
      y: Math.floor(Math.random() * (500 - 0 + i) + 0),
      x: x,
    });

    pelangganBaruDatas.push({
      y: Math.floor(Math.random() * (500 - 0 + i) + 0),
      x: x,
    });

    penjualanDatas.push({
      y: Math.floor(Math.random() * (500 - 0 + i) + 0),
      x: x,
    });
  }

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col gap-8">
      <h1 className="text-[24px] font-medium">Peta Pelanggan</h1>
      <ChartPelanggan
        pelangganDatas={pelangganDatas}
        pelangganBaruDatas={pelangganBaruDatas}
        penjualanDatas={penjualanDatas}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-[24px] font-medium">Pelanggan</h1>
        <div className="flex items-end gap-8">
          {dataPetaPelangan.map((item, index) => (
            <CountPetaPelanggan key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

const dataPetaPelangan = [
  {
    title: 'Pelanggan',
    count: 32_984,
    persent: 30,
    color: '#783525',
  },
  {
    title: 'Pelanggan Baru',
    count: 15_674,
    persent: 30,
    color: '#E25E3E',
  },
  {
    title: 'Penjualan',
    count: 5_000_000,
    persent: 40,
    color: '#4D0F27',
  },
];
