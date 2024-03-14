import React from "react";
import curve from "../assets/curve.png";
import shopping from "../assets/shopping.png";
import aeroplane from "../assets/aeroplane.png";
import { MdLocationOn } from "react-icons/md";
import Homedesign from "./Design/Banner";

function Home() {
  return (
    <div className="  bg-black  h-auto w-screen overflow-hidden  md:pt-[10rem]  pt-28 text-white ">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-20 lg:mb-[3.25rem] ">
        <h1 className=" text-[2.5rem]  md:text-[2.75rem]  lg:text-[3.25rem] xl:text-[3.75rem]     mb-6 font-[700] mx-4  leading-[3.25rem] lg:leading-[4.5rem]">
          Where Quality and Security Converge for {` `}
          <span className="inline-block relative">
            Peace of Mind{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="max-w-3xl mx-6 mb-10 text-lg md:text-xl lg:text-2xl md:mx-auto  text-n-2 lg:mb-8 text-[0.875rem] md:text-[1rem]  lg:text-[1.25rem]  leading-[1.5rem] md:leading-[2rem]   ">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
      </div>

      <div className="  shadow-sm flex flex-col gap-3 justify-center items-center  pb-16 md:pb-24">
        <div className=" relative">
          <input
            className=" border border-gray-300 w-[330px] pl-10 h-10 placeholder:text-md p-2 text-black
            shadow appearance-none  rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Enter your tracking id.."
          />
          <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button
          className="w-[330px] h-10 bg-[#5c855c] text-black font-semibold hover:bg-[#4b6e4b]
          appearance-none  rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          Track your shipment
        </button>
      </div>
      
      <Homedesign />

            {/* form section */}

      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mb-9">
        <div className="relative z-1 min-h-[490px] p-0.5 rounded-2xl  bg-gradient-conic from-90deg via-180deg to-270deg bg-gradient-to-br from-pink-500 via-cyan-500 to-purple-500  ">
          <div className="relative  bg-black rounded-[1rem]  min-h-[490px]">
            <div className="h-[1.6rem]   bg-slate-700 rounded-t-[0.9rem] " />
            <div className="  aspect-[27/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[1024/490] lg:aspect-[1024/490]  min-h-[490px]  ">
              <div className=" flex  relative  flex-col md:flex-row">
                <div className="   rounded-2xl        min-w-96  ">
                  <form className="space-y-4 w-full max-w-md     pr-10 pl-5  ">
                    <h1 className=" md:text-[29px]  text-[24px] font-bold bg-clip-text text-center   pt-5 text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                      Get a Quick Shippment Rate
                    </h1>
                    <div className="mb-4">
                      <label
                        htmlFor="originCountry"
                        className="block  font-medium mb-2"
                      >
                        Origin Country
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="originCountry"
                        placeholder="Origin Country"
                        className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full text-black"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="destinationCountry"
                        className="block font-medium mb-2"
                      >
                        Destination Country
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="destinationCountry"
                        placeholder="Destination Country"
                        className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full text-black"
                      />
                    </div>
                    <div className="flex mb-4 justify-between">
                      <div className="mr-8 w-1/2">
                        <label
                          htmlFor="weight"
                          className="block  font-medium mb-2"
                        >
                          Weight
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          id="weight"
                          placeholder="Weight"
                          className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full text-black"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="unit"
                          className="block font-medium mb-2"
                        >
                          Unit
                          <span className="text-red-600">*</span>
                        </label>
                        <select
                          id="unit"
                          className="appearance-none border border-gray-200   text-gray-500 py-2.5 pr-14 pl-5 rounded leading-tight focus:outline-none focus:bg-white shadow focus:shadow-outline w-full"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black' width='24' height='24'><path d='M7 10l5 5 5-5z'/></svg>")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 8px center",
                          }}
                        >
                          <option value="kgs">KGS</option>
                          <option value="lgs">LBS</option>
                        </select>
                      </div>
                    </div>
                    <p className="">
                      * The above shown freight Charges is based on standard
                      Calculations. For best price contact Us
                    </p>
                    <div className="flex   pb-8 pt-5 w-full justify-center">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium md:py-3 md:px-14 px-10 py-3 rounded focus:outline-none focus mr-8">
                        Reset
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium md:py-3 md:px-14  px-10 py-3 rounded focus:outline-none focus">
                        Get Rate
                      </button>
                    </div>
                  </form>
                </div>

                <div className="   relative">
                  <img
                    src={aeroplane}
                    alt="aerolane"
                    width={300}
                    height={100}
                    className="  absolute   hidden  md:block"
                  />
                  <img
                    src={shopping}
                    alt="shopping"
                    height={500}
                    width={500}
                    className="   ml-20 pt-24  hidden   md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
