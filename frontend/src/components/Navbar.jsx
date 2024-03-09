import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleNavigation = () => {
    if (open==true) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!open) return;

    enablePageScroll();
    setOpen(false);
  };

  const links = ["Home", "Track Package", "About us", "Service", "Resources"];

  return (
    <nav
      className={`bg-[#f1f1f1] w-full h-24 items-center fixed top-0  left-0 md:top-[22px] z-50 opacity-100 transition-transform duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-10 md:px-4   py-8">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            <h3>BomBino</h3>
          </span>

          <div
            onClick={toggleNavigation}
            className="text-3xl md:hidden absolute right-12 top-6 cursor-pointer "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <div
            className={`md:items-center md:pb-0 flex flex-col md:flex-row pb-12 absolute    pt-16 md:pt-0
                     md:static  text-center  left-0 h-screen  md:h-0 w-screen md:w-auto md:pl-0 transition-all duration-600 bg-[#f1f1f1]
                      ease-in ${open ? " top-20" : "top-[-990px]"}`}
          >
            {links.map((linkText, index) => (
              <a
                href="#"
                onClick={handleClick}
                key={index}
                className="text-gray-800 hover:text-black duration-500 
                              mx-4 lg:mx-10   py-6  md:py-0    text-2xl  md:text-base"
              >
                {linkText}
              </a>
            ))}

            <div className=" md:mt-0 mt-7">
              <button
                className="  md:text-base bg-black text-white px-2 py-2 h-14  w-36  text-xl md:h-10 md:w-28 "
                onClick={handleClick}
                href="#"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
