import React, { useState } from 'react';
import { CHECKLIST_BUTTON } from '../../assets';
import { CloseButton, Rating } from '@mantine/core';

import img from '../../assets/images/potato.png';

export default function RetingWebPublish(props) {
  const { datas, formatTanggal, handleDelete } = props;
  const [detailReview, setDetailReview] = useState(false);

  return (
    <div className={`w-full mt-10 pb-10 px-10 pt-10 bg-white rounded-2xl shadow-md relative ${detailReview ? '' : 'overflow-hidden h-[740px]'}`}>
      <h1 className="text-3xl font-semibold font-poppins">Terpublish</h1>
      <button onClick={() => setDetailReview(!detailReview)} className={`fontpopins text-black absolute ${detailReview ? 'bottom-12' : 'bottom-5'} right-10 text-sm font-semibold`}>
        {detailReview ? 'Sembunyikan' : 'Lihat Lainnya'}
      </button>

      {datas.map((data) => (
        <>
          {/* Bagian Judul */}
          <div className="mt-10 flex justify-between ">
            {/* Bagian Profile User */}
            <div className="w-1/4 flex gap-6 ">
              <div>
                <img src={data.avatar} alt="" className="rounded-full" />
              </div>
              <div>
                <p className="font-poppins text-xl text-orange font-light">#{data.id}</p>
                <h2 className="font-poppins text-xl font-semibold mt-1">{data.nama}</h2>
                <p className="font-poppins text-surface font-semibold">{formatTanggal(data.tanggal)}</p>
              </div>
            </div>

            <div className="flex w-3/4 gap-5 items-center border-b border-black pb-10 mb-14">
              {/* Bagian Komentar */}
              <div className="w-2/3">
                <div className="flex gap-3">
                  <p className="font-poppins text-surface font-semibold">{data.rating}.0</p>
                  <Rating value={data.rating} variant="unstyled" readOnly />
                </div>
                <div className="mt-3">
                  <p className="font-poppins text-surface font-ligh text-lg">{data.komentar}</p>
                </div>
              </div>

              {/* Bagian Button Kategori */}
              <div className="w-1/3 relative flex justify-center items-center">
                <CloseButton onClick={() => handleDelete(data.id)} variant="unstyled" className="bg-red-600 text-white font-semibold rounded-full absolute top-4 right-4" />

                <button className="flex px-10 py-4 gap-2 bg-gray-300 text-surface font-semibold rounded-full">
                  <img src={CHECKLIST_BUTTON} alt="" />
                  Published
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
