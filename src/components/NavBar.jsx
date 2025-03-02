import { MenuIcon, SearchIcon, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.svg";
import Button from "./reusableComponents/Button";
const NavBar = () => {
  const [isMenuopen, setIsMenuopen] = useState(false);
  const toggleMenu = () => {
    setIsMenuopen(!isMenuopen);
  };
  const SearchBar = () => {
    return (
      <div className="relative min-w-full lg:min-w-[622px] h-[40px] rounded-lg border border-[#334155] hidden lg:flex items-center">
        <input
          className="absolute z-[-1] top-0 w-full h-full rounded-lg pl-14 px-1"
          type="text"
          placeholder="Search..."
        />
        <SearchIcon className="ml-3 hover:scale-105 cursor-pointer" />
      </div>
    );
  };
  return (
    <nav className="flex items-center justify-between h-20 px-12 shadow-md relative">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <Link className="hidden lg:block" to="/categories">
        Categories
      </Link>
      <SearchBar />
      <Link className="hidden lg:block" to="/mentors">
        Teach on Byway
      </Link>
      <div className="hidden lg:flex gap-6 items-center">
        <Link to="/shoppingcart">
          <ShoppingCart />
        </Link>
        <Button btnText="Login" btnStyle="border border-[#334155]" />
        <Button btnText="Sign Up" btnStyle=" bg-[#334155] text-white" />
      </div>
      <button onClick={toggleMenu} className="z-50 block lg:hidden">
        {isMenuopen ? <X /> : <MenuIcon />}
      </button>
        <div className={`fixed inset-0 bg-[#9ca3af] flex items-center justify-center z-40 transition-transform duration-1000 ease-in-out lg:hidden ${isMenuopen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
          <div className="flex flex-col gap-8 items-center w-[100%] max-w-[500px] h-[500px] text-white py-4 justify-center px-4 shadow-2xl shadow-[#c379ff">
            <Link className="w-full h-14 flex items-center justify-center text-center hover:scale-95 bg-[#111827] rounded-lg shadow-sm" to="/categories">Categories</Link>
            <Link className="w-full h-14 flex items-center justify-center text-center hover:scale-95 bg-[#111827] rounded-lg shadow-sm" to="/mentors">Teach on Byway</Link>
            <Link className="w-full h-14 flex items-center justify-center text-center hover:scale-95 bg-[#111827] rounded-lg shadow-sm" to="/shoppingcart">
              <ShoppingCart />
            </Link>
            <Button btnText="Login" btnStyle="border border-[#3b82f6] min-w-full p-3 rounded text-center flex items-center justify-center" />
            <Button btnText="Sign Up" btnStyle=" bg-[#3b82f6] text-white min-w-full p-3 rounded text-center flex items-center justify-center" />
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
