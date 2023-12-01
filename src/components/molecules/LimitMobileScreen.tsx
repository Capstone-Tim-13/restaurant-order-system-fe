import React from 'react';
import { TbDeviceMobileOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function LimitMobileScreen() {
  return (
    <div className="bg-secondary w-screen h-screen grid place-items-center p-5">
      <div className="max-w-[400px] text-center flex flex-col items-center gap-5 bg-white rounded-lg p-10 shadow-lg">
        <TbDeviceMobileOff size={60} className="text-gray-400" />
        <p className="text-gray-400">
          Mohon maaf halaman ini tidak mendukung untuk layar handphone. Silahkan
          beralih ke mode desktop. (lebar minimal 850px)
        </p>
        <Link
          to="/"
          className="px-5 py-3 rounded-md bg-primary text-white shadow-md cursor-pointer hover:shadow-none transition-all duration-300 mt-5">
          Home
        </Link>
      </div>
    </div>
  );
}
