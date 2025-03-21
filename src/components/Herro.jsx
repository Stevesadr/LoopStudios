import React, { useEffect, useState } from "react";
import Navbar from "./fischer/Navbar";
import desktopheroImage from "../assets/images/desktop/image-hero.jpg";
import mobileheroImage from "../assets/images/mobile/image-hero.jpg";

const Herro = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setBackgroundImage(isMobile ? mobileheroImage : desktopheroImage);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-[32rem] relative ">
      <div className="z-100 h-full w-full  absolute bottom-0 left-0 right-0 md:px-25">
        <Navbar />
        <div className="w-full h-full flex items-center justify-center md:flex md:justify-start font-bodyfont text-4xl lg:text-5xl p-4 ">
          <h1 className="border-2 p-4 font-light max-w-96 ">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h1>
        </div>
      </div>
      <div
        className="bottom-0 left-0 right-0 h-full absolute "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Herro;
