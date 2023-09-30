import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-black text-white flex justify-between items-center p-2">
        <div className="text-xl text-cyan-300">Todo</div>
        <ul className="flex gap-4">
          <li className="hover:text-blue-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link to="/github">GitHub</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
