import React, { useEffect, useState } from 'react';
import SeachMolecules from '../molecules/SeachMolecules';
import MenuLinkMolecules from '../molecules/MenuLinkMolecules';

import DEFAULT_PROFILE_ADMIN from '../../assets/images/potato.png';
import TheadMolecules from '../molecules/TheadMolecules';
import TbodyMolecules from '../molecules/TbodyMolecules';
import axios from 'axios';

const initalLink = ['Semua Kategori', 'Apprtizer', 'Dessert', 'Ala Carte', 'Paket Hemat', 'Minum'];
export default function MenuOrganism() {
  const [isActive, setIsActive] = useState('Semua Kategori');
  const [datas, setDatas] = useState([]);
  const [sortedData, setSortedData] = useState(datas);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const api = 'https://654b557f5b38a59f28eee3f9.mockapi.io/products';
      try {
        const response = await axios.get(api);
        const responseData = await response.data;
        setDatas(responseData);
        setSortedData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Fungsi Search Product
  const handleChange = (e) => {
    const inputProduct = e.target.value;
    setSearch(inputProduct);

    const searching = sortedData.filter((data) => {
      return data.name.toLowerCase().includes(inputProduct);
    });

    inputProduct !== '' ? setSortedData(searching) : setSortedData(datas);
  };

  // Fungsi Ketika Link Kategori Diklik
  const handleCLickLink = (link) => {
    setIsActive(link);
  };

  // Fungsi Sortir by Name
  const sortByName = () => {
    const sortedByName = [...datas].sort((a, b) => {
      const nameA = a.name.toLowerCase() || '';
      const nameB = b.name.toLowerCase() || '';
      return nameA.localeCompare(nameB);
    });
    setSortedData(sortedByName);
  };

  // Fungsi Sortir By Date
  const sortByDate = () => {
    const sortedByDate = [...datas].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedData(sortedByDate);
  };

  // Fungsi Sortir Product
  const sortByProduct = (kategori) => {
    const sortByKategori = datas.filter((data) => data.kategori === kategori);
    setSortedData(sortByKategori);
  };

  const allProduct = () => {
    setSortedData(datas);
  };

  return (
    <div>
      <SeachMolecules sortByName={sortByName} sortByDate={sortByDate} value={search} handleChange={handleChange} />
      <div className="w-full bg-white rounded-3xl shadow-lg py-[42px] px-[56px] mt-10">
        <MenuLinkMolecules initalLink={initalLink} allProduct={allProduct} sortByProduct={sortByProduct} handleCLickLink={handleCLickLink} isActive={isActive} />

        <table className="mt-12 w-full font-poppins text-xl">
          <TheadMolecules />
          <TbodyMolecules img={DEFAULT_PROFILE_ADMIN} datas={sortedData} />
        </table>
      </div>
    </div>
  );
}
