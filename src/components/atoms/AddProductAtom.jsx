import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function AddProductAtom() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <Link onClick={() => setIsActive(!isActive)} className="font-poppins text-xl p-4 rounded-full text-orange  font-normal flex gap-3">
        <div className="bg-orange rounded-full px-1 pt-1">
          <IoAdd className=" text-white text-xl font-bold" />
        </div>
        Tambah Menu
      </Link>
      <div className={`bg-white flex flex-col shadow-md text-center font-poppins text-surface font-thin mt-2 absolute left-3 ${isActive ? 'block' : 'hidden'}`}>
        <Link to={'/admin/menutambah'} className="px-3 py-3 hover:bg-orange hover:text-white">
          Tambah Menu Satuan
        </Link>
        <Link to={'/admin/menuconvert'} className="px-5 py-3 hover:bg-orange hover:text-white">
          Convert Menu
        </Link>
      </div>
    </div>
  );
}
