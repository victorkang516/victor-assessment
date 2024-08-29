import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { children, to, className } = props;

  return (
    <li className="flex-1 h-full">
      <Link
        to={to}
        className={`flex flex-col justify-center items-center h-full hover:bg-gray-200 ${className}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
