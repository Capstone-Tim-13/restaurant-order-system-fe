import React, { useEffect, useState } from 'react';
import { Tabs } from '@mantine/core';
import TotalReting from '../molecules/TotalReting';
import RetingAplikasi from '../molecules/RetingAplikasi';
import RetingWebsite from '../molecules/RetingWebsite';
import axios from 'axios';

export default function RetingOrganism() {
  const initalLink = ['aplikasi', 'website'];
  const [isActive, setIsActive] = useState('aplikasi');

  const [datas, setDatas] = useState([]);

  const handleClick = (link) => {
    setIsActive(link);
  };

  const fecthData = async () => {
    const api = 'https://654b557f5b38a59f28eee3f9.mockapi.io/reting';

    try {
      const response = await axios.get(api);
      const responseData = await response.data;
      setDatas(responseData);
    } catch (error) {}
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div>
      <div className="flex gap-10">
        <TotalReting />
      </div>

      <Tabs defaultValue="first" variant="unstyled">
        <div className="flex justify-center shadow-lg mt-10 py-2 bg-white rounded-full w-64">
          {initalLink.map((link, index) => (
            <Tabs.Tab key={index} className={`px-6 py-3 rounded-full text-xl ${isActive === link ? 'bg-brown text-white' : 'text-black'}`} value={isActive === '' ? 'aplikasi' : link} onClick={() => handleClick(link)}>
              {link}
            </Tabs.Tab>
          ))}
        </div>

        <RetingAplikasi datas={datas} />
        <RetingWebsite datas={datas} />
      </Tabs>
    </div>
  );
}
