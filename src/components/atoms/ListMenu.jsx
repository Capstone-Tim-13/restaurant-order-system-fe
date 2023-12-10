import axios from '../../api/axios';
import formatCategory from '../../utils/formatCategory';
import formatCurrency from '../../utils/formatCurrency';
import { Switch } from '@mantine/core';
import { useSelector } from 'react-redux';
import { notifyError, notifyLoading, notifySuccess } from './Toast';
import { DEFAULT_FOTO_MAKANAN, DOTS_THREE } from '../../assets';
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';

export default function ListMenu({ data, fetchData }) {
  const { token } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(data.status);
  const ref = useClickOutside(() => setIsOpen(false));

  const handleDelete = async (id) => {
    notifyLoading('Proses hapus...', 'hapus-menu');
    try {
      await axios.delete(`/admin/delete/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      notifySuccess('Menu berhasil dihapus.', 'hapus-menu');
      fetchData();
    } catch (error) {
      console.log(error);
      notifyError('Menu gagal dihapus.', 'hapus-menu');
    }
  };

  const handleUpdateStatus = async (id, isChecked) => {
    notifyLoading('Proses update...', 'update-menu');
    try {
      await axios.put(
        `/admin/status/${id}`,
        { status: isChecked ? 'ready' : 'not ready' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess('Status berhasil diupdate...', 'update-menu');
      setIsChecked(isChecked);
    } catch (error) {
      console.log(error);
      notifyError('Status berhasil diupdate...', 'update-menu');
    }
  };

  return (
    <tr>
      <td>
        <img
          src={data.image || DEFAULT_FOTO_MAKANAN}
          alt=""
          className="w-[108px] h-[108px] rounded-3xl mb-2"
        />
      </td>
      <td>{data.name}</td>
      <td>{formatCategory(data.categoryid)}</td>
      <td>Rp {formatCurrency(data.price)}</td>
      <td className="flex items-center mt-10">
        <Switch
          checked={isChecked}
          onChange={(e) => handleUpdateStatus(data.id, e.currentTarget.checked)}
          color="red"
        />
        <p className="text-sm ml-2">{isChecked ? 'Tersedia' : 'Kosong'}</p>

        <div className="relative flex">
          <img
            src={DOTS_THREE}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-5 w-8 cursor-pointer rounded-full"
          />
          <div
            className={`flex flex-col w-28 bg-white rounded-sm shadow-md overflow-hidden absolute -right-32 -top-7 ${
              isOpen ? 'block' : 'hidden'
            }`}
            ref={ref}>
            <button className="hover:bg-orange hover:text-white px-5 py-2">
              Edit
            </button>
            <button
              onClick={() => handleDelete(data.id)}
              className="hover:bg-orange hover:text-white px-5 py-2">
              Hapus
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
