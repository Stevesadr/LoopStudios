import React, { useEffect, useState } from "react";
import desktopDEEPEARTH from "../assets/images/desktop/image-deep-earth.jpg";
import mobileDEEPEARTH from "../assets/images/mobile/image-deep-earth.jpg";
import desktopNIGHTARCADE from "../assets/images/desktop/image-night-arcade.jpg";
import mobileNIGHTARCADE from "../assets/images/mobile/image-night-arcade.jpg";
import desktopSOCCERSTEAM from "../assets/images/desktop/image-soccer-team.jpg";
import mobileSOCCERSTEAM from "../assets/images/mobile/image-soccer-team.jpg";
import desktopTHEGRID from "../assets/images/desktop/image-grid.jpg";
import mobileTHEGRID from "../assets/images/mobile/image-grid.jpg";
import desktopFROMUP from "../assets/images/desktop/image-from-above.jpg";
import mobileFROMUP from "../assets/images/mobile/image-from-above.jpg";
import desktopPOCKETBOREALIS from "../assets/images/desktop/image-pocket-borealis.jpg";
import mobilePOCKETBOREALIS from "../assets/images/mobile/image-pocket-borealis.jpg";
import desktopCURIOSITY from "../assets/images/desktop/image-curiosity.jpg";
import mobileCURIOSITY from "../assets/images/mobile/image-curiosity.jpg";
import desktopFISHEYE from "../assets/images/desktop/image-fisheye.jpg";
import mobileFISHEYE from "../assets/images/mobile/image-fisheye.jpg";
import UseWindowSize from "./fischer/UseWindowSize";

const Product = () => {
  const [responsive, setResponsive] = useState("");
  const { width } = UseWindowSize();
  const isMobile = width <= 768;
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setResponsive(isMobile ? "mobimageUrl" : "deskimageUrl");
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const products = [
    {
      id: 0,
      title: "DEEP EARTH",
      deskimageUrl: desktopDEEPEARTH,
      mobimageUrl: mobileDEEPEARTH,
    },
    {
      id: 1,
      title: "NIGHT ARCADE",
      deskimageUrl: desktopNIGHTARCADE,
      mobimageUrl: mobileNIGHTARCADE,
    },
    {
      id: 2,
      title: "SOCCER STEAM VR",
      deskimageUrl: desktopSOCCERSTEAM,
      mobimageUrl: mobileSOCCERSTEAM,
    },
    {
      id: 3,
      title: "THE GRID",
      deskimageUrl: desktopTHEGRID,
      mobimageUrl: mobileTHEGRID,
    },
    {
      id: 4,
      title: "FROM UP ABOVE VR",
      deskimageUrl: desktopFROMUP,
      mobimageUrl: mobileFROMUP,
    },
    {
      id: 5,
      title: "POCKET BOREALIS",
      deskimageUrl: desktopPOCKETBOREALIS,
      mobimageUrl: mobilePOCKETBOREALIS,
    },
    {
      id: 6,
      title: "THE CURIOSITY",
      deskimageUrl: desktopCURIOSITY,
      mobimageUrl: mobileCURIOSITY,
    },
    {
      id: 7,
      title: "MAKE IT FISHEYE",
      deskimageUrl: desktopFISHEYE,
      mobimageUrl: mobileFISHEYE,
    },
  ];
  return (
    <div className="bg-white text-black md:px-25 font-bodyfont ">
      <div className="flex items-cnter justify-center md:justify-between  md:mb-20">
        <h1 className=" text-3xl font-light md:font-extralight">
          OUR CREATIONS
        </h1>
        <button className="hidden md:flex border-1 px-8 py-2 tracking-wider text-sm hover:bg-black hover:text-white cursor-pointer">
          SEE ALL
        </button>
      </div>
      <div className="">
        <div className="h-auto mx-auto grid grid-cols-1 grid-rows-8 md:grid-cols-4 gap-8 md:grid-rows-2 justify-center items-center">
          {products.map((item) => {
            return (
              <div
                className="h-32 md:w-[10rem] md:h-[24rem] lg:w-[17rem] break-words lg:h-[32rem] mx-4 md:m-2 flex items-end justify-start text-white p-6 text-3xl hover:text-black cursor-pointer
                tracking-wider relative"
                style={{
                  backgroundImage: `url(${
                    isMobile ? item.mobimageUrl : item.deskimageUrl
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute inset-0 bg-white/0 hover:bg-white/50 transition duration-300"></div>
                <h2 className="z-50 font-light w-3/4 md:w-full lg:w-4/5">
                  {item.title}
                </h2>
              </div>
            );
          })}
          <div className="md:hidden flex itesm-center justify-center">
            <button className="border-1 px-8 py-2  text-sm tracking-widest">
              SEE ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
