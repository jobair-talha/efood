import React from "react";
import { useHistory } from "react-router";
import "./Product.css";

const Product = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.product;
  const detailsProduct = useHistory();
  const handleClick = () => {
    detailsProduct.push(`product/${idMeal}`);
  };
  return (
    <div className="product">
      <img src={strMealThumb} alt={strMealThumb} />
      <div className="details">
        <p>Code: {idMeal}</p>
        <h2>{strMeal}</h2>
        <p>{strInstructions.slice(0, 200)}</p>
        <button onClick={handleClick} className="product-details">
          Details
        </button>
      </div>
    </div>
  );
};

export default Product;
