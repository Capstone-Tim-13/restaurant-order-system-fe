import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkMenuAtom(props) {
  const { initalLink, isActive, handleCLickLink, sortByProduct, allProduct } = props;
  return (
    <div>
      <ul>
        <li className="flex gap-2 p-2 shadow-md rounded-full">
          {initalLink.map((link, index) => (
            <Link
              key={index}
              className={`font-poppins text-xl px-4 py-2 rounded-full font-normal ${isActive === link ? `bg-brown text-white` : `text-surface`}`}
              onClick={() => {
                handleCLickLink(link);
                link === 'Semua Kategori' ? allProduct() : sortByProduct(link);
              }}
            >
              {link}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
