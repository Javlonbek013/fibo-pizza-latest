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
    <footer>
      <div className="container py-20 grid lg:grid-cols-5 gap-10">
        <div className="space-y-4 lg:col-span-3 ">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <div className="space-y-1 block md:hidden text-end">
              <a
                className="text-26 font-bold text-yellow block "
                href="tel:+998939170731"
              >
                998 93-917-07-31
              </a>
              <button className="light-btn !py-2">Заказать звонок</button>
            </div>
          </div>
          <div className="font-bold flex space-x-10 text-10 md:text-base">
            <p>Калорийность и состав</p>
            <p>Правовая информация</p>
          </div>
          <p className="font-bold text-xs md:text-base">Мы в соцсетях </p>
          <ul className="grid grid-cols-3 text-10 md:text-sm gap-y-3">
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Москва ул. Проспект</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">ВКонтакте</a>
            </li>
            <li>
              <a href="#">Вернадского 86В</a>
            </li>
          </ul>
          <div className="hidden md:flex justify-between items-center">
            <p>YaBao Все праав защищены © 2021</p>
            <ul className="flex space-x-3 items-center">
              <li>
                <a href="#">
                  <img src={group3} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group4} alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={group2} alt="visa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <p className="font-bold text-sm">
            Остались вопросы? А мы всегда на связи:
          </p>
          <ul className="grid grid-cols-6 md:grid-cols-4 gap-4">
            <li className="logo border">
              <a href="#">
                <img src={image} alt="icon" />
              </a>
            </li>
            <li className="logo border">
              <a href="#">
                <img src={image2} alt="icon" />
              </a>
            </li>
            <li className="logo border">
              <a href="#">
                <img src={image3} alt="icon" />
              </a>
            </li>
            <li className="logo border">
              <a href="#">
                <img src={image4} alt="icon" />
              </a>
            </li>
            <li className="logo border">
              <a href="#">
                <img src={image5} alt="icon" />
              </a>
            </li>
            <li className="logo border">
              <a href="#">
                <img src={image6} alt="icon" />
              </a>
            </li>
            <li className="logo-b border">
              <button>Написать нам</button>
            </li>
          </ul>
          <div className="space-y-3 hidden md:block">
            <a className="text-yellov" href="">
              8 499 391-84-49
            </a>
            <button className="button">Заказать звонок</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
