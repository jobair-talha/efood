import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./GetProduct.css";

const GetProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.meals[0]));
  }, []);

  return (
    <div className="product__container">
      <img src={product.strMealThumb} alt={product.strMealThumb} />
      <h1>{product.strMeal}</h1>
      <h5>{product.strCategory}</h5>
      <p>{product.strInstructions}</p>
    </div>
  );
};

export default GetProduct;
