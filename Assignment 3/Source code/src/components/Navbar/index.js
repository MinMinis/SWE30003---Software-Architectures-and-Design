import React from "react";
import NavbarItem from "./NavbarItem";
import NavBarLogin from "./NavBarLogin";
import { useAuth } from "../../contexts/AuthContext";
import { useProduct } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import { toast } from "react-toastify";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cart, clearCart } = useProduct();
  const handleOnClick = () => {
    logout();
    toast("Logout successfully", { toastId: "toast" });
    clearCart();
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white border-2 border-[#D1FF99] p-4 m-4 rounded-lg flex md:flex-row flex-col">
      <div className="basis-3/5 items-center justify-center flex">
        <img
          className="w-[200px] cursor-pointer"
          src="logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="basis-2/5 flex flex-row w-full items-center justify-between text-4xl">
        <NavbarItem to="/">Home</NavbarItem>
        {!isAuthenticated ? (
          <>
            <NavbarItem to="/signup">Sign Up</NavbarItem>
            <NavBarLogin to="/login">Log in</NavBarLogin>
          </>
        ) : (
          <>
            <NavbarItem to="/menu">Menu</NavbarItem>
            <NavbarItem to="/cart">
              Cart
              {cart.length !== 0 && (
                <span className="no-underline	text-base txt bg-red-700 rounded-full text-white mx-1 px-3">
                  {cart.length}
                </span>
              )}
            </NavbarItem>
            <DropDown handleOnClick={handleOnClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
