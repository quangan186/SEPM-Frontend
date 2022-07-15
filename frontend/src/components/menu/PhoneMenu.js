import React from "react";
import {Link} from 'react-router-dom'
export const PhoneMenu = () => {
  return (
    <aside className="aside sm:hidden block">
      <div
        id="sidebar-menu"
        className="w-full h-screen translate-x-full opacity-0 duration-300 flex justify-end"
      >
        <div className="w-1/2 border-l border-l-black block  bg-white">
          <ul className="text-center text-base">
            <li>
              <Link
                to="/about"
                className="hover:bg-black hover:text-white duration-300 py-5 block w-full"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/meeting"
                className="hover:bg-black hover:text-white duration-300 py-5 block w-full"
              >
                Meeting
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:bg-black hover:text-white duration-300 text-black py-5 block w-full"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:bg-black hover:text-white duration-300 py-5 block w-full"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
