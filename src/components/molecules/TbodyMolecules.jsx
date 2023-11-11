import React, { useState } from 'react';
import { Switch, Burger } from '@mantine/core';

export default function TbodyMolecules(props) {
  const { img, datas } = props;

  const [isChecked, setIsChecked] = useState({});
  const [opened, setOpened] = useState({});

  const toggleRow = (id) => {
    setOpened((prevOpened) => ({
      ...prevOpened,
      [id]: !prevOpened[id],
    }));
  };

  const handleChange = (e, id) => {
    const target = e.currentTarget;
    const value = target.checked;

    setIsChecked((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <tbody>
      {datas.map((data) => (
        <tr key={data.id}>
          <td>
            <img src={img} alt="" className="w-[108px] h-[108px] rounded-3xl" />
          </td>
          <td>{data.name}</td>
          <td>{data.kategori}</td>
          <td>Rp.15.000</td>
          <td className="flex items-center mt-10 relative ">
            <Switch checked={isChecked[data.id] || false} onChange={(e) => handleChange(e, data.id)} color="red" />
            <p className="text-sm ml-2">{isChecked[data.id] ? 'Tersedia' : 'Kosong'}</p>

            <Burger opened={opened[data.id] || false} onClick={() => toggleRow(data.id)} size={18} className="ml-5" />
            <div className={`flex flex-col w-28 bg-white rounded-sm shadow-md overflow-hidden absolute right-14 -top-7 ${opened[data.id] ? 'block' : 'hidden'}`}>
              <button className="hover:bg-orange hover:text-white px-5 py-2">Edit</button>
              <button className="hover:bg-orange hover:text-white px-5 py-2">Hapus</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
