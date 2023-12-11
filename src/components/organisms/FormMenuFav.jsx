import ListMenuFav from '../atoms/ListMenuFav';
import DropDownK from '../atoms/DropDownK';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function FormMenuFav() {
  const [selectedCategory, setSelectedCategory] = useState('Appertizer');
  const [datasFavorit, setDatasFavorit] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          'https://mocki.io/v1/d112a8cc-9d17-446e-9a42-87049a60a783'
        );
        setDatasFavorit(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const filterDataCategory = datasFavorit
    .filter((item) => item.kategori === selectedCategory)
    .sort((a, b) => b.likes - a.likes);

  return (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
      <div className="flex flex-col w-full gap-1">
        <div className="flex justify-between">
          <div className="text-xl font-semibold">
            Menu Favorit
            <div className="text-xs font-light text-gray-500">
              Trending Menu Bulan November
            </div>
          </div>
          <div>
            <DropDownK
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <ListMenuFav datas={filterDataCategory} />
      </div>
    </div>
  );
}
