import React from "react";
import { Link } from "react-router-dom";

export const Links = ({ title, className,link }) => {
  return (
    <Link
      to={link}
      className={`hover:text-blue-700 hover:font-medium rounded-md px-3 py-2 text-lg font-medium ${className}`}
      aria-current="page"
    >
      {title}
    </Link>
  );
};
