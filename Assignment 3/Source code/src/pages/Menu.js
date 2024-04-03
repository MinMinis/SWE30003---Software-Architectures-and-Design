import React from "react";
import Products from "../data/Products";
import { useProduct } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const { addToCart } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-auto mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Products.map((product) => (
          <div
            key={product.name}
            className="flex flex-col items-center justify-center border-2 border-black rounded-lg m-2 py-4"
          >
            <img src={product.image} className="w-[100px]" alt="Product" />
            <h1
              className="font-bold cursor-pointer hover:underline hover:underline-offset-4 duration-200 ease-out underline-offset-0"
              onClick={() => navigate(`/product/${product.name}`)}
            >
              {product.name}
            </h1>
            <p>${product.price}</p>
            <button
              className="bg-[#153102] text-white p-2 rounded-xl hover:bg-[#418308] ease-out duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
