import React, { useEffect, useState } from "react";
import desktopImage from "../assets/images/desktop/image-interactive.jpg";
import mobileImage from "../assets/images/mobile/image-interactive.jpg";

const Section = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setImage(isMobile ? mobileImage : desktopImage);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="my-12 lg:my-25 w-full md:px-25 bg-white p-4">
      <div className=" w-full  md:flex md:items-center md:justify-between md:relative">
        <div className=" md:w-1/2 md:relative ">
          <img src={image} alt="image" />
        </div>
        <div className="text-center md:text-left  md:w-3/5    md:flex md:flex-col md:items-center md:justify-center md:absolute md:bottom-0 md:right-0 md:bg-white">
          <div className="md:w-full lg:w-2/3 ">
            <h1 className="text-black font-light tracking-wide text-3xl lg:text-4xl lg:tracking-wider mt-2.5 lg:my-10">
              THE LEADER IN INTERACTIVE VR{" "}
            </h1>
            <p className="text-darkgray text-sm tracking-tight ">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
