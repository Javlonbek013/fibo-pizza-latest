import React, { useState } from "react";
import drinks from '../list/Drinks_list'; 
import like from '../assets/images/heart.png';
import liked from '../assets/images/heart (1).png'; 

const Drinks_list = ({ addToCard, addToFavorites }) => {
  const getFavoriteDrinksFromStorage = () => {
    const storedFavorites = localStorage.getItem('favoriteDrinks');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [favoriteDrinks, setFavoriteDrinks] = useState(getFavoriteDrinksFromStorage);

  const handleAddToFavorites = (drink) => {
    addToFavorites(drink);

    if (favoriteDrinks.includes(drink.id)) {
      const updatedFavorites = favoriteDrinks.filter(id => id !== drink.id);
      setFavoriteDrinks(updatedFavorites);
      localStorage.setItem('favoriteDrinks', JSON.stringify(updatedFavorites)); 
    } else {
      const updatedFavorites = [...favoriteDrinks, drink.id];
      setFavoriteDrinks(updatedFavorites);
      localStorage.setItem('favoriteDrinks', JSON.stringify(updatedFavorites)); 
    }
  };

  return (
    <div className="container">
      <h1 className="text-yellov">Напитки</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[30px]">
        {drinks.map((drink) => (
          <div key={drink.id} className="rounded-2xl p-4 bg-white">
            <div className="w-full h-40 rounded-lg mb-3 flex items-center justify-center">
              <img src={drink.image} alt={drink.name} className="max-h-full max-w-full object-contain" />
            </div>
            <h2 className="text pt-[8px]">{drink.name}</h2>
            <p className="text-p pt-[14px]">{drink.description}</p>

            <div className="flex justify-between items-center pt-[10px]">
              <span className="font-bold">{drink.price}</span>
              <button
                onClick={() => addToCard(drink)}
                className="bg-yellow-300 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                В корзину
              </button>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => handleAddToFavorites(drink)}
                className="flex items-center justify-center p-2 bg-transparent"
              >
                <img
                  src={favoriteDrinks.includes(drink.id) ? liked : like}
                  alt="like"
                  className="w-6 h-6 transition-all duration-300"
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
