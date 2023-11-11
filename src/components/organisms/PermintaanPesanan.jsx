import ListPermintaanPesanan from '../molecules/ListPermintaanPesanan';

export default function PermintaanPesanan() {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8">
      <h1 className="text-[24px] font-medium">Permintaan Pesanan</h1>
      <div className="flex flex-col gap-6 mt-7">
        {dataPermintaanPesanan.map((item, index) => (
          <ListPermintaanPesanan key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const dataPermintaanPesanan = [
  {
    imgUrl: '',
    name: 'Kentang Goreng',
    note: 'Sedang, tambah smoke beef, mozzarella',
    orderCode: '#0004321',
    price: 15_000,
    quantity: 3,
    status: 'terkirim',
    customerName: 'Hydre',
    customerAddress: 'Jl. Tebet dalam timur no xx, Jakarta',
  },
  {
    imgUrl: '',
    name: 'Garlic Bread',
    note: 'Mozzarella',
    orderCode: '#0004322',
    price: 10_000,
    quantity: 2,
    status: 'dibatalkan',
    customerName: 'Hydre',
    customerAddress: 'Jl. Tebet dalam timur no xx, Jakarta',
  },
  {
    imgUrl: '',
    name: 'Napoli Penne',
    note: '',
    orderCode: '#0004323',
    price: 20_000,
    quantity: 3,
    status: 'pending',
    customerName: 'Reza',
    customerAddress: 'Jl. Tebet dalam timur no xx, Jakarta',
  },
  {
    imgUrl: '',
    name: 'Lamian',
    note: '',
    orderCode: '#0004324',
    price: 15_000,
    quantity: 1,
    status: 'pending',
    customerName: 'Kevin',
    customerAddress: 'Jl. Tebet dalam timur no xx, Jakarta',
  },
];
