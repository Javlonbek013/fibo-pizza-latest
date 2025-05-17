import React, { useState, useEffect } from "react";
import soups from "../list/Soup_list";
import like from "../assets/images/heart.png";
import liked from "../assets/images/heart (1).png";

const Soup_list = ({ addToCard, addToFavorites }) => {
  const getFavoriteSoupsFromStorage = () => {
    const storedFavorites = localStorage.getItem("favoriteSoups");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [favoriteSoups, setFavoriteSoups] = useState(getFavoriteSoupsFromStorage);

  useEffect(() => {
    localStorage.setItem("favoriteSoups", JSON.stringify(favoriteSoups));
  }, [favoriteSoups]);

  const handleAddToFavorites = (item) => {
    addToFavorites(item);

    if (favoriteSoups.includes(item.id)) {
      const updatedFavorites = favoriteSoups.filter((id) => id !== item.id);
      setFavoriteSoups(updatedFavorites);
    } else {
      const updatedFavorites = [...favoriteSoups, item.id];
      setFavoriteSoups(updatedFavorites);
    }
  };

  return (
    <div className="container py-6">
      <h1 className="text-yellow-500 text-2xl font-bold text-center mb-8">Супы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {soups.map((item) => (
          <div key={item.id} className="relative rounded-2xl p-5 bg-white shadow-md">
            {item.isNew && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                NEW
              </div>
            )}
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
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
                  src={favoriteSoups.includes(item.id) ? liked : like}
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

export default Soup_list;
