import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, star, yandexEda, point } from "../assets/data";

const Navbar = () => {
  const menuItems = [
    { path: "/", label: "Дом" },
    { path: "/Pizza", label: "Пицца" },
    { path: "/Paste", label: "Паста" },
    { path: "/Soups", label: "Супы" },
    { path: "/Salads", label: "Салаты" },
    { path: "/Drinks", label: "Напитки" },
    { path: "/Stock", label: "Акции" },
    { path: "/Contacts", label: "Контакты" },
    {
      path: "/Korzina", label: <button className="Basket">
        Корзина
      </button>
    },
    {
      path: "/Favorites", label: <button className="Favorites">
        Избранное
      </button>
    }

  ];


  return (
    <>
      <div className="container">
        <div className="div flex">
          <div className="flex items-center gap-[52px]">
            <img src={logo} alt="Logo" className="" />
            <div className="text-sm">
              <div className="font-[Montserrat] font-semibold text-[17px] leading-[100%]">
                Доставка пасты <span className="text-yellow-500">Москва</span>
              </div>
              <div className="flex items-center font-[Montserrat] font-semibold text-[13px] leading-[100%] alignfont-[Montserrat] pt-[9px] gap-[20px]">
                <span className="flex gap-[7px] items-center">
                  <img src={yandexEda} alt="" /> Яндекс еда
                  <img src={point} alt="" />
                  <span className="flex gap-[4px]">
                    4.8 <img src={star} alt="" />
                  </span>
                </span>
                <span className="flex gap-[7px]">
                  Время доставки <img src={point} alt="" /> от 31 мин
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[28px]">
            <button className="button">
              Заказать звонок
            </button>
            <div className="text-yellow-500 font-bold text-lg">

              998 93-917-07-31
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[20px]">
          <ul className="flex justify-between p-2 rounded-xl">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? " px-4 py-2 rounded-xl  text-blue-800 font-semibold "
                      : "px-4 py-2 text-black rounded-xl"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
