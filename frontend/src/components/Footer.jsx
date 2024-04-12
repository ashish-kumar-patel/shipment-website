import React from "react";
import { FaInstagram ,FaFacebookF, FaLinkedin ,FaYoutube } from "react-icons/fa";
import FooterImage1 from "../assets/FooterImage1.png"
import FooterImage2 from "../assets/FooterImage2.png"


const Footer = () => {

  const cities = ["Bengaluru", "Mumbai", "Surat ", "Gujarat ", "Rajastan"];
  const exploreItems = [ "About Us", "Contact Us","Blogs", "Pricing", "Careers",];
  const informationItems = ["Tracking", "Rate Calculator", "Media", "FAQs", "Glossary",];

  
  const HandleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <footer className="  bg-[#011F61] text-white   py-4 pt-12">
     <div className="container mx-auto  ">
        <div className="grid grid-cols-2 min-w-96 md:grid-cols-5  lg:pl-10 lg:pr-28">
          <div className="text-center md:text-left">
            <h1 className="  text-5xl font-bold text-black  mb-5 ">Logo</h1>
            <h5 className="text-lg font-bold mb-3">Our Locations</h5>
            <ul className="list-none text-gray-200">
              {cities.map((city, index) => (
                <li key={index} className=" mb-1">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="text-lg font-bold mb-3">Explore</h5>
            <ul className="list-none text-gray-200">
              {exploreItems.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="text-lg font-bold mb-3">Information</h5>
            <ul className="list-none text-gray-200">
              {informationItems.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full  md:w-1/2  md:px-0 text-center ">
            <div>
              <h5 className="text-lg font-bold mb-3 ">Connect with us</h5>
              <ul className="list-none text-gray-200">
                <li className=" cursor-pointer">9999999999</li>
                <li className="mb-2 cursor-pointer">business@.com</li>
              </ul>
            </div>
            <div className="  lg:mt-6  ">
              <h5 className="text-base mb-2 font-bold">Follow Us On</h5>
              <ul className="flex text-white text-xl gap-2  justify-center ">
                <li>
                  <a href="#" className="cursor-pointer">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-pointer">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="  col-span-2  sm:col-span-2   text-center   md:col-span-1  lg:col-span-1 ">
            <div>
              <h4 className="text-xl font-bold mb-5 mt-5 lg:mt-0 ">
                Sign up to get offers
              </h4>
            </div>
            <div className="  lg:mx-0 mx-12 md:mx-0">
              <form className="flex border-slate-400 border-2 rounded-3xl  py-1 overflow-hidden     ">
                <input   type="email"  placeholder="Email Address"   className="bg-transparent pl-4 outline-none w-full "  />
                <button onClick={HandleSubmit}  type="submit"  className="bg-blue-800 hover:bg-blue-900 px-4 py-1 -my-1"   >
                 Go
                </button>
              </form>
            </div>
            <div className="flex gap-4 mt-9  justify-center  ">
              <div>
                
                  <img src={FooterImage1} alt="image" className="h-10 w-auto " />
              
              </div>
              <div>
                
                  <img src={FooterImage2} alt="image" className="h-10 w-auto" />
                
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
