import React from "react";
import pizzas from '../list/Stock_list';



const Stock_list = ({ addToCard }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">Акции</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-[30px]">
        {pizzas.map((pizza, index) => (
          <div key={index} className="rounded-2xl p-4 bg-white">
            
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={pizza.image} alt="" />
            </div>
            <h2 className="text pt-[8px]">{pizza.name}</h2>
            <p className="text-p pt-[14px]">{pizza.description}</p>
            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{pizza.price}</span>
              <button onClick={() => addToCard(pizza)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
              Посмотреть
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock_list;
