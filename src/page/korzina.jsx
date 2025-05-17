import React, { useState, useEffect } from "react";
import gif from "../assets/images/empty-p8o0Kqow.gif";

const Korzina = ({ cart }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) return JSON.parse(saved);
    return cart.map(item => ({ ...item, quantity: 1 }));
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!localStorage.getItem("cartItems")) {
      setCartItems(cart.map(item => ({ ...item, quantity: 1 })));
    }
  }, [cart]);

  const incrementQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <div className="container py-4">
      <h1 className="text-yellow-500 text-2xl font-bold mb-6 text-center">Корзина</h1>
      {cartItems.length === 0 ? (
        <img className="m-auto w-60" src={gif} alt="Empty cart" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map(item => (
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
                {Number(item.price.replace(/[^\d]/g, "")) * item.quantity} ₽
              </span>
              <div className="mt-4 flex items-center space-x-3">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Korzina;
