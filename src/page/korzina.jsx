import React from "react";
import gif from "../assets/images/empty-p8o0Kqow.gif";

const Korzina = ({ cart }) => {
  return (
    <div className="container py-4">
      <h1 className="text-yellow-500 text-2xl font-bold mb-6 text-center">
        Корзина
      </h1>

      {cart.length === 0 ? (
        <img className="m-auto w-60" src={gif} alt="Empty cart" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="shadow-lg rounded-xl p-4 flex flex-col items-center text-center bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600 my-2">{item.description}</p>
              <span className="font-bold text-yellow-600 text-lg">
                {item.price} сум
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Korzina;
