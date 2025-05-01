import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pizza from "./page/Pizza";
import Pasta from "./page/Pasta";
import Soups from "./page/Soups";
import Salads from "./page/Salads";
import Drinks from "./page/Drinks";
import Stock from "./page/Stock";
import Contacts from "./page/Contacts";
import Korzina from "./page/korzina";
import Favorites from "./page/favorites"; 
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const addToCard = (item) => {
    const found = cart.some((i) => i.id === item.id);
    if (!found) {
      setCart([...cart, item]);
      setSuccessMessage("Muvaffaqiyatli qo'shildi!");
      setTimeout(() => setSuccessMessage(""), 2000);
    } else {
      alert('Bu mahsulot allaqachon korzinada mavjud');
    }
  };

  const addToFavorites = (item) => {
    const found = favorites.some((i) => i.id === item.id);
    if (!found) {
      setFavorites([...favorites, item]);
    } else {
      setFavorites(favorites.filter((i) => i.id !== item.id)); 
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pizza" element={<Pizza addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Paste" element={<Pasta addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Soups" element={<Soups addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Salads" element={<Salads addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Drinks" element={<Drinks addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/Contacts" element={<Contacts addToCard={addToCard} addToFavorites={addToFavorites} />} />
        <Route path="/Korzina" element={<Korzina cart={cart} />} />
        <Route path="/Favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      {successMessage && (
        <div style={{
          position: 'fixed', 
          bottom: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          padding: '10px 20px', 
          backgroundColor: 'green', 
          color: 'white', 
          borderRadius: '5px', 
          fontWeight: 'bold', 
          zIndex: 1000
        }}>
          {successMessage}
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
