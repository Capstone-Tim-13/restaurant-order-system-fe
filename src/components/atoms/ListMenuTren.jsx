import { LECI, KENTANG } from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios";

const applicants = [
  {
    name: "Kentang Goreng",
    image: LECI,
    price: "RP. 15.000",
  },
  {
    name: "Lychee Tea",
    image: KENTANG,
    price: "RP. 15.000",
  },
];

export default function ListMenuTren() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Menggunakan Axios untuk mengambil data dari API
    axios
      .get("https://654b5d435b38a59f28eef00e.mockapi.io/makanan")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [])

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex flex-row items-center border-b mb-3 pb-1 pt-3">
          <div className="relative">
            <img
              src={item.foto}  
              alt={item.nama} 
              className="w-16 h-16 rounded-full mx-left mb-5"
            />
            <span
              className="text-lg font-normal absolute top-0 left-0 mt-0 ml-0 px-1 bg-cover bg-center text-white"
              style={{
                backgroundColor: "#E25E3E",
                borderRadius: "50%",
              }}
            >
              #{index + 1}.
            </span>
          </div>
          <div className="flex flex-col w-full px-5 pb-3 text-sm text-left font-poppins font-semibold">
            {item.nama} {/* Menggunakan data dari API */}
            <div className="flex justify-between">
            <span className="text-xs font-poppins px-1 pt-2 font-normal text-gray-500">
                Order {item.order}x {/* Menggunakan data dari API */}
              </span>
              <span className="text-sm font-poppins font-bold py-1">
                Rp. {item.harga} {/* Menggunakan data dari API */}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
