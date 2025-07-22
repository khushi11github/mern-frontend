import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { FaFire, FaLeaf, FaGift } from "react-icons/fa";
import "./Product.css";

export default function Product() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { user, cart, setCart } = useContext(AppContext);

 const fetchProducts = async () => {
  try {
    const url = `${API_URL}/api/products/all`;
    const result = await axios.get(url);
    setProducts(result.data.products);
  } catch (err) {
    console.log(err);
    setError("Something went wrong");
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
  };

  return (
    <> 

    <div className="products-header" style={{ textAlign: "center" , 
    }}>

   
  <h1><i>Wicks & Whim</i></h1>
  <h2>Candles</h2>
  <p className="tagline">"Where Every Flame Tells a Story"</p>
  <p>Purchase our premium handcrafted candles and bring warmth, fragrance, and charm into your space.</p>

 


  <a> <button>Explore</button> </a>
</div>
  
      <section className="features-section">
      <div className="feature">
        <FaFire className="icon" />
        <h3>Hand-Poured Candles</h3>
        <p>100% Handmade with Natural Ingredients</p>
      </div>
      <div className="feature">
        <FaLeaf className="icon" />
        <h3>Eco-Friendly Wax</h3>
        <p>Long-lasting Fragrance & Clean Burn</p>
      </div>
      <div className="feature">
        <FaGift className="icon" />
        <h3>Perfect Gift Choice</h3>
        <p>Ideal for Gifting & Self-Care Moments</p>
      </div>
    </section>



    <h2 className="candles-heading">Our Candle Collection</h2>
    <div className="products-container">
      
    

     
      
      {products &&
        products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={`${product.imgUrl}`}
              alt={product.productName}
              className="product-img"
            />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <h4>₹{product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        
        ))}
    </div>
     </>
  );
}
