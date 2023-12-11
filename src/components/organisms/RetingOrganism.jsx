import React, { useEffect, useState } from 'react';
import { Tabs } from '@mantine/core';
import TotalReting from '../molecules/TotalReting';
import RetingAplikasi from '../molecules/RetingAplikasi';
import RetingWebsite from '../molecules/RetingWebsite';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RetingOrganism() {
  const navigate = useNavigate();
  const params = useLocation();
  const initalLink = ['aplikasi', 'website'];
  const [datas, setDatas] = useState([]);
  const [isActive, setIsActive] = useState(params.search.replace('?tab=', '') || 'aplikasi');

  const handleClick = (link) => {
    setIsActive(link);
    navigate(`/admin/rating?tab=${link}`);
  };

  useEffect(() => {
    const fecthData = async () => {
      const api = 'https://654b557f5b38a59f28eee3f9.mockapi.io/reting';

      try {
        const response = await axios.get(api);
        const responseData = await response.data;
        setDatas(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

  const handleDelete = async (id) => {
    const api = 'https://654b557f5b38a59f28eee3f9.mockapi.io/reting';
    try {
      await axios.delete(`${api}/${id}`);
      const delteData = datas.filter((data) => data.id !== id);
      setDatas(delteData);
    } catch (error) {
      console.log(error);
    }
  };

  const formatTanggal = (tanggal) => {
    const options = {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'Asia/Jakarta',
      timeZoneName: 'short',
    };

    const date = new Date(tanggal);
    console.log(date);
    const formattedDate = date.toLocaleString('id-ID', options).replace(', ', ' ');
    return formattedDate;
  };

  return (
    <div>
      <div className="flex gap-10">
        <TotalReting />
      </div>

      <Tabs defaultValue={isActive} variant="unstyled">
        <div className="flex justify-center shadow-lg mt-10 py-2 bg-white rounded-full w-64">
          {initalLink.map((link, index) => (
            <Tabs.Tab key={index} className={`px-6 py-3 rounded-full text-xl ${isActive === link ? 'bg-brown text-white' : 'text-black'}`} value={isActive === '' ? 'aplikasi' : link} onClick={() => handleClick(link)}>
              {link}
            </Tabs.Tab>
          ))}
        </div>

        <RetingAplikasi handleDelete={handleDelete} datas={datas} formatTanggal={formatTanggal} />
        <RetingWebsite datas={datas} formatTanggal={formatTanggal} handleDelete={handleDelete} />
      </Tabs>
    </div>
  );
}
