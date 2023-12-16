import TextMenu from '../components/atoms/Text';
import ButtonMenu from '../components/atoms/Button1';
import UploadFile from '../components/organisms/FormUpload';
import ButtonMenu2 from '../components/atoms/Button2';
import { BACK_MENU } from '../assets';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setTitle } from '../store/slices/titleSlice';
import { useDispatch } from 'react-redux';

export default function MenuConvert() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Convert Menu'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to="/admin/menu" className="flex items-center">
        <img className="" id="back-menu" src={BACK_MENU} />
        <h3 className="text-2xl font-semibold ml-5">Menu</h3>
      </Link>
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-full mx-auto mt-7">
        <TextMenu />
        <ButtonMenu />
        <UploadFile />
        <ButtonMenu2 />
      </div>
    </>
  );
}
