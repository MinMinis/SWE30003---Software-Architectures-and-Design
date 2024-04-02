import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLogin = ({ children, to, onClick = () => {} }) => {
  return (
    <NavLink to={to}>
      <div
        onClick={onClick}
        className="hover:underline underline-offset-0 hover:underline-offset-8 duration-300 ease-out basis-1/3 text-white px-4 p-2 rounded-md text-lg mx-4 bg-[#203507] whitespace-nowrap"
      >
        {children}
      </div>
    </NavLink>
  );
};

export default NavBarLogin;
