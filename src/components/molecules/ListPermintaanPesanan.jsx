import { DEFAULT_FOTO_MAKANAN } from '../../assets';
import cn from '../../utils/cn';
import formatCurrency from '../../utils/formatCurrency';

export default function ListPermintaanPesanan({
  imgUrl,
  menu,
  catatan,
  idOrder,
  price,
  satuan,
  type,
  name,
  address,
}) {
  return (
    <div className="flex gap-5 w-[750px] justify-between items-center">
      <div className="flex items-center gap-5">
        <img
          src={imgUrl || DEFAULT_FOTO_MAKANAN}
          alt="foto"
          className="rounded-full w-[69px] h-[69px]"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">{menu}</h1>
          <p className="text-[12px] text-black/80 w-[150px] whitespace-nowrap overflow-hidden overflow-ellipsis">
            Catatan : {catatan ? catatan : '-'}
          </p>
          <p className="text-[12px] text-[#E25E3E]">{idOrder}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-medium">{name}</h1>
        <p className="text-[12px] text-black/80 max-w-[122px] max-h-[32px] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {address}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-medium">Rp {formatCurrency(price)}</p>
        <p className="text-gray-500">x {satuan}</p>
      </div>
      <div
        className={cn(
          'p-3 w-[120px] text-center rounded-3xl font-semibold capitalize',
          {
            'bg-green-200 text-green-700': type?.toLowerCase() === 'selesai',
            'bg-red-200 text-red-700': type?.toLowerCase() === 'batal',
            'bg-orange-200 text-orange-700': type?.toLowerCase() === 'pending',
          }
        )}>
        {type}
      </div>
    </div>
  );
}
