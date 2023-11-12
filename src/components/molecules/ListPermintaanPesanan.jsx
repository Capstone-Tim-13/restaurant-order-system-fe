import { DEFAULT_FOTO_MAKANAN } from '../../assets';
import cn from '../../utils/cn';

export default function ListPermintaanPesanan({
  imgUrl,
  name,
  note,
  orderCode,
  price,
  quantity,
  status,
  customerName,
  customerAddress,
}) {
  return (
    <div className="flex gap-5 w-[800px] justify-between items-center">
      <div className="flex items-center gap-5">
        <img
          src={imgUrl || DEFAULT_FOTO_MAKANAN}
          alt="foto"
          className="rounded-full w-[69px] h-[69px]"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">{name}</h1>
          <p className="text-[12px] text-black/80 w-[200px] whitespace-nowrap overflow-hidden overflow-ellipsis">
            Catatan : {note ? note : '-'}
          </p>
          <p className="text-[12px] text-[#E25E3E]">{orderCode}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-medium">{customerName}</h1>
        <p className="text-[12px] text-black/80 max-w-[122px] max-h-[32px] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {customerAddress}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-medium">Rp {price}</p>
        <p className="text-gray-500">x {quantity}</p>
      </div>
      <div
        className={cn(
          'p-3 w-[130px] text-center rounded-3xl font-semibold capitalize',
          {
            'bg-green-200 text-green-700': status?.toLowerCase() === 'terkirim',
            'bg-red-200 text-red-700': status?.toLowerCase() === 'dibatalkan',
            'bg-orange-200 text-orange-700':
              status?.toLowerCase() === 'pending',
          }
        )}>
        {status}
      </div>
    </div>
  );
}
