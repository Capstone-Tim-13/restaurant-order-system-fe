import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { PESANAN_ICON, NOTIFICATION_ICON, LEFT_CIRCLE_ICON } from "../../assets";
import { Link } from "react-router-dom";

export default function NotifikasiPesan() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="relative inline-flex items-center text-sm font-medium text-center focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
        onClick={toggleDropdown}
      >
        <IoMdNotifications size={45} />
      </button>

      <div
        id="dropdownNotification"
        className={`absolute z-20 ${showDropdown ? "" : "hidden"} w-300 h-400 max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 border top-32 right-80`}
        aria-labelledby="dropdownNotificationButton"
      >
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="pesanan" src={NOTIFICATION_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">Terdapat 51 Order baru</div>
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">menunggu konfirmasi</div>
            </div>
          </a>
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="notifikasi" src={PESANAN_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">Pesanan baru masuk order</div>
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">
                ID <span className="text-yellow-800">#25334</span>
              </div>
            </div>
          </a>
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="notifikasi" src={PESANAN_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">Pesanan baru masuk order</div>
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">
                ID <span className="text-yellow-800">#25334</span>
              </div>
            </div>
          </a>
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="notifikasi" src={PESANAN_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">Pesanan baru masuk order</div>
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">
                ID <span className="text-yellow-800">#25334</span>
              </div>
            </div>
          </a>
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="notifikasi" src={PESANAN_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">Pesanan baru masuk order</div>
              <div className="text-black text-sm mb-1.5 dark:text-gray-400">
                ID <span className="text-yellow-800">#25334</span>
              </div>
            </div>
          </a>
          <Link to="/admin/pesanan" className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 pb-1.5">
            <div className="flex items-center justify-between">
              <div className="text-amber-900 text-sm mb-1.5 dark:text-amber-900 pt-1.5 pl-14">Lihat semua notifikasi</div>
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <img className="" id="notifikasi" src={LEFT_CIRCLE_ICON} alt="Left Circle Icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
