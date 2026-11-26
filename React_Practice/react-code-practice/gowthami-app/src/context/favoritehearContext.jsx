import React, { createContext, useState, useEffect } from "react";

export const FavoriteHeartContext = createContext();
export const FavoriteHeartProvider = ({ children }) => {
  // Local Storage
  const [favoriteHeart, setFavoriteHeart] = useState(() => {
    const savedFavorite = localStorage.getItem("favoriteProducts");
    const favorites =
      savedFavorite && savedFavorite !== "undefined"
        ? JSON.parse(savedFavorite)
        : [];
    return favorites.filter(
      (favorite, index) =>
        favorites.findIndex((item) => item.productId === favorite.productId) ===
        index,
    );
  });

  // const [favoriteHeart, setFavoriteHeart] = useState([]);
  const [favGreenSet, setFavGreenSet] = useState(false);
  const [favCountset, setFavCountSet] = useState(() => {
    return Number(localStorage.getItem("favCount"));
  });
  // const [favCountset, setFavCountSet] = useState(0);

  const addFavorite = (product) => {
    setFavoriteHeart((prev) =>
      prev?.some((item) => item.productId === product.productId)
        ? prev
        : [...prev, product],
    );
  };
  const [removeFavrouteSelect, setRemoveFavrouteSelect] = useState(true);
  const removeFavorite = (productId) => {
    setFavoriteHeart((prev) =>
      prev.filter((item) => item.productId !== productId),
    );
  };

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteHeart));
  }, [favoriteHeart]);

  useEffect(() => {
    localStorage.setItem("favCount", favCountset);
  }, [favCountset]);

  return (
    <FavoriteHeartContext.Provider
      value={{
        favoriteHeart,
        addFavorite,
        setRemoveFavrouteSelect,
        removeFavorite,
        setFavGreenSet,
        favCountset,
        setFavCountSet,
      }}
    >
      {children}
    </FavoriteHeartContext.Provider>
  );
};

export default FavoriteHeartContext;
