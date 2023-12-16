import { DEFAULT_PROFILE_ADMIN } from '../../assets';
import NotifikasiPesan from './NotifikasiPesan';
import { useSelector } from 'react-redux';

export default function Topbar({ title }) {
  const store = useSelector((state) => state.title);

  return (
    <div className="sticky top-0 w-full h-max bg-white shadow-md z-20 p-8 pl-16 flex items-center justify-between">
      <h1 className="text-[30px] font-semibold">{title || store.title}</h1>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-12 text-brown">
          <NotifikasiPesan />
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
