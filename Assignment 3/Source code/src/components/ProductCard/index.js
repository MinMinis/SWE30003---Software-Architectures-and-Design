import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.name}`);
  };
  return (
    <div
      class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white "
      onClick={handleClick}
    >
      <div class="z-10 absolute w-full h-full peer"></div>
      <div class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#1acd81] transition-all duration-500"></div>
      <div class="absolute flex text-white text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#126945] transition-all duration-500">
        View Details
      </div>
      <div class="w-full h-full items-center justify-center flex uppercase">
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductCard;
