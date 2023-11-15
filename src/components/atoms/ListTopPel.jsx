// import { RAFFI } from "../../assets";
import { useState, useEffect } from "react";
import axios from "axios";

// const applicants = [
//   {
//     name: "Raffi Ahmad",
//     image: RAFFI,
//     order: "60 kali order"
//   },
// ];

export default function ListTopPel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Menggunakan Axios untuk mengambil data dari API
    axios
      .get("https://654b5d435b38a59f28eef00e.mockapi.io/pelanggan")
      .then((response) => {
        const sortedData = response.data.sort((a, b) => b.order - a.order);
        setData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [])

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex items-center mb-3 pb-1 pt-3">
          <img
            src={item.foto}
            alt={item.nama}
            className="w-16 h-16 rounded-full mx-left mb-3"
          />
          <div className="flex flex-col px-5 pb-1 text-left text-lg font-semibold font-poppins ">
            {item.nama}
            <span className="text-lg  font-poppins font-normal text-gray-500 py-2">{item.order} kali order</span>
            </div>
        </div>
        
      ))}
    </div>
  )
}
