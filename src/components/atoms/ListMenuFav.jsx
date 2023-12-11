import { FaHeart } from "react-icons/fa6";
import { Rating } from '@mantine/core';

const colors = {
  orange: '#FFBC80',
  grey: '#C6C6C6',
  heart: '#F0AF9F',
};

export default function ListMenuFav({ datas }) {
  return (
    <div className="py-5">
      {datas?.map((item, index) => (
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
                  <Rating
                    value={item.rating}
                    fractions={2}
                    count={5}
                    readOnly
                  />
                  <div className="text-xs font-poppins font-normal text-gray-500 px-1 pt-3 py-2">
                    ({item.review} Review)
                  </div>
                </div>
              </div>

              <div style={styles.container}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FaHeart
                      size={17}
                      style={{
                        marginRight: 1,
                      }}
                      color={colors.heart}
                    />
                    <div className="text-xl px-1 font-poppins font-semibold text-gray-500">
                      {item.like} rb
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
