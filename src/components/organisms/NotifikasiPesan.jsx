import { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { PESANAN_ICON, NOTIFICATION_ICON, LEFT_CIRCLE_ICON } from "../../assets";
import { Link } from "react-router-dom";
import axios from "axios";
import { useClickOutside } from '@mantine/hooks';

export default function NotifikasiPesan() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const ref = useClickOutside(() => setShowDropdown(false));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://6569e491de53105b0dd7d443.mockapi.io/api/dummy/pesanan");
        const allNotifications = response.data;
        const pendingNotifications = allNotifications.filter((notification) => notification.type === "pending");

        const firstFourPendingNotifications = pendingNotifications.slice(0, 5);
        setNotifications(firstFourPendingNotifications);
      } catch (error) {
        console.error("Fetching data error:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="relative inline-flex items-center text-sm font-medium text-center focus:outline-none"
        type="button"
        onClick={toggleDropdown}>
        <IoMdNotifications size={45} />
      </button>

      <div
        id="dropdownNotification"
        className={`absolute z-20 ${
          showDropdown ? '' : 'hidden'
        } w-300 h-400 max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow border top-32 right-80`}
        aria-labelledby="dropdownNotificationButton"
        ref={ref}>
        <div className="divide-y divide-gray-100">
          <a href="#" className="flex px-4 py-3 hover:bg-gray-100 border-b">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <img className="" id="notifikasi" src={NOTIFICATION_ICON} />
            </div>
            <div className="w-full ps-3">
              <div className="text-black text-sm mb-1.5">
                Terdapat {notifications.length} Order baru
              </div>
              <div className="text-black text-sm mb-1.5">
                menunggu konfirmasi
              </div>
            </div>
          </a>

          {notifications.map((notification) => (
            <a
              href="#"
              key={notification.id}
              className="flex px-4 py-3 hover:bg-gray-100 border-b">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
                <img className="" id="notifikasi" src={PESANAN_ICON} />
              </div>
              <div className="w-full ps-3">
                <div className="text-black text-sm mb-1.5">
                  Pesanan baru masuk order
                </div>
                <div className="text-black text-sm mb-1.5">
                  ID{' '}
                  <span className="text-yellow-800">
                    {notification.idOrder}
                  </span>
                </div>
              </div>
            </a>
          ))}

          <Link
            to="/admin/pesanan"
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 pb-1.5"
            onClick={toggleDropdown}>
            <div className="flex items-center justify-between">
              <div className="text-amber-900 text-sm mb-1.5 pt-1.5 pl-14">
                Lihat semua notifikasi
              </div>
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <img
                  className=""
                  id="pesanan"
                  src={LEFT_CIRCLE_ICON}
                  alt="Left Circle Icon"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
