import ListCountTransaksi from '../molecules/ListCountTransaksi';

export default function InfoTransaksi() {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8">
      <h1 className="text-[24px] font-medium">Transaksi</h1>
      <div className="flex flex-col gap-6 mt-7">
        {dataCountTransaksi.map((item, index) => (
          <ListCountTransaksi key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const dataCountTransaksi = [
  {
    title: 'Gopay transaksi online',
    transactionCount: 3,
    priceCount: 100_000,
  },
  {
    title: 'BCA transaksi online',
    transactionCount: 0,
    priceCount: 0,
  },
];
