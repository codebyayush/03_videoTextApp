import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around p-5 bg-teal-300 shadow-xl ">
        <header className="cursor-pointer font-medium text-4xl italic text-teal-900 ">
          Video Text App
        </header>
        <button className="bg-teal-700 text-white font-medium rounded-xl p-2 pl-10 pr-10 hover:bg-neutral-500 hover:text-white hover:duration-300 shadow-lg ">
          Try for free
        </button>
      </nav>
    </>
  );
};

export default Nav;
