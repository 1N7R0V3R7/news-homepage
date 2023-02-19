import React, { useContext } from "react";
import Blogs from "./components/Blogs";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import { New } from "./components/New";
import Sidebar from "./components/Sidebar";
import { ToggleContext } from "./ToggleProvider";

function App() {
  const [isSideBarOpen, toggleSidebar] = useContext(ToggleContext);

  return (
    <div className={`bg-neutral-white box-border px-4 max-w-6xl lg:mx-auto`}>
      {isSideBarOpen && (
        <div className="bg-gray-700 fixed top-0 right-0 left-0 bottom-0 h-full opacity-40"></div>
      )}
      <Navbar />
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-10">
        <Intro />
        <New />
      </div>

      <Sidebar />
      <Blogs />
    </div>
  );
}

export default App;
