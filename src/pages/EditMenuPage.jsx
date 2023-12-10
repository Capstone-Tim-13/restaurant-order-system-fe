import { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import { RekomendasiTambahMenu } from "../components/organisms/RekomendasiTambahMenu"; // Add missing import
import { MENU_ADD_ICON } from "../assets";
import { MenuArrow } from "../components/molecules/MenuArrow";
import cn from "../utils/cn";
import axios from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditMenuPage() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [data, setData] = useState({
    image: null,
    name: "",
    description: "",
    categoryid: "", 
    price: "0",
  });
  const categoryMenu = [
    { id: 1, label: "Appetizer", value: "Appetizer" },
    { id: 2, label: "Dessert", value: "Dessert" },
    { id: 3, label: "Ala Carte", value: "Ala Carte" },
    { id: 4, label: "Paket Hemat", value: "Paket Hemat" },
    { id: 5, label: "Minum", value: "Minum" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/admin/menu/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = response.data;
        const results = responseData.results;
        console.log(results);
        setData(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, token]);

  const getCategoryValue = (categoryId) => {
    const category = categoryMenu.find((item) => item.id === categoryId);
    return category ? category.value : "";
  };

  const handleChange = (e) => {
    if (e.target.name === "categoryid") {
      const category = categoryMenu.find((item) => item.id === parseInt(e.target.value));
      setData({
        ...data,
        [e.target.name]: category ? category.id : "",
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      image: e.target.files[0] || data.image,
    });
  };

  const handleCategoryChange = (value) => {
    const category = categoryMenu.find((item) => item.value === value);
    setData({
      ...data,
      categoryid: category ? category.id : "",
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", data.image || "");
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("categoryid", data.categoryid);
      formData.append("price", data.price);

      const response = await axios.put(`/admin/update/menu/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      navigate("/admin/menu");
      alert("Data berhasil diupdate");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <MenuArrow />
      <div className="bg-white rounded-xl shadow my-10 pb-20 ">
        <h1 className="font-medium text-[24px] ml-[3.8rem] pt-8">
          Edit Menu
        </h1>
        <div className="flex ml-10 gap-20">
          <div>
            <div className="ml-6 my-6">
              <label className="block font-normal text-[20px] mb-4">
                Foto Menu<span className="text-red-500">*</span>
              </label>
              <div
                className={cn(
                  "border-dashed border-4 border-brown rounded-[38px] bg-gray-200 p-10 mb-4 w-full h-[250px] flex justify-center items-center",
                  { "max-w-[350px]": data.image }
                )}
              >
                <input
                  type="file"
                  accept=".jpg"
                  className="hidden w-full"
                  id="file-input"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center"
                >
                  <img
                    src={MENU_ADD_ICON}
                    alt="add-icon"
                    className="my-5 mx-2"
                  />
                  <div className="ml-2">
                    {data.image && (
                      <>
                        <p className="ml-2 font-normal text-[24px]">
                          {data.image.name}
                        </p>
                      </>
                    )}
                    {!data.image && (
                      <p className="font-normal text-[24px] text-gray-500">
                        Unggah Foto
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-content-center">
            <div className="px-[3rem]">
              <div className="flex flex-col pt-[4rem]">
                <label htmlFor="" className="text-[20px] mb-5">
                  Nama Menu<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className={`bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px] border-red-500 border-none`}
                  placeholder="Nama Menu"
                  required
                />
                <span className="text-right">{data.name.length}/150</span>
                {data.name.trim().length > 15 && (
                  <span className="text-red-500 font-medium text-[18px]">
                    Nama menu lebih dari 15 karakter
                  </span>
                )}
              </div>
              <div className="flex flex-col pt-[3rem]">
                <label htmlFor="" className="mb-5 text-[20px]">
                  Deskripsi Menu<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  id=""
                  cols={8}
                  rows={5}
                  value={data.description}
                  onChange={handleChange}
                  className="bg-gray-200 rounded-xl py-5 px-8 mb-2 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Deskripsi Menu"
                  required
                />
                <span className="text-right">{data.description.length}/150</span>
              </div>
              <div className="flex flex-col pt-[4rem]">
                <label htmlFor="" className="text-[20px]">
                  Detail Harga<span className="text-red-500">*</span>
                </label>
                <span className="mb-5 text-[14px]">
                  Harga sudah termasuk pajak dan lain-lain
                </span>
                <input
                  value={data.price}
                  type="number"
                  name="price"
                  onChange={handleChange}
                  className="bg-gray-200 rounded-xl py-5 px-8 w-[40rem] focus:outline-none text-[20px]"
                  placeholder="Rp"
                  min={0}
                  max={1000000}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="bg-white shadow-md rounded-full w-[11.5rem] h-[3.5rem] mt-[7rem] px-2">
                <Select
                  variant="unstyled"
                  size="xl"
                  id="kategori"
                  data={categoryMenu}
                  placeholder="Kategori"
                  value={getCategoryValue(data.categoryid)}
                  className="pl-2.5 w-[11.5rem] h-[55px] mt-0"
                  styles={(theme) => ({
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.orange[9]
                              : theme.colors.orange[1],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.dark[9],
                          border:
                            theme.colorScheme === "dark"
                              ? "1px solid #E25E3E"
                              : "1px solid #E25E3E",
                        },
                      },
                      "&[data-hovered]": {},
                    },
                  })}
                  onChange={(value) => handleCategoryChange(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RekomendasiTambahMenu onClick={handleSubmit} />
    </>
  );
}