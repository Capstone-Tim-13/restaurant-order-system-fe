import ListCountTransaksi from '../molecules/ListCountTransaksi';

export default function InfoTransaksi({ datas }) {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8">
      <h1 className="text-[24px] font-medium">Transaksi</h1>
      <div className="flex flex-col gap-6 mt-7">
        {datas?.map((item, index) => (
          <ListCountTransaksi key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
