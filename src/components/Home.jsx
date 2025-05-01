import React from "react";
import { pizza } from "../assets/data";
import Swiper from "./Swiper";

const Home = () => {
  const newItems = [
    { id: 1, name: "Карбонара", price: "120 ₽", image: pizza },
    { id: 2, name: "Карбонара", price: "120 ₽", image: pizza },
    { id: 3, name: "Карбонара", price: "120 ₽", image: pizza },
    { id: 4, name: "Карбонара", price: "120 ₽", image: pizza },
  ];

  return (
    <div className="container">
      <Swiper />
      <div className="pt-6">
        <h2 className="text-yellov">Новинки</h2>
        <div className="flex flex-wrap gap-6 justify-between mt-4">
          {newItems.map((item) => (
            <div key={item.id} className="flex items-center gap-[25px]">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="font-montserrat font-bold text-[18px] leading-[100%]">
                  {item.name}
                </p>
                <p className="font-montserrat font-extrabold text-[16px] leading-[100%] text-[#F7D22D]">
                  от {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
