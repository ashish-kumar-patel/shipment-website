import React from "react";
import Waveimage from "../assets/Waveimage.png";
import Byjulogo from "../assets/Byjulogo.png";
import Fnplogo from "../assets/Fnplogo.webp";
import Rabbitlogo from "../assets/Rabbitlogo.png";
import Portlogo from "../assets/Portlogo.webp";
import Superlogo from "../assets/Superlogo.webp";
import Goqilogo from "../assets/Goqilogo.webp";

function Contact() {
  const stats = [
    { count: "29000+", label: "Indian Pincodes" },
    { count: "190+", label: "Countries" },
    { count: "20+", label: "Carrier Part" },
    { count: "15+", label: "Channel Partners" },
    { count: "125000+", label: "sq. ft. Warehousing Inventory" },
  ];

  const logos = [
    { id: 1, src: Fnplogo, alt: "Fnp logo" },
    { id: 2, src: Byjulogo, alt: "Byju logo" },
    { id: 3, src: Rabbitlogo, alt: "Rabbit logo" },
    { id: 4, src: Portlogo, alt: "Port logo" },
    { id: 5, src: Superlogo, alt: "Super logo" },
    { id: 6, src: Goqilogo, alt: "Goqi logo" },
  ];

  const locations = [
    { name: "Mumbai HQ", address: "Techniplex 2, 12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor sit amet. Mumbai – 4000000", },
    { name: "Surat",     address: "Techniplex 2, 12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor sit amet. Mumbai – 4000000",  },
    { name: "Gurugram",  address: "Techniplex 2, 12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor sit amet. Mumbai – 4000000",},
    { name: "Pune",      address: "Techniplex 2, 12 A, 3rd Floor, fdffffffLorem, fddfbfdb ipsum. Lorem ipsum dolor sit amet. Mumbai – 4000000", },
  ];
  const LocationCard = ({ name, address }) => (
    <div className="bg-[#E1E1E1] py-7 rounded-3xl hover:bg-[#050361] hover:text-white  text-[#011F61] duration-300">
      <h3 className="text-3xl font-semibold mb-3 text-center">{name}</h3>
      <p className="text-center">Techniplex 2,</p>
      <p className="px-8 text-center">{address}</p>
    </div>
  );
 

  return (
    <div className=" w-full  bg-white ">
      <div className=" bg-gradient-to-r from-[#010713] to-[#051a42] via-[#040861]">
        <h2 className=" text-6xl text-white font-bold flex justify-center   pt-48 pb-40">
          Contact Us
        </h2>
        <img src={Waveimage} alt="image" />
      </div>

      <div className="flex flex-col md:flex-row  lg:gap-10   px-7">
        <div className="w-full md:w-1/2 lg:w-2/5   text-[#011F61] lg:ml-40  p-10">
          <h2 className="text-5xl font-bold mb-5 ">
            How can we <br />
            help you?
          </h2>
          <p className="text-2xl mb-5  leading-10">
            {" "}
            Thank you for your interest in Shipping
            <br />
            Please use this form to contact us.
            <br />
            We will get back to you as soon as we can.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5   min-w-80  max-w-lg   bg-white rounded-xl shadow-2xl shadow-black drop-shadow-xl px-10 py-10">
          <form className=" space-y-5">
            <h5 className="text-2xl font-bold text-[#011F61]">
              Send us a message
            </h5>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-200 py-3 pl-6 w-full rounded-2xl outline-none"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="bg-gray-200 py-3 pl-6 w-full my-5 rounded-2xl outline-none"
            />
            <div className="flex flex-col md:flex-row justify-between gap-1">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 py-3 pl-6 w-full rounded-2xl outline-none mb-5 md:mb-0"
              />
              <input
                type="text"
                placeholder="Mobile No."
                className="bg-gray-200 py-3 pl-6 w-full rounded-2xl outline-none"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
              className="bg-gray-200 rounded-2xl pl-3 pt-2 w-full outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full text-xl font-medium text-white py-2 rounded-2xl bg-[#FCC537] outline-none"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="my-24">
        <div className="mb-12 mt-28 text-center">
          <h4 className="text-5xl font-bold text-[#011F61]">Our Locations</h4>
        </div>
        <div className="flex flex-wrap justify-center gap-10  px-4 sm:px-10   lg:px-20">
          {locations.map((location, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <LocationCard name={location.name} address={location.address} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-[#011F61] text-5xl font-bold mb-8">
            Trusted by thousands
          </h2>
          <strong className="text-[#011F61]">
            The preferred choice of more than 25,000+ businesses
          </strong>
        </div>
        <div className="flex flex-wrap justify-center mx-4 mb-24">
          {logos.map((logo) => (
            <div key={logo.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#00AEEF] py-10">
        <div className="px-5">
          <h3 className="text-white font-bold text-5xl my-16 flex justify-center">
            Reach far. Think scale.
          </h3>
          <div className="flex flex-wrap justify-center mb-6 xl:px-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5   text-center"
              >
                <span className="text-4xl font-semibold text-[#FCC537]">
                  {stat.count}
                </span>
                <p className="text-[#E5EEF1]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
