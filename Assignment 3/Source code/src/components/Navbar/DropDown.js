import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const lists = [
  { name: "Account", path: "/account", image: "./user.png" },
  { name: "Logout", path: "/logout", image: "./logout.png" },
];
const DropDown = ({ handleOnClick }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    setIsOpen(false);
    handleOnClick();
    navigate("/");
  };
  return (
    <div className="relative flex flex-col items-center w-[200px] h-[200px] rounded justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#03301f] text-white p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        <div className="flex flex-row">
          <img
            src="./user-profile.png"
            alt="User Profile"
            className="h-8 mr-2"
          />
          {user.name}
        </div>
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bg-white top-36 flex flex-col items-start rounded-lg p-2 w-full border-2 border-black z-50">
          <div
            className="group p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent hover:border-white hover:bg-black duration-300 ease-out hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            <h3>{lists[0].name}</h3>
            <img
              src={lists[0].image}
              alt="user"
              className="h-8 rounded-full group-hover:bg-white duration-300 ease-out"
            />
          </div>
          <div
            className="p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent bg-red-600 text-white hover:border-white ease-out hover:bg-black duration-300 hover:text-white"
            onClick={handleLogout}
          >
            <h3>{lists[1].name}</h3>
            <img
              src={lists[1].image}
              alt="logout"
              className="h-8 rounded-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
