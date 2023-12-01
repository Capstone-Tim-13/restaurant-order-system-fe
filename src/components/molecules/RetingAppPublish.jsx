import React, { useState } from 'react';
import { SEND_BUTTON, CLOSE_CIRCLE } from '../../assets';
import { Rating } from '@mantine/core';

import img from '../../assets/images/potato.png';

export default function RetingAppPublish(props) {
  const { datas, formatTanggal } = props;
  const [detailReview, setDetailReview] = useState(false);

  return (
    <div className={`w-full mt-10 pb-10 px-10 pt-10 bg-white rounded-2xl shadow-md relative ${detailReview ? '' : 'overflow-hidden h-[945px]'}`}>
      <h1 className="text-3xl font-semibold font-poppins">Terpublish</h1>
      <button onClick={() => setDetailReview(!detailReview)} className={`fontpopins text-black absolute ${detailReview ? 'bottom-6' : 'bottom-6'} right-10 text-sm font-semibold`}>
        {detailReview ? 'Sembunyikan' : 'Lihat Lainnya'}
      </button>

      {datas.map((data) => (
        <>
          <div className="mt-10 flex  justify-between">
            {/* Bagian Profile User */}
            <div className="w-1/4 flex gap-6  pt-10">
              <div>
                <img src={img} alt="" className="rounded-full" />
              </div>
              <div>
                <p className="font-poppins text-xl text-orange font-light">#KJL23FS</p>
                <h2 className="font-poppins text-xl font-semibold mt-1">Rizky</h2>
                <p className="font-poppins text-surface font-semibold">{formatTanggal(data.tanggal)}</p>
              </div>
            </div>

            <div className="flex w-3/4 gap-5 items-center border-b border-black pb-5 mb-5">
              {/* Bagian Komentar */}
              <div className="w-1/2">
                <div className="flex gap-40">
                  <h1 className="font-poppins text-xl font-semibold mt-1">Mie Lamian</h1>
                  <p className="font-poppins text-surface font-semibold">1 items</p>
                </div>
                <div>
                  <p className="mt-1 font-poppins text-surface ">Ala Carta</p>
                </div>
                <div className="flex gap-2 mt-1">
                  <p className="font-poppins text-surface font-semibold">3.0</p>
                  <Rating value={3} variant="unstyled" readOnly />
                </div>
                <div className="mt-3">
                  <p className="font-poppins text-surface font-ligh text-lg">{data.komentar}</p>
                </div>
              </div>

              {/* Bagian Button Kategori */}
              <div className="w-1/2 relative">
                <div className="flex justify-center mt-10 gap-5 items-center">
                  <button className="flex px-5 py-4 gap-2 bg-red-600 text-white rounded-full">
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
