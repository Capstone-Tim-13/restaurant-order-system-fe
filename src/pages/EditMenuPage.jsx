import { useEffect, useState } from 'react';
import { RekomendasiTambahMenu } from '../components/organisms/RekomendasiTambahMenu'; // Add missing import
import { MENU_ADD_ICON } from '../assets';
import { MenuArrow } from '../components/molecules/MenuArrow';
import cn from '../utils/cn';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  notifyError,
  notifyLoading,
  notifySuccess,
} from '../components/atoms/Toast';
import urlToBlob from '../utils/urlToBlob';
import DropdownK, { category } from '../components/atoms/DropDownK';
import { setTitle } from '../store/slices/titleSlice';
import { useDispatch } from 'react-redux';

export default function EditMenuPage() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [categorySelected, setCategorySelected] = useState(null);
   const [error1, setError1] = useState('');
   const [error2, setError2] = useState('');
   const [error3, setError3] = useState('');
   const [error4, setError4] = useState('');
   const [error5, setError5] = useState('');
  const [data, setData] = useState({
    image: null,
    name: '',
    description: '',
    categoryid: '',
    price: '0',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/admin/menu/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const results = data.results;
        const file = await urlToBlob(results.image);
        setData({
          ...results,
          image: file,
        });
        getCategoryValue(results.categoryid);
      } catch (error) {
        console.log(error);
      }
    };

    dispatch(setTitle('Edit Menu'));
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, token]);

  const getCategoryValue = (categoryid) => {
    const categoryResult = category.find((item) => item.value === categoryid);
    setCategorySelected(categoryResult);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      image: e.target.files[0] || data.image,
    });
  };

  const handleSubmit = async () => {
     data.name == '' ? setError1('Input tidak boleh kosong') : setError1('');
    data.description == '' ? setError2('Input tidak boleh kosong') : setError2('');
    data.price == 0 ? setError3('Input tidak boleh kosong') : setError3('');
    data.categoryid == ''
      ? setError4('Input tidak boleh kosong')
      : setError4('');
    data.image == null
      ? setError5('Input tidak boleh kosong')
      : setError5('');

    if (
      data.image !== null &&
      data.name !== '' &&
      data.description !== '' &&
      data.categoryid !== '' &&
      data.price !== 0
    ) {
      notifyLoading('Proses update menu...', 'edit-menu');
      console.log(data);
      try {
        const formData = new FormData();
        formData.append('image', data.image || '');
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('categoryid', data.categoryid);
        formData.append('price', data.price);

        await axios.put(`/admin/update/menu/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        notifySuccess('Menu Berhasil diupdate.', 'edit-menu');
        navigate('/admin/menu');
      } catch (error) {
        notifyError('Menu Gagal diupdate.', 'edit-menu');
        console.log(error.response.data);
      }
    }
  };

  return (
    <>
      <MenuArrow />
      <div className="bg-white rounded-xl shadow my-10 pb-20 ">
        <h1 className="font-medium text-[24px] ml-[3.8rem] pt-8">Edit Menu</h1>
        <div className="flex ml-10 gap-20">
          <div>
            <div className="ml-6 my-6">
              <label className="block font-normal text-[20px] mb-4">
                Foto Menu<span className="text-red-500">*</span>
              </label>
              <div
                className={cn(
                  'border-dashed border-4 border-brown rounded-[38px] bg-gray-200 p-10 mb-4 w-full h-[250px] flex justify-center items-center',
                  { 'max-w-[350px]': data.image }
                )}>
                <input
                  type="file"
                  accept=".jpg"
                  className="hidden w-full"
                  id="file-input"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center">
                  <img
                    src={MENU_ADD_ICON}
                    alt="add-icon"
                    className="my-5 mx-2"
                  />
                  <div className="ml-2">
                    {data.image && (
                      <>
                        <p className="ml-2 font-normal text-[24px]">
                          {data.image.name}
                        </p>
                      </>
                    )}
                    {!data.image && (
                      <p className="font-normal text-[24px] text-gray-500">
                        Unggah Foto
                      </p>
                    )}
                  </div>
                </label>
                {error5 && (
                  <span className="text-red-500 font-medium text-[18px] absolute -bottom-10">
                    {error5}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-content-center">
            <div className="px-[3rem]">
              <div className="flex flex-col pt-[4rem]">
                <label htmlFor="" className="text-[20px] mb-5">
                  Nama Menu<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className={`bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px] border-red-500 border-none`}
                  placeholder="Nama Menu"
                  required
                />
                <span className="text-right">{data.name.length}/150</span>
                {data.name.trim().length > 15 ? (
                  <span className="text-red-500 font-medium text-[18px]">
                    Nama menu lebih dari 15 karakter
                  </span>
                ) : (
                  <span></span>
                )}
                {error1 && (
                  <span className="text-red-500 font-medium text-[18px]">
                    {error1}
                  </span>
                )}
              </div>
              <div className="flex flex-col pt-[3rem]">
                <label htmlFor="" className="mb-5 text-[20px]">
                  Deskripsi Menu<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  id=""
                  cols={8}
                  rows={5}
                  value={data.description}
                  onChange={handleChange}
                  className="bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Deskripsi Menu"
                  required
                />
                <span className="text-right">
                  {data.description.length}/150
                </span>
                {error2 && (
                  <span className="text-red-500 font-medium text-[18px]">
                    {error2}
                  </span>
                )}
              </div>
              <div className="flex flex-col pt-[4rem]">
                <label htmlFor="" className="text-[20px]">
                  Detail Harga<span className="text-red-500">*</span>
                </label>
                <span className="mb-5 text-[14px]">
                  Harga sudah termasuk pajak dan lain-lain
                </span>
                <input
                  value={data.price}
                  type="number"
                  name="price"
                  onChange={handleChange}
                  className="bg-gray-200 rounded-xl py-5 px-8 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Rp"
                  min={0}
                  max={1000000}
                  required
                />
                {error3 && (
                  <span className="text-red-500 font-medium text-[18px]">
                    {error3}
                  </span>
                )}
              </div>
            </div>
            <div className="relative top-28 left-10">
              <DropdownK
                selectedCategory={categorySelected}
                setSelectedCategory={(e) => {
                  setData({
                    ...data,
                    categoryid: e.value,
                  });
                  setCategorySelected(e);
                }}
              />
              {error4 && (
                <span className="text-red-500 font-medium text-[18px] absolute top-14 left-3 whitespace-nowrap">
                  {error4}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <RekomendasiTambahMenu onClick={handleSubmit} />
    </>
  );
}
