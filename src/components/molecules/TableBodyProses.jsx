import { Select } from '@mantine/core';
import axios from 'axios';
import { notifyError, notifyLoading, notifySuccess } from '../atoms/Toast';

export const TableBodyProses = ({
  id,
  idOrder,
  name,
  date,
  address,
  menu,
  price,
  satuan,
  total,
  type,
  image,
  fetchData,
}) => {
  const handleUpdatePesanan = async (typeValue) => {
    notifyLoading('Proses update pesanan...', 'update-pesanan');
    try {
      await axios.put(
        `https://6569e491de53105b0dd7d443.mockapi.io/api/dummy/pesanan/${id}`,
        {
          type: typeValue,
        }
      );
      fetchData();
      notifySuccess('Pesanan berhasil diupdate.', 'update-pesanan');
    } catch (error) {
      console.log(error);
      notifyError('Pesanan gagal diupdate.', 'update-pesanan');
    }
  };

  return (
    <tr id="pesananmap-proses">
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
      <td className="px-3 py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
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
      <td className="py-6 text-start whitespace-no-wrap font-normal text-[19px] border-b border-gray-400">
        <div className="bg-white shadow-md rounded-full w-[170px] py-0 mt-0 relative right-auto left-auto">
          <Select
            variant="unstyled"
            size="xl"
            radius="xl"
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.orange[9]
                        : theme.colors.orange[1],
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.white
                        : theme.colors.dark[9],
                    border:
                      theme.colorScheme === 'dark'
                        ? '1px solid #E25E3E'
                        : '1px solid #E25E3E',
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                '&[data-hovered]': {},
              },
            })}
            defaultValue={typeCheck(type)}
            data={['Proses', 'Selesai', 'Batal', 'Pending']}
            onChange={(e) => {
              console.log(e);
              handleUpdatePesanan(typeCheck(e.toLowerCase()).toLowerCase());
            }}
            className="pl-5 w-[170px] h-[55px] mt-0"
          />
        </div>
      </td>
      <td className="px-2"></td>
    </tr>
  );
};

const typeCheck = (type) => {
  switch (type) {
    case 'selesai':
      return 'Selesai';
    case 'proses':
      return 'Proses';
    case 'batal':
      return 'Batal';
    default:
      return 'Pending';
  }
};
