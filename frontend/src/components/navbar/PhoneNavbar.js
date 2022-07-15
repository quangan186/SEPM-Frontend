import React, {useState} from 'react'
import menu from '../../assets/svg/menu.svg'
import {Link} from 'react-router-dom'
import { PhoneMenu } from '../menu/PhoneMenu'
export const PhoneNavbar = () => {
    let [menuBtn, setMenuBtn] = useState(0);
    const handleDisplayMenu = () => {
        menuBtn++;
        setMenuBtn(menuBtn);
        const sidebarMenu = document.getElementById("sidebar-menu");
        // const mainContent = document.getElementById("body")
    
        if (menuBtn % 2 !== 0) {
          sidebarMenu.style.transform = "translateX(0)";
          sidebarMenu.style.opacity = "1";
          sidebarMenu.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        } else {
          sidebarMenu.style.transform = "translateX(100%)";
          sidebarMenu.style.opacity = "0";
          // sidebarMenu.style.backgroundColor = "rgb(110 231 183)"
        }
      };

  return (
    <nav className="navbar fixed sm:hidden block w-full z-50">
      <div id="phone-navbar">
        <div className="phone-navbar-btn flex justify-between text-lg py-4 w-full bg-white border-b-2 border-b-black items-center">
          <div className="logo px-5 text-3xl font-bold">
            <Link to="/">
              RaD
            </Link>
          </div>

          <div className="phone-menu-btn px-5 inline-block cursor-pointer">
            <img src={menu} alt='menu-btn' onClick={handleDisplayMenu} />
          </div>
        </div>

        <PhoneMenu />
      </div>
    </nav>
  )
}
