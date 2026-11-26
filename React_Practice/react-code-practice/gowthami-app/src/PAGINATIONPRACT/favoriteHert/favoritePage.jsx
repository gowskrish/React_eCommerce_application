import React, { useContext, useState } from "react";
import "./favoritePage.scss";
import FavoriteHeartContext from "../../context/favoritehearContext";
import ProductDetails from "../PDP/productDetailsPage";

function FavoritePage() {
  const {
    removeFavrouteSelect,
    setRemoveFavrouteSelect,
    removeFavorite,
    setFavCountSet,
    favoriteHeart,
    addFavorite,
  } = useContext(FavoriteHeartContext);

  // setFavoriteHeart(productDetails.id);

  function FavoriteSelectSectionRemove(productId) {
    // console.log("button clicke");
    removeFavorite(productId);
  }

  return (
    <>
      <div className="favroutePage_main">
        <h1>Your Favorite Products</h1>
        {favoriteHeart.map((product) => (
          <div className="fav_pro_main" key={product.productId}>
            <div className="fav_product_images_main">
              <img
                src={product.product?.primaryImage}
                alt="images"
                className="fav_images"
              />
              <div className="fav_prodct_detail">
                <p>{product.product?.name}</p>
                <p>{product.product?.price}</p>
              </div>
            </div>
            <div className="fav_but_main">
              <button className="fav_add_butn">Add</button>
              <button
                className="remove_butn"
                onClick={() => {
                  FavoriteSelectSectionRemove(product.productId);
                  setFavCountSet((prev) => prev - 1);
                }}
              >
                Remove Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoritePage;
