import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function AddProductAtom() {
  return (
    <div className="flex items-center ">
      <div className="bg-orange rounded-full p-[2px]">
        <IoAdd className=" text-white text-xl font-bold" />
      </div>
      <Link className="font-poppins text-xl p-4 rounded-full text-orange  font-normal">Tambah Menu</Link>
    </div>
  );
}
