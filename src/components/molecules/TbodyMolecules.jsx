import React, { useState } from 'react';
import { Switch, Loader } from '@mantine/core';
import { DOTS_THREE } from '../../assets';

export default function TbodyMolecules(props) {
  const { formatCategory, datas, loading, handleDelete, handleStatus } = props;

  const [isChecked, setIsChecked] = useState({});
  const [opened, setOpened] = useState({});

  const toggleRow = (id) => {
    setOpened((prevOpened) => ({
      ...prevOpened,
      [id]: !prevOpened[id],
    }));
  };

  const handleChange = async (e, id) => {
    const target = e.currentTarget;
    const value = target.checked;

    setIsChecked((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    const status = datas.find((data) => data.id === id)?.status || '';
    const newStatus = status === 'ready' ? 'Kosong' : 'Tersedia';
    try {
      await handleStatus(id, newStatus);
    } catch (error) {
      console.log(error);
    }

    handleStatus(id);
  };

  // Format Harga (Rupiah)
  const PriceIDR = (price) => {
    return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <tbody className={`${loading && 'relative'}`}>
      {datas?.map((data) => (
        <tr key={data.id}>
          <td>
            <img src={data.image} alt="" className="w-[108px] h-[108px] rounded-3xl mb-2" />
          </td>
          <td>{data.name}</td>
          <td>{formatCategory(data.categoryid)}</td>
          <td>{PriceIDR(data.price)}</td>
          <td className="flex items-center mt-10">
            <Switch checked={isChecked[data.id] || false} onChange={(e) => handleChange(e, data.id)} color="red" />
            <p className="text-sm ml-2">{isChecked[data.id] ? 'Tersedia' : 'Kosong'}</p>

            <div className="relative flex">
              <img src={DOTS_THREE} opened={opened[data.id] || false} onClick={() => toggleRow(data.id)} className="ml-5 w-8 cursor-pointer rounded-full" />
              <div className={`flex flex-col w-28 bg-white rounded-sm shadow-md overflow-hidden absolute -right-32 -top-7 ${opened[data.id] ? 'block' : 'hidden'}`}>
                <button className="hover:bg-orange hover:text-white px-5 py-2">Edit</button>
                <button onClick={() => handleDelete(data.id)} className="hover:bg-orange hover:text-white px-5 py-2">
                  Hapus
                </button>
              </div>
            </div>
          </td>
        </tr>
      ))}
      {loading && <Loader color="orange" className="absolute left-[50%]" />}
    </tbody>
  );
}
