import React, { useState } from 'react';
import { CEKLIST_CIRCLE, CLOSE_CIRCLE } from '../../assets';
import { Rating, Select } from '@mantine/core';

import img from '../../assets/images/potato.png';

export default function RetingAppAntrian(props) {
  const { datas, formatTanggal } = props;
  const [detailReview, setDetailReview] = useState(false);

  const DataSelects = [
    { value: 'Appetizer', label: 'Appetizer' },
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Ala Carte', label: 'Ala Carte' },
    { value: 'Paket Hemat', label: 'Paket Hemat' },
    { value: 'Minuman', label: 'Minuman' },
  ];

  return (
    <div className={`w-full mt-10 pb-10 px-10 pt-10 bg-white rounded-2xl shadow-md relative ${detailReview ? '' : 'overflow-hidden h-[950px]'}`}>
      <h1 className="text-3xl font-semibold font-poppins">Antrian</h1>
      <button onClick={() => setDetailReview(!detailReview)} className={`fontpopins text-black absolute ${detailReview ? 'bottom-12' : 'bottom-11'} right-10 text-sm font-semibold`}>
        {detailReview ? 'Sembunyikan' : 'Lihat Lainnya'}
      </button>

      {datas.map((data) => (
        <>
          {/* Bagian Judul */}
          <div className="mt-10 flex justify-between">
            {/* Bagian Profile User */}
            <div className="w-1/4 flex gap-6 pt-10 ">
              <div>
                <img src={img} alt="" className="rounded-full" />
              </div>
              <div>
                <p className="font-poppins text-xl text-orange font-light">#KJL23FS</p>
                <h2 className="font-poppins text-xl font-semibold mt-1">Rizky </h2>
                <p className="font-poppins text-surface font-semibold">{formatTanggal(data.tanggal)}</p>
              </div>
            </div>

            <div className="flex w-3/4 gap-5 items-center border-b border-black pb-10 mb-14">
              {/* Bagian Komentar */}
              <div className="w-1/2">
                <div className="flex gap-40">
                  <h1 className="font-poppins text-xl font-semibold mt-1">Mie Lamian</h1>
                  <p className="font-poppins text-surface font-semibold">1 items</p>
                </div>
                <div className="flex gap-2 mt-3">
                  <p className="font-poppins text-surface font-semibold">3.0</p>
                  <Rating value={3} variant="unstyled" />
                </div>
                <div className="mt-3">
                  <p className="font-poppins text-surface font-ligh text-lg">Kuahnya kurang berasa, tapi enak lah buat sekelas lamian</p>
                </div>
              </div>

              {/* Bagian Button Kategori */}
              <div className="w-1/2 relative">
                <Select
                  variant="unstyled"
                  placeholder="Kategori"
                  data={DataSelects}
                  className="w-44 shadow-lg rounded-full py-2 pl-4 placeholder:font-poppins text-surface font-semibold text-2xl border border-inherit bg-white"
                  styles={(theme) => ({
                    item: {
                      // applies styles to selected item
                      '&[data-selected]': {
                        '&, &:hover': {
                          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.orange[9] : theme.colors.orange[1],
                          color: theme.colorScheme === 'dark' ? theme.white : theme.colors.orange[9],
                        },
                      },
                    },
                  })}
                />

                <div className="flex justify-end mt-10 gap-5 items-center">
                  <button className="flex px-6 py-3  gap-2 bg-green-600 hover:bg-green-500 text-white rounded-full transition duration-300 ease-in-out">
                    <img src={CEKLIST_CIRCLE} alt="" />
                    Balas
                  </button>

                  <button className="flex px-6 py-3  gap-2 bg-red-600 hover:bg-red-500 text-white rounded-full transition duration-300 ease-in-out">
                    <img src={CLOSE_CIRCLE} alt="" />
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
