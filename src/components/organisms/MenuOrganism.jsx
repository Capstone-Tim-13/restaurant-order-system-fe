import React, { useEffect, useState } from 'react';
import SeachMolecules from '../molecules/SeachMolecules';
import MenuLinkMolecules from '../molecules/MenuLinkMolecules';

import DEFAULT_PROFILE_ADMIN from '../../assets/images/potato.png';
import TheadMolecules from '../molecules/TheadMolecules';
import TbodyMolecules from '../molecules/TbodyMolecules';
import axios from '../../api/axios';
import { useSelector } from 'react-redux';

const initalLink = ['Semua Kategori', 'Apprtizer', 'Dessert', 'Ala Carte', 'Paket Hemat', 'Minum'];
export default function MenuOrganism() {
  const [isActive, setIsActive] = useState('Semua Kategori');
  const [datas, setDatas] = useState([]);
  const [sortedData, setSortedData] = useState(datas);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/admin/menu', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = await response.data;
        const results = await responseData.results;
        console.log(results);
        setDatas(results);
        setSortedData(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  // fungsi Hapus Data
  const handleDelete = (id) => {
    try {
      axios.delete(`/admin/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const deleteData = sortedData.filter((data) => data.id !== id);
      setSortedData(deleteData);
      setDatas(deleteData);
      console.log(deleteData);
    } catch (error) {
      console.log(error);
    }
  };

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

  // Format Kategori
  const categoriMap = {
    1: 'Apprtizer',
    2: 'Dessert',
    3: 'Ala Carte',
    4: 'Paket Hemat',
    5: 'Minum',
  };
  const formatCategory = (category) => {
    return categoriMap[category];
  };

  // semua Produk
  const allProduct = () => {
    setSortedData(datas);
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
  const sortByProduct = (categoryid) => {
    const sortByKategori = datas.filter((data) => formatCategory(data.categoryid) === categoryid);
    setSortedData(sortByKategori);
  };

  return (
    <div>
      <SeachMolecules sortByName={sortByName} sortByDate={sortByDate} value={search} handleChange={handleChange} />
      <div className="w-full bg-white rounded-3xl shadow-lg py-[42px] px-[56px] mt-10">
        <MenuLinkMolecules initalLink={initalLink} allProduct={allProduct} sortByProduct={sortByProduct} handleCLickLink={handleCLickLink} isActive={isActive} />

        <table className={`mt-12 w-full font-poppins text-xl ${isLoading && 'h-1000'}`}>
          <TheadMolecules />
          <TbodyMolecules img={DEFAULT_PROFILE_ADMIN} formatCategory={formatCategory} datas={sortedData} loading={isLoading} handleDelete={handleDelete} />
        </table>
      </div>
    </div>
  );
}
