import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { LOGO_ALTA } from "../../assets";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const [nav, setNav] = useState(false);
  const [isScroll, setIsScrolled] = useState(false);
  const navLink = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "feature",
      name: "Tentang Kita",
    },
    {
      id: "menu",
      name: "Menu Kami",
    },
    {
      id: "service",
      name: "Service",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full max-w-[1700px] z-50">
      <div
        className={`${
          isScroll ? "bg-[#783525] h-[90px] lg:-top-[60px]" : " h-[80px]"
        } lg:px-[72px] px-5 w-full z-[10] transition-all duration-300 ease-in-out flex justify-between items-center`}
      >
        <div className="mt-2 w-[200px] h-[150px]">
          <img src={LOGO_ALTA} className="w-full h-full object-contain" />
        </div>
        <ul className="hidden md:block">
          <li className="flex ml-[550px] gap-[64px] ">
            {navLink.map((item) => {
              return (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={item.id}
                  to={item.id}
                  className={`${
                    isScroll ? "text-[14px]" : "text-[18px]"
                  }  hover:text-gray-400 transition text-xl text-white duration-300 ease-in-out hover:cursor-pointer`}
                >
                  {item.name}
                </Link>
              );
            })}
          </li>
        </ul>
        <div className="flex text-2xl text-white">
          <FaUser
            className="ml-10 hover:text-gray-400 cursor-pointer"
            onClick={handleLoginClick}
          />
          <FiMenu
            size={24}
            className="block md:hidden"
            onClick={() => setNav((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            nav ? "right-0" : "-right-full"
          } w-full md:w-[50%]  bg-white h-screen absolute  top-0 p-10 block md:hidden`}
        >
          <AiOutlineClose
            className="text-2xl mb-3"
            onClick={() => setNav((prev) => !prev)}
          />
          <ul>
            <li className="flex flex-col  gap-5">
              {navLink.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className="text-[18px] py-2 hover:text-orange transition duration-300 ease-in-out border-b-2 z-[20]"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
