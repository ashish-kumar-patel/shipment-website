import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterImage1 from "../assets/FooterImage1.png"
import FooterImage2 from "../assets/FooterImage2.png"

const Footer = () => {

  return (
    <footer className="  bg-[#011F61] text-white   py-4">
      <div className="container mx-auto  px-9 pb-7">
        <div className="flex  justify-around   px-1  mr-20">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h1 className="  text-5xl font-bold text-black  ">Logo</h1>
            <h5 className="  text-lg font-bold mb-3 mt-4">Our Locations</h5>
            <ul className="list-unstyled  cursor-pointer   text-gray-200">
              <li>Mumbai</li>
              <li>Surat</li>
              <li>Gurugram</li>
              <li>Aurangabad</li>
              <li>Bengaluru</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center  md:text-left">
            <h5 className="  text-lg font-bold mb-3">Explore</h5>
            <ul className="list-unstyled   text-gray-200 cursor-pointer">
              <li className=" mb-2">About Us</li>
              <li className=" mb-2">Contact Us</li>
              <li className=" mb-2">Blogs</li>
              <li className=" mb-2">Pricing</li>
              <li className=" mb-2">Careers</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="  text-lg font-bold mb-3">Information</h5>
            <ul className="list-unstyled  cursor-pointer  text-gray-200">
              <li className=" mb-2">Tracking</li>
              <li className=" mb-2">Rate Calculator</li>
              <li className=" mb-2">Media</li>
              <li className=" mb-2">FAQs</li>
              <li className=" mb-2">Glossary</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="  text-lg mb-3  font-bold">Connect with us</h5>
            <ul className="list-unstyled   text-gray-200">
              <li className=" mb-2 cursor-pointer">9999999999</li>
              <li className=" mb-2  cursor-pointer">business@.com</li>
            </ul>
            <h5 className="  text-base mb-2 mt-8 font-bold">Follow Us On</h5>
            <ul className="social-media list-unstyled  text-white mt-5 flex gap-2 text-xl">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div>
              <h4 className=" text-xl font-bold mb-8">Sign up to get offers</h4>
            </div>
            <div className=" ">
              <form >
               <div className=" flex  border-slate-400 border-2   rounded-3xl  py-1 overflow-hidden  ">
               <input type="email" placeholder="Email Address " className=" bg-transparent  pl-4 outline-none" />
                <button type="submit" className=" bg-blue-800 hover:bg-blue-900  px-4 py-1  -my-1">Go</button>
               </div>
              </form>
            </div>
            <div className=" flex  gap-2 mt-9">
              <div>
                <a href="#">
                  <img src={FooterImage2} alt="image" className="  h-10 w-auto" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={FooterImage1} alt="image" className="  h-10 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  min-h-0.5  bg-white  mt-5 mb-3"></div>

      <div className="flex w-full pt-1">
        <div className=" w-1/2 flex  justify-center font-light text-sm">
          <p>
            <a href="#"> Terms & Conditions </a>|
            <a href="#"> Privacy Policy </a>|
            <a href="#"> Refund Cancellation </a>|
            <a href="#"> ONDC Disclouser</a>
          </p>
        </div>
        <div className=" w-1/2 flex  justify-center">
          <p className=" pl-16">Shipping. © 2024. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
