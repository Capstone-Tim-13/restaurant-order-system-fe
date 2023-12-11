import { useEffect } from 'react';
import BarChart from '../atoms/BarChart.jsx';
import DropDownB from '../atoms/DropDownB.jsx';
import { useState } from 'react';
import axios from 'axios';
import formatCurrency from '../../utils/formatCurrency.js';

export default function FormLaporan() {
  const [selectedOption, setSelectedOption] = useState('bulan');
  const [laporan, setLaporan] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          'https://mocki.io/v1/0f54048b-aff3-4450-b0da-bd50d65bcf6c'
        );
        setLaporan(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return !laporan ? (
    <div>Loading...</div>
  ) : (
    <div className="w-full h-full bg-white rounded-xl font-bold shadow-lg grid py-7 px-9 place-items-start">
      <div className="flex flex-col w-full gap-5">
        <div className="text-xl font-semibold flex justify-between">
          Laporan Penjualan
          <div>
            <DropDownB
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
        <BarChart selectedOption={selectedOption} laporan={laporan} />
      </div>
      <div className="flex flex-col text-lg text-left font-semibold py-3">
        Pendapatan
        <span className="text-xl font-poppins font-bold py-2">
          Rp{' '}
          {formatCurrency(
            selectedOption === 'bulan'
              ? laporan?.bulan.pendapatan
              : laporan?.tahun.pendapatan
          )}
        </span>
      </div>
    </div>
  );
}
