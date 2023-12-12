import { useClickOutside } from '@mantine/hooks';
import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function AddProductAtom() {
  const [isActive, setIsActive] = useState(false);
  const ref = useClickOutside(() => setIsActive(false));

  const navigate = useNavigate();

  return (
    <div className="relative">
      <button onClick={() => setIsActive(!isActive)} className="font-poppins text-xl p-4 rounded-full text-orange  font-normal flex gap-3">
        <div className="bg-orange rounded-full p-1">
          <IoAdd className=" text-white text-xl font-bold" />
        </div>
        Tambah Menu
      </button>
      <div ref={ref} className={`bg-white flex flex-col shadow-md text-center font-poppins text-surface font-thin mt-2 absolute left-3 ${isActive ? 'block' : 'hidden'}`}>
        <button onClick={() => navigate('/admin/menutambah')} className="px-3 py-3 hover:bg-orange hover:text-white">
          Tambah Menu Satuan
        </button>
        <button onClick={() => navigate('/admin/menuconvert')} className="px-5 py-3 hover:bg-orange hover:text-white">
          Convert Menu
        </button>
      </div>
    </div>
  );
}
