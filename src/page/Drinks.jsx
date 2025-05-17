import React, { useState, useEffect } from "react";
import drinks from '../list/Drinks_list'; 
import like from '../assets/images/heart.png';
import liked from '../assets/images/heart (1).png'; 

const Drinks_list = ({ addToCard, addToFavorites }) => {
  const getFavoriteDrinksFromStorage = () => {
    const storedFavorites = localStorage.getItem('favoriteDrinks');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [favoriteDrinks, setFavoriteDrinks] = useState(getFavoriteDrinksFromStorage);

  useEffect(() => {
    localStorage.setItem('favoriteDrinks', JSON.stringify(favoriteDrinks));
  }, [favoriteDrinks]);

  const handleAddToFavorites = (drink) => {
    if (favoriteDrinks.includes(drink.id)) {
      setFavoriteDrinks(favoriteDrinks.filter(id => id !== drink.id));
    } else {
      setFavoriteDrinks([...favoriteDrinks, drink.id]);
      addToFavorites(drink); 
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Напитки</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="rounded-2xl p-4 bg-white shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 rounded-lg mb-3 flex items-center justify-center bg-gray-50">
              <img
                src={drink.image}
                alt={drink.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-800 pt-2">{drink.name}</h2>
            <p className="text-sm text-gray-600 pt-2">{drink.description}</p>

            <div className="flex justify-between items-center pt-4">
              <span className="font-bold text-yellow-600">{drink.price}</span>
              <button
                onClick={() => addToCard(drink)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm transition"
              >
                В корзину
              </button>
            </div>

            <div className="flex justify-center pt-3">
              <button
                onClick={() => handleAddToFavorites(drink)}
                className="p-2 bg-transparent"
              >
                <img
                  src={favoriteDrinks.includes(drink.id) ? liked : like}
                  alt="like"
                  className="w-6 h-6 transition-transform duration-300 hover:scale-125"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks_list;
