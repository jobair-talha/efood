import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.meals));
  }, [user]);
  const handleProduct = (e) => {
    const userFeild = e.target.value;
    setUser(userFeild);
  };
  return (
    <div className="container">
      <input
        type="text"
        onChange={handleProduct}
        placeholder="Seach Products"
      />
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} key={product.idMeal}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
