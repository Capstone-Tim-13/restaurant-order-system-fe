import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function AddProductAtom() {
  return (
    <div className="hover:opacity-70 transition duration-300 ease-in-out">
      <Link to={'/admin/menutambah'} className="font-poppins text-xl p-4 rounded-full text-orange  font-normal flex gap-3">
        <div className="bg-orange rounded-full px-1 pt-1">
          <IoAdd className=" text-white text-xl font-bold" />
        </div>
        Tambah Menu
      </Link>
    </div>
  );
}
