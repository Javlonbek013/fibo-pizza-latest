import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 sm:w-16" />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">
              Доставка пасты <span className="text-yellow-500">Москва</span>
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600 mt-1">
              <div className="flex items-center gap-1">
                <img src={yandexEda} alt="yandex" className="w-4 h-4" />
                Яндекс еда
                <img src={point} alt="dot" className="w-2 h-2 mx-1" />
                <span className="flex items-center gap-1">
                  4.8 <img src={star} alt="rating" className="w-4 h-4" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                Время доставки
                <img src={point} alt="dot" className="w-2 h-2 mx-1" />
                от 31 мин
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <button className="bg-yellow-500 px-4 py-2 rounded-xl text-white hover:bg-yellow-600 transition">
            Заказать звонок
          </button>
          <a href="tel:998991177697" className="text-yellow-500 font-bold text-lg">
            998 99-117-76-97
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-between container mx-auto px-4 mt-4`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          {menuItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-100 text-blue-700 font-semibold px-3 py-2 rounded-xl"
                    : "text-gray-700 hover:text-blue-700 px-3 py-2 rounded-xl transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          <NavLink to="/Korzina" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-yellow-500 px-4 py-2 rounded-xl text-white hover:bg-gray-900 transition">
              Корзина
            </button>
          </NavLink>
          <NavLink to="/Favorites" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-yellow-500 px-4 py-2 rounded-xl text-white hover:bg-pink-600 transition">
              Избранное
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
