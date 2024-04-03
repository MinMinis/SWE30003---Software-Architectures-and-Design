import React from "react";
import Products from "../data/Products";
import { useProduct } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
const Menu = () => {
  const { addToCart, cart, reduceQuantity } = useProduct();
  const navigate = useNavigate();
  const getProductQuantityInCart = (productId) => {
    const cartItem = cart.find((item) => item.name === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  return (
    <div className="flex flex-col w-auto mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Products.map((product) => (
          <div
            key={product.name}
            className="flex flex-col items-center justify-center border-2 border-black rounded-lg m-2 py-4"
          >
            <ProductCard product={product} />
            {/* <img src={product.image} className="w-[100px]" alt="Product" /> */}
            <h1
              className="font-bold cursor-pointer hover:underline hover:underline-offset-4 duration-200 ease-out underline-offset-0"
              onClick={() => navigate(`/product/${product.name}`)}
            >
              {product.name}
            </h1>
            <p>${product.price}</p>
            <div className="flex items-center justify-center flex-row">
              <img
                src="./minus.png"
                className="h-4 cursor-pointer hover:animate-pulse duration-300 ease-out"
                alt="Minus"
                onClick={() => reduceQuantity(product)}
              />
              <span className="mx-4">
                {getProductQuantityInCart(product.name)}
              </span>
              <img
                src="./add.png"
                className="h-4 cursor-pointer hover:animate-pulse duration-300 ease-out"
                alt="Add"
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
