import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
import { useAuth } from "../contexts/AuthContext";
const ProductDetail = ({ product }) => {
  const { addToCart, cart, reduceQuantity } = useProduct();
  const { isAuthenticated } = useAuth();
  const cartItem = cart.find(
    (item) => item.id === product.id && item.name === product.name
  );
  const productQuantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex flex-col w-auto">
      <Link
        className="flex w-fit underline-offset-0 hover:underline hover:underline-offset-4 ease-out duration-150"
        to={"/menu"}
      >
        <div className="flex flex-row items-center justify-center ml-8">
          <div>
            <img src="../arrow.png" className="w-[25px]" alt="Back" />
          </div>
          <p>Return to Menu</p>
        </div>
      </Link>
      <div className="flex border-2 border-black rounded-xl flex-col md:flex-row m-4">
        <div className="flex flex-col basis-1/2 my-4">
          <h1 className="font-bold text-5xl text-center my-4">
            {product.name} ${product.price} per kg
          </h1>
          <div className="flex items-center justify-center">
            <hr className="border-2 border-black w-[50%]" />
          </div>
          <p className="m-4">{product.description}</p>
          <div className="flex flex-row text-center justify-center">
            {isAuthenticated && (
              <h1 className="font-bold text-3xl px-2 border-t-4 border-black p-2 flex flex-row items-center justify-center">
                Quantity{" "}
                <span
                  className="mx-2 cursor-pointer hover:animate-pulse duration-300 ease-out"
                  onClick={() => reduceQuantity(product)}
                >
                  <img src="../minus.png" className="h-4" alt="Minus" />
                </span>{" "}
                <span className="font-normal text-xl mx-2">
                  {productQuantityInCart}{" "}
                </span>
                <span
                  className="mx-2 cursor-pointer hover:animate-pulse duration-300 ease-out"
                  onClick={() => addToCart(product)}
                >
                  {" "}
                  <img src="../add.png" className="h-4" alt="Add" />
                </span>
              </h1>
            )}
            <button
              className="bg-black text-white p-2 px-4 hover:bg-slate-900 ease-out duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-row basis-1/2 items-center justify-center">
          <img
            className="w-[200px] h-[200px] object-cover"
            src={product.display}
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
