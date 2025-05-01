import React from "react";
import {
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  group2,
  group3,
  group4,
  logo,
} from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container grid lg:grid-cols-5 gap-10">
        <div className="space-y-6 lg:col-span-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img src={logo} alt="logo" className="w-32" />
            </a>
            <div className="space-y-1 text-right md:hidden">
              <a
                className="text-yellow-400 font-bold text-lg"
                href="tel:+998939170731"
              >
                998 93-917-07-31
              </a>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
                Заказать звонок
              </button>
            </div>
          </div>

          <div className="font-bold text-sm md:text-base space-x-8 flex">
            <p>Калорийность и состав</p>
            <p>Правовая информация</p>
          </div>

          <p className="font-bold text-xs md:text-base">Мы в соцсетях</p>
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <li>
              <a href="#" className="text-yellow-400">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-400">
                Москва ул. Проспект
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-400">
                ВКонтакте
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-400">
                Вернадского 86В
              </a>
            </li>
          </ul>

          <div className="hidden md:flex justify-between items-center mt-6">
            <p>YaBao Все права защищены © 2021</p>
            <ul className="flex space-x-4 items-center">
              <li>
                <a href="#">
                  <img src={group3} alt="payment" className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group4} alt="payment" className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group2} alt="payment" className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <p className="font-bold text-lg">Остались вопросы? А мы всегда на связи:</p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image2} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image3} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image4} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image5} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <a href="#">
                <img src={image6} alt="icon" className="w-10 h-10" />
              </a>
            </li>
            <li className="border p-3 rounded-lg">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg">
                Написать нам
              </button>
            </li>
          </ul>

          <div className="hidden md:block space-y-3 mt-6">
            <a
              className="text-yellow-400 text-xl"
              href="tel:+8499391849"
            >
              8 499 391-84-49
            </a>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
