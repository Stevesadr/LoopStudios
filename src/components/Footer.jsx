import React from "react";
import LOGO from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  const items = ["About", "Careers", "Events", "Products", "Support"];
  return (
    <div className="text-wight mt-10 p-10 bg-black md:flex md:px-25 md:mt-25">
      <div className="w-full md:w-1/2 ">
        <div className="w-full flex items-center justify-center md:justify-start ">
          <img src={LOGO} alt="Logo" className="w-1/2 md:w-1/3" />
        </div>
        <div className="text-center md:flex md:items-center md:justify-stars md:gap-6">
          {items.map((item) => {
            return (
              <h5 className="m-6 md:my-6 md:mx-0 md:gap-6 font-semibold">
                {item}
              </h5>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex items-center justify-evenly w-full md:justify-end gap-4">
          <img src={facebook} alt="facebook" className="w-6" />
          <img src={twitter} alt="twitter" className="w-6" />
          <img src={pinterest} alt="pinterest" className="w-6" />
          <img src={instagram} alt="instagram" className="w-6" />
        </div>
        <div className="text-[10px] md:text-sm md:my-8 text-center mt-4 md:text-end">
          <h6 className="text-darkgray">
            © 2021 Loopstudios. All rights reserved
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Footer;
