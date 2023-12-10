import { useState } from "react";
import { Select } from "@mantine/core";
import { RekomendasiTambahMenu } from "../components/organisms/RekomendasiTambahMenu";
import { MENU_ADD_ICON } from "../assets";
import { MenuArrow } from "../components/molecules/MenuArrow";
import cn from "../utils/cn";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  notifyError,
  notifyLoading,
  notifySuccess,
} from '../components/atoms/Toast';

const TambahMenuPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [nameMenu, setNameMenu] = useState('');
  const [descMenu, setDescMenu] = useState('');
  const [priceMenu, setPriceMenu] = useState(0);
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const { token } = useSelector((state) => state.auth);
  const nav = useNavigate();

  const kategoriMenu = [
    {
      label: 'Appetizer',
      value: 1,
    },
    {
      label: 'Dessert',
      value: 2,
    },
    {
      label: 'Ala Carte',
      value: 3,
    },
    {
      label: 'Paket Hemat',
      value: 4,
    },
    {
      label: 'Minum',
      value: 5,
    },
  ];

  //handlechange form
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleName = (e) => setNameMenu(e.target.value);
  const handleDesc = (e) => setDescMenu(e.target.value);
  const handlePrice = (e) => setPriceMenu(e.target.value);

  //handle simpan
  const handleSave = async (e) => {
    e.preventDefault();

    nameMenu == '' ? setError1('Input tidak boleh kosong') : setError1('');
    descMenu == '' ? setError2('Input tidak boleh kosong') : setError2('');
    priceMenu == 0 ? setError3('Input tidak boleh kosong') : setError3('');
    if (
      selectedFile !== null &&
      nameMenu !== '' &&
      descMenu !== '' &&
      selectedValue !== '' &&
      priceMenu !== 0
    ) {
      notifyLoading('Proses menambahkan...', 'tambah-menu');
      console.log({
        image: selectedFile,
        name: nameMenu,
        description: descMenu,
        categoryid: selectedValue,
        price: priceMenu,
      });
      try {
        await axios.post(
          `${import.meta.env.VITE_APP_SERVER_URL}/admin/create/menu`,
          {
            image: selectedFile,
            name: nameMenu,
            description: descMenu,
            categoryid: selectedValue,
            price: priceMenu,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        notifySuccess('Menu Berhasil ditambahkan.', 'tambah-menu');
        nav('/admin/menu');
      } catch (error) {
        console.log(error);
        notifyError('Menu Gagal ditambahkan.', 'tambah-menu');
      }
    }
  };

  return (
    <>
      <MenuArrow />
      <div className="bg-white rounded-xl shadow my-10 pb-20 ">
        <h1 className="font-medium text-[24px] ml-[3.8rem] pt-8">
          Detail Menu
        </h1>
        <div className="flex ml-10 gap-20">
          <div>
            <div className="ml-6 my-6">
              <label className="block font-normal text-[20px] mb-4">
                Foto Menu<span className="text-red-500">*</span>
              </label>
              <div
                className={cn(
                  'border-dashed border-4 border-brown rounded-[38px] bg-gray-200 p-10 mb-4 w-full h-[250px] flex justify-center items-center',
                  { 'max-w-[350px]': selectedFile }
                )}>
                <input
                  type="file"
                  accept=".jpg"
                  onChange={handleFileChange}
                  className="hidden w-full"
                  id="file-input"
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
                    {selectedFile ? (
                      <p className="ml-2 font-normal text-[24px]">
                        {selectedFile.name}
                      </p>
                    ) : (
                      <p className="font-normal text-[24px] text-gray-500">
                        Unggah Foto
                      </p>
                    )}
                  </div>
                </label>
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
                  name="menu-name"
                  id=""
                  className={`bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px] border-red-500 ${
                    nameMenu.length === '' ? 'border-red-700' : 'border-none'
                  }`}
                  placeholder="Nama Menu"
                  value={nameMenu}
                  onChange={handleName}
                />
                <span className="text-right">{nameMenu.length}/150</span>
                {nameMenu.trim().length > 15 ? (
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
                  name="menu-description"
                  id=""
                  cols={8}
                  rows={5}
                  className="bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Deskripsi Menu"
                  value={descMenu}
                  onChange={handleDesc}
                />
                <span className="text-right">{descMenu.length}/150</span>
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
                  type="number"
                  name="menu-price"
                  id=""
                  className="bg-gray-200 rounded-xl py-5 px-8 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Rp"
                  min={0}
                  max={1000000}
                  value={priceMenu}
                  onChange={handlePrice}
                />
                {error3 && (
                  <span className="text-red-500 font-medium text-[18px]">
                    {error3}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="bg-white shadow-md rounded-full w-[11.5rem] h-[3.5rem] mt-[7rem] px-2">
                <Select
                  variant="unstyled"
                  size="xl"
                  id="kategori"
                  data={kategoriMenu}
                  value={selectedValue}
                  onChange={(value) => setSelectedValue(value)}
                  placeholder="Kategori"
                  className="pl-2.5 w-[11.5rem] h-[55px] mt-0"
                  styles={(theme) => ({
                    item: {
                      // applies styles to selected item
                      '&[data-selected]': {
                        '&, &:hover': {
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.orange[9]
                              : theme.colors.orange[1],
                          color:
                            theme.colorScheme === 'dark'
                              ? theme.white
                              : theme.colors.dark[9],
                          border:
                            theme.colorScheme === 'dark'
                              ? '1px solid #E25E3E'
                              : '1px solid #E25E3E',
                        },
                      },

                      // applies styles to hovered item (with mouse or keyboard)
                      '&[data-hovered]': {},
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rekomendasi Menu */}
      <RekomendasiTambahMenu onClick={(e) => handleSave(e)} />
    </>
  );
};

export default TambahMenuPage;
