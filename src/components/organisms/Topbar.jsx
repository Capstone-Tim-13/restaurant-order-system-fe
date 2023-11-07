import { IoMdNotifications } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DEFAULT_PROFILE_ADMIN } from '../../assets';

export default function Topbar({ title }) {
  return (
    <div className="sticky top-0 w-full h-max bg-white shadow-md z-20 p-8 flex items-center justify-between">
      <h1 className="text-[30px] font-semibold">{title}</h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-12 text-brown">
          <IoMdNotifications size={45} />
          <MdEmail size={45} />
        </div>
        <div className="flex items-center gap-5 border-l pl-10 border-gray-300">
          <div className="text-right">
            <p className="text-gray-500">Selamat datang</p>
            <h1 className="text-3xl font-medium">Admin</h1>
          </div>
          <img
            src={DEFAULT_PROFILE_ADMIN}
            alt=""
            className="w-20 h-20 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
