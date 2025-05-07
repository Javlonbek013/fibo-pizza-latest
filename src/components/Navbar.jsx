import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, star, yandexEda, point } from "../assets/data";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Дом" },
    { path: "/Pizza", label: "Пицца" },
    { path: "/Paste", label: "Паста" },
    { path: "/Soups", label: "Супы" },
    { path: "/Salads", label: "Салаты" },
    { path: "/Drinks", label: "Напитки" },
    { path: "/Stock", label: "Акции" },
    { path: "/Contacts", label: "Контакты" },
  ];

  return (
    <div className="container mx-auto px-4 py-2">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-8">
          <img src={logo} alt="Logo" className="w-14 sm:w-auto" />
          <div className="hidden sm:block">
            <div className="font-semibold text-[17px] leading-[100%]">
              Доставка пасты <span className="text-yellow-500">Москва</span>
            </div>
            <div className="flex items-center font-semibold text-[13px] gap-4 pt-2">
              <span className="flex gap-2 items-center">
                <img src={yandexEda} alt="" className="w-4 h-4" /> Яндекс еда
                <img src={point} alt="" className="w-3 h-3" />
                <span className="flex gap-1 items-center">
                  4.8 <img src={star} alt="" className="w-4 h-4" />
                </span>
              </span>
              <span className="flex gap-2 items-center">
                Время доставки <img src={point} alt="" className="w-3 h-3" /> от 31 мин
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <button className="button">Заказать звонок</button>
          <div className="text-yellow-500 font-bold text-lg">998 93-917-07-31</div>
          
        </div>

        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`sm:flex ${isMenuOpen ? "block" : "hidden"} mt-4 sm:items-center sm:justify-between`}>
        <ul className="flex flex-col sm:flex-row text-center gap-2 sm:gap-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "px-4 py-2 rounded-xl text-blue-700 font-semibold"
                    : "px-4 py-2 text-black rounded-xl"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          <NavLink to="/Korzina" onClick={() => setIsMenuOpen(false)}>
            <button className="Basket">Корзина</button>
          </NavLink>
          <NavLink to="/Favorites" onClick={() => setIsMenuOpen(false)}>
            <button className="Favorites">Избранное</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
