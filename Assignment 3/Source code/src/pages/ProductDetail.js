import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
const ProductDetail = ({ product }) => {
  const { addToCart } = useProduct();
  useEffect(() => {
    console.log(product);
  }, [product]);
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
          <p>Return</p>
        </div>
      </Link>
      <div className="flex border-2 border-black rounded-xl flex-col md:flex-row m-4">
        <div className="flex flex-col basis-1/2 my-4">
          <h1 className="font-bold text-5xl text-center my-4">
            {product.name}
          </h1>
          <p className="m-4">{product.description}</p>
          <div className="flex flex-row text-center justify-center">
            <h1 className="font-bold text-5xl px-2 border-t-4 border-black p-2">
              ${product.price} per kg
            </h1>
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
