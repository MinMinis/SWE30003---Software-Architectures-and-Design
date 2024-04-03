import React from "react";
import NavbarItem from "./NavbarItem";
import NavBarLogin from "./NavBarLogin";
import { useAuth } from "../../contexts/AuthContext";
import { useProduct } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cart, clearCart } = useProduct();
  const handleOnClick = () => {
    logout();
    clearCart();
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white border-2 border-[#D1FF99] p-4 m-4 rounded-lg flex flex-row">
      <div className="basis-3/5">
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
            <NavBarLogin to="/" onClick={handleOnClick}>
              {user.name}
            </NavBarLogin>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
