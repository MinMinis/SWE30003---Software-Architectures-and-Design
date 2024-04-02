import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ children, to }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={
            isActive
              ? "basis-1/3 text-lg mx-4 underline underline-offset-8 font-bold whitespace-nowrap"
              : "basis-1/3 text-lg mx-4 hover:underline underline-offset-0 hover:underline-offset-8 duration-300 whitespace-nowrap ease-out"
          }
        >
          {children}
        </div>
      )}
    </NavLink>
  );
};

export default NavbarItem;
