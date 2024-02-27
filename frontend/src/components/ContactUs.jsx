import React from "react";
import Waveimage from "./Waveimage.png";
import Byjulogo from "./Byjulogo.png";
import Fnplogo from "./Fnplogo.webp";
import Rabbitlogo from "./Rabbitlogo.png";
import Portlogo from "./Portlogo.webp";
import Superlogo from "./Superlogo.webp";
import Goqilogo from "./Goqilogo.webp";

function Contact() {
  return (
    <div className=" w-full  bg-white ">
      <div className=" bg-gradient-to-r from-[#010713] to-[#051a42] via-[#040861]">
        <h2 className=" text-6xl text-white font-bold flex justify-center   pt-48 pb-40">
          Contact Us
        </h2>
        <img src={Waveimage} alt="image" />
      </div>
      {/* contact page here */}

      <div className=" flex  flex-wrap   min-h-[500px]  px-7">
        <div className=" w-1/2">
          <h2 className=" text-5xl/[60px] font-bold pl-40 text-[#011F61]  pt-16 ">
            How can we <br />
            help you?
          </h2>
          <p className="  pl-40   pt-5 text-[#011F61]  text-2xl/[40px]">
            {" "}
            Thank you for your interest in Shipping
            <br />
            Please use this form to contact us.
            <br />
            We will get back to you as soon as we can.
          </p>
        </div>
        <div className=" w-1/2 ">
          <div className=" rounded-xl   min-w-96 mr-44  ml-20    mt-20 shadow-2xl shadow-black drop-shadow-xl">
            <div className="  pb-2">
              <form>
                <h5 className=" text-2xl text-[#011F61] font-bold justify-center flex  py-5 ">
                  Send us a message
                </h5>
                <div className="  mx-7">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-[#F5F5F5]  py-3  pl-6   w-full  rounded-2xl outline-none "
                  />
                </div>
                <div className=" mx-7">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className=" bg-[#F5F5F5]  py-3  pl-6   w-full  my-5  rounded-2xl outline-none"
                  />
                </div>
                <div className=" flex   justify-center gap-1  mb-5">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email"
                      className=" bg-[#F5F5F5] py-3  pl-6    w-full  rounded-2xl outline-none "
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Mobile No."
                      className=" bg-[#F5F5F5]  py-3  pl-6   w-full   rounded-2xl outline-none "
                    />
                  </div>
                </div>
                <div className="  mx-7 mb-5">
                  <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    placeholder="Message"
                    className="bg-[#F5F5F5]  rounded-2xl  pl-3 pt-2  w-full  outline-none "
                  ></textarea>
                </div>
                <div className=" mx-10  mb-5   ">
                  <button
                    type="submit"
                    className=" w-full  text-xl  font-medium text-white py-2 rounded-2xl  bg-[#FCC537] outline-none"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Our Location page here */}

      <div className="   my-24 ">
        <div className="  mb-12 mt-28 ">
          <h4 className="flex justify-center text-5xl font-bold text-[#011F61]   ">
            Our Locations
          </h4>
        </div>
        <div className=" flex justify-around gap-10  px-48">
          <div className=" bg-[#E1E1E1] py-7 rounded-3xl hover:bg-[#050361] hover:text-white  text-[#011F61] duration-300">
            <h3 className=" flex justify-center text-3xl font-semibold  mb-3">
              Mumbai HQ
            </h3>
            <p className="flex justify-center  ">Techniplex 2,</p>
            <p className=" px-8  text-center ">
              12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor
              sit amet. Mumbai – 4000000
            </p>
          </div>
          <div className="  bg-[#E1E1E1] py-7 rounded-3xl hover:bg-[#050361] hover:text-white   text-[#011F61] duration-300">
            <h3 className=" flex justify-center text-3xl  font-semibold   mb-3">
              Surat
            </h3>
            <p className="flex justify-center  ">Techniplex 2,</p>
            <p className=" px-8 text-center  ">
              12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor
              sit amet. Mumbai – 4000000
            </p>
          </div>
          <div className="  bg-[#E1E1E1] py-7 rounded-3xl hover:bg-[#050361] hover:text-white  text-[#011F61] duration-300">
            <h3 className=" flex justify-center text-3xl  font-semibold   mb-3">
              Gurugram
            </h3>
            <p className="flex justify-center  ">Techniplex 2,</p>
            <p className=" px-8  text-center  ">
              12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor
              sit amet. Mumbai – 4000000
            </p>
          </div>
          <div className="  bg-[#E1E1E1] py-7 rounded-3xl  hover:bg-[#050361] hover:text-white  text-[#011F61] duration-300">
            <h3 className=" flex justify-center text-3xl  font-semibold  mb-3">
              Pune
            </h3>
            <p className="flex justify-center   ">Techniplex 2,</p>
            <p className=" px-8  text-center  ">
              12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor
              sit amet. Mumbai – 4000000
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-center  mb-16">
          <div>
            <h2 className="text-[#011F61] text-5xl font-bold mb-8">
              Trusted by thousands
            </h2>
            <strong className="text-[#011F61] flex justify-center">
              The preferred choice of more than 25,000+ businesses
            </strong>
          </div>
        </div>
        <div className=" flex flex-wrap justify-around  mx-32  mb-24">
          <img src={Fnplogo} alt="logo" className="  h-10 w-auto" />

          <img src={Byjulogo} alt="logo" className="  h-10 w-auto" />

          <img src={Rabbitlogo} alt="logo" className="  h-10 w-auto" />

          <img src={Portlogo} alt="logo" className="  h-10 w-auto" />

          <img src={Superlogo} alt="logo" className="  h-10 w-auto" />

          <img src={Goqilogo} alt="logo" className="  h-10 w-auto" />
        </div>
      </div>

      <div className="  bg-[#00AEEF]  py-7">
        <div className="  px-52">
          <h3 className=" text-white font-bold text-5xl  my-16 flex justify-center">
            Reach far. Think scale.
          </h3>
          <div className=" flex justify-around mb-6">
            <div className="  text-center">
              <span className=" text-4xl font-semibold text-[#FCC537] ">
                29000 +
              </span>
              <p className="text-[#E5EEF1]">Indian Pincodes</p>
            </div>
            <div className="  text-center">
              <span className=" text-4xl font-semibold text-[#FCC537]">
                190 +
              </span>
              <p className="text-[#E5EEF1]">Countries</p>
            </div>
            <div className="  text-center">
              <span className=" text-4xl font-semibold text-[#FCC537]">
                20 +
              </span>
              <p className="text-[#E5EEF1]">Carrier Partners</p>
            </div>
            <div className="  text-center">
              <span className=" text-4xl font-semibold text-[#FCC537]">
                15 +
              </span>
              <p className="text-[#E5EEF1]">Channel Partners</p>
            </div>
            <div className="  text-center">
              <span className=" text-4xl font-semibold text-[#FCC537]">
                125000 +
              </span>
              <p className="text-[#E5EEF1]">
                sq. ft. Warehousing <br />
                Inventory
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
