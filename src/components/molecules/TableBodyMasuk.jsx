import { notifyError, notifyLoading, notifySuccess } from '../atoms/Toast';
import axios from 'axios';

export const TableBodyMasuk = ({
  id,
  idOrder,
  name,
  date,
  address,
  menu,
  price,
  satuan,
  total,
  image,
  fetchData,
}) => {
  const handleTerima = async () => {
    notifyLoading('Proses terima pesanan...', 'diterima-pesanan');
    console.log({ id });
    try {
      await axios.put(
        `https://6569e491de53105b0dd7d443.mockapi.io/api/dummy/pesanan/${id}`,
        {
          type: 'proses',
        }
      );
      fetchData();
      notifySuccess('Pesanan berhasil diterima.', 'diterima-pesanan');
    } catch (error) {
      console.log(error);
      notifyError('Pesanan gagal diterima.', 'diterima-pesanan');
    }
  };

  return (
    <tr id="pesananmap-masuk">
      <td className="px-2"></td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400 text-gray-400">
        {idOrder}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap border-b border-gray-400">
        <div className="flex flex-col">
          <span className="font-medium text-[19px]">{name}</span>
          <span className="text-[0.75rem] font-normal text-gray-600">
            {address}
          </span>
        </div>
      </td>
      <td className="px-2 py-6 text-start whitespace-no-wrap font-medium text-[18px] border-b border-gray-400">
        {date}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        <div className="flex gap-3">
          <img
            src={image}
            className="w-[4.2rem] h-[4.2rem] rounded-full shadow-md"
            alt="gambar-menu"
          />
          <div className="flex flex-col gap-5 my-[1.2rem]">{menu}</div>
        </div>
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        Rp. {price}
      </td>
      <td className="px-3 py-6 text-center whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        {satuan}
      </td>
      <td className="px-3 py-6 text-start whitespace-no-wrap font-medium text-[19px] border-b border-gray-400">
        Rp. {total}
      </td>
      <td className="border-b text-center border-gray-400 px-0 mx-0">
        <button
          type="button"
          className="bg-greenPublish text-white rounded-full font-semibold text-[1rem] py-2 px-4 mr-2"
          onClick={handleTerima}>
          Terima
        </button>
      </td>
      <td className="px-2"></td>
    </tr>
  );
};
