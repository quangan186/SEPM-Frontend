import React from 'react'
import {Link} from 'react-router-dom'
export const Menu = () => {
  return (
    <div className="menu inline-flex justify-between w-full">
      <ul className="text-center text-base flex text-white/50">
        <li className="mx-5">
          <Link
            to="/about"
            className="hover:text-white duration-300 py-5 inline-block w-full"
          >
            About
          </Link>
        </li>

        <li className='mx-5'>
        <Link
            to="/meeting"
            className="hover:text-white duration-300 py-5 inline-block w-full"
          >
            Meeting
          </Link>
        </li>
      </ul>

      <ul className="text-center text-base flex text-white/50">
        <li className="mx-5">
          <Link
            to="/login"

            className="hover:text-white duration-300 py-5 inline-block w-full"
          >
            Login
          </Link>
        </li>
        <li className="mx-5">
          <Link
            to="/register"
            className="hover:text-white duration-300 py-5 inline-block w-full"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  )
}
