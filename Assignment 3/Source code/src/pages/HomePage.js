import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-auto">
      <div className="flex items-center justify-center">
        <img src="./logo.png" className="w-[200px]" alt="Logo" />
      </div>
      <div className="flex items-center justify-center my-4">
        <h1 className="font-bold text-5xl">ALL YOUR HEALTHY FOOD</h1>
      </div>
      <div className="flex items-center justify-center my-4">
        <p className="font-bold text-2xl">
          Healthy and delicious dishes to your table
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mb-48">
        <button
          className="mx-4 bg-[#203507] hover:bg-[#4DBB4B] p-2 rounded-lg text-white"
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
        <button
          className="mx-4 border border-black bg-white p-2 rounded-lg hover:bg-[#4DBB4B] hover:text-white ease-out duration-200"
          onClick={() => navigate("/menu")}
        >
          See the Menu
        </button>
      </div>
    </div>
  );
};

export default HomePage;
