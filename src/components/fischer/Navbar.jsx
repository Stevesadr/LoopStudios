import React, { useState, useEffect } from "react";
import Image from "../../assets/images/logo.svg";
import hanburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import BtnNav from "./BtnNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const items = ["About", "Careers", "Events", "Products", "Support"];
  const mobileItems = ["ABOUT", "CARFERS", "EVENTS", "PRODUCTS", "SUPPORT"];
  return (
    <div className="p-4">
      <nav className="">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={Image} alt="LOGO" className="w-36 " />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none "
            >
              <img src={hanburger} alt="hanburger" />
            </button>
          </div>
          <div className="hidden md:flex md:space-x-4 z-50">
            <div className="flex items-center justify-around gap-4 p-3">
              {" "}
              {items.map((items) => {
                return <BtnNav>{items}</BtnNav>;
              })}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 left-0 w-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4 flex items-center justify-between">
          <div>
            <img src={Image} alt="LOGO" className="w-36 " />
          </div>
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="mt-8 p-4 text-2xl">
          {mobileItems.map((item) => {
            return (
              <h3
                className="my-5 font-light
"
              >
                {item}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
