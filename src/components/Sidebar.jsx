import React, { useContext } from "react";
import menuClose from "../assets/images/icon-menu-close.svg";
import { ToggleContext } from "../ToggleProvider";

function Sidebar() {
  const [isSideBarOpen, toggleSidebar] = useContext(ToggleContext);

  return (
    <div
      className={`bg-neutral-white transition-all duration-500 ease-linear fixed top-0 right-0 h-screen ${
        isSideBarOpen ? 'w-3/4' : 'w-0 overflow-hidden'
      }`}
    >
      <div className="flex justify-end items-center p-6">
        <img
          src={menuClose}
          onClick={() => toggleSidebar()}
          alt="Close Sidebar"
          className="w-auto h-8"
        />
      </div>
      <div className="mt-24 pl-8">
        <ul className="text-neutral-very-dark-blue text-2xl">
          <li className="my-6 duration-200 hover:text-primary-orange">Home</li>
          <li className="my-6 duration-200 hover:text-primary-orange">New</li>
          <li className="my-6 duration-200 hover:text-primary-orange">Popular</li>
          <li className="my-6 duration-200 hover:text-primary-orange">Trending</li>
          <li className="my-6 duration-200 hover:text-primary-orange">Categories</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
