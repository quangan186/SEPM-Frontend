import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            RaD
        </div>

        <div className='menu'>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/meeting">Meeting</Link>
                </li>
            </ul>
        </div>

        <div className='user-account'>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
