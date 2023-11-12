  import { FaStar, FaHeart } from "react-icons/fa6";
  import { LECI, KENTANG } from "../../assets";
  import { useState, useEffect } from "react";
  import axios from "axios";

  const colors = {
    orange: "#FFBC80",
    grey: "#C6C6C6",
    heart: "#F0AF9F",
  };

  const applicants = [
    {
      name: "Kentang Goreng",
      image: LECI,
      price: "RP. 15.000",
    },
    {
      name: "Lychee Tea",
      i: KENTANG,
      price: "RP. 15.000",
    },
  ];

  export default function ListMenuFav() {
    const [data, setData] = useState([]);
    const [ratings, setRatings] = useState(Array(applicants.length).fill(0));
    
    useEffect(() => {
      // Menggunakan Axios untuk mengambil data dari API
      axios
        .get("https://654b5d435b38a59f28eef00e.mockapi.io/makanan")
        .then((response) => {
          setData(response.data);
          setRatings(Array(response.data.length).fill(0));
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, [])
    

    const handleClick = (index, value) => {
      const newRatings = [...ratings];
      newRatings[index] = value;
      setRatings(newRatings);
    };

    return (
      <div className="py-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row items-center border-b mb-3">
            <img
              src={item.foto}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-left mb-4"
            />
            <div className="w-full px-5 py-2 text-sm text-left font-poppins font-semibold">
              {item.nama}
              <div className="flex justify-between">
                <div className="flex flex-col text-xl text-center font-poppins font-semibold text-gray-500 mt-2">
                  {item.rating}
                  <div style={styles.container} className="text-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        size={18}
                        style={{
                          marginRight: 1,
                          cursor: "pointer",
                        }}
                        color={
                          ratings[index] > starIndex ? colors.orange : colors.grey
                        }
                        onClick={() => handleClick(index, starIndex + 1)}
                      />
                    ))}
                    <div className="text-xs font-poppins font-normal text-gray-500 px-1 pt-3 py-2">
                      ({item.review} Review)
                    </div>
                  </div>
                </div>
  
                <div style={styles.container}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <FaHeart
                        size={17}
                        style={{
                          marginRight: 1,
                        }}
                        color={colors.heart}
                      />
                      <div className="text-xl px-1 font-poppins font-semibold text-gray-500">
                        {item.likes} rb
                      </div>
                    </div>
                    <div className="text-xs px-1 pt-3 font-poppins font-normal text-gray-500">
                      orang menyukai ini
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };
