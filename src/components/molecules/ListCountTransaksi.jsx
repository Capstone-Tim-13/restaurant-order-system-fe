export default function ListCountTransaksi({
  title,
  transactionCount,
  priceCount,
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-medium">{title}</h1>
      <div className="border rounded-lg border-gray-300 p-4 flex flex-col gap-2 w-[350px]">
        <p className="text-gray-500">Pendapatan</p>
        <h1 className="font-semibold text-[24px]">Rp {priceCount}</h1>
        <p className="text-gray-500">{transactionCount} Transaksi</p>
      </div>
    </div>
  );
}
