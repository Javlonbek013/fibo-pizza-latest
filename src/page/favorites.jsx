import React from "react";
import gif from '../assets/images/empty-p8o0Kqow.gif'
const Favorites = ({ favorites }) => {
  return (
    <div className="container">
      <h1 className="text-yellov">Избранное</h1>

      {favorites.length === 0 ? (
        <img className="m-auto w-60" src={gif} alt="" />
      ) : (
        <div>
          {favorites.map((item) => (
            <div className="flex">
            <div key={item.id} className="flex items-center shadow-2xl  gap-20 " >
                <div className="w-full h-40 rounded-lg mb-3 flex">
                    <img src={item.image} alt="" />
                </div>
                <h2 className="text pt-[8px]">{item.name}</h2>
                <p className="text-p pt-[14px]">{item.description}</p>
                <div>
                    <span className="font-bold">{item.price}</span>
                </div>
            </div>
        </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
