import React, { useContext } from "react";
import Menu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import {ToggleContext} from "../ToggleProvider"

function Navbar() {  
  const [isSideBarOpen, toggleSidebar] = useContext(ToggleContext)

  3
  return (
    <div className="flex justify-between items-center pt-6">
      <img src={Logo} alt="Logo" className="w-auto h-8" />
      <img
        onClick={() => toggleSidebar()}
        src={Menu}
        alt="Menu Icon"
        className="w-auto h-5 lg:hidden"
      />
      <ul className="hidden lg:flex gap-10">
        <li className="duration-200 hover:text-primary-orange">Home</li>
        <li className="duration-200 hover:text-primary-orange">New</li>
        <li className="duration-200 hover:text-primary-orange">Popular</li>
        <li className="duration-200 hover:text-primary-orange">Trending</li>
        <li className="duration-200 hover:text-primary-orange">Categories</li>
      </ul>
    </div>
  );
}

export default Navbar;
