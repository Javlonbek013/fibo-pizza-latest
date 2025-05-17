import React, { useState, useEffect } from "react";
import salads from "../list/Salad_list";
import like from "../assets/images/heart.png";
import liked from "../assets/images/heart (1).png";

const Salad_list = () => {
  const getCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const getFavoriteSaladsFromStorage = () => {
    const storedFavorites = localStorage.getItem("favoriteSalads");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [cart, setCart] = useState(getCartFromStorage);
  const [favoriteSalads, setFavoriteSalads] = useState(getFavoriteSaladsFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favoriteSalads", JSON.stringify(favoriteSalads));
  }, [favoriteSalads]);

  const addToCard = (item) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
      if (itemInCart) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleAddToFavorites = (item) => {
    if (favoriteSalads.includes(item.id)) {
      setFavoriteSalads(favoriteSalads.filter(id => id !== item.id));
    } else {
      setFavoriteSalads([...favoriteSalads, item.id]);
    }
  };

  return (
    <div className="container py-6">
      <h1 className="text-yellow-500 text-2xl font-bold text-center mb-8">Салаты</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {salads.map((item) => (
          <div key={item.id} className="relative rounded-2xl p-5 bg-white shadow-md">
            {item.isNew && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                NEW
              </div>
            )}
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.name} className="object-contain h-full" />
            </div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-yellow-600">{item.price} </span>
              <button
                onClick={() => addToCard(item)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
              >
                В корзину
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <button onClick={() => handleAddToFavorites(item)}>
                <img
                  src={favoriteSalads.includes(item.id) ? liked : like}
                  alt="like"
                  className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salad_list;
