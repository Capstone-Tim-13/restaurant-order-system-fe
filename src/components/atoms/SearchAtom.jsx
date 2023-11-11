import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchAtom(props) {
  const { value, handleChange } = props;
  return (
    <div className="mt-5 relative">
      <IoSearch className="text-2xl absolute ml-4 mt-5 text-surface font-semibold" />
      <input type="search" placeholder="Cari" value={value} onChange={handleChange} className="outline-none w-[814px] py-4 pl-12 pr-4 shadow-md rounded-full font-poppins text-2xl placeholder:text-surface" />
    </div>
  );
}
