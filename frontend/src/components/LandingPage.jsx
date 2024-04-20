import React, { useState } from "react";

const LoginForm = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const moveRegister = () => {
    setIsLoginFormVisible(false);
  };

  const moveLogin = () => {
    setIsLoginFormVisible(true);
  };


  const HandleDomesticData=(e)=>{
    e.preventDefault()
  }
  
  const HandleInternationalData=(e)=>{
    e.preventDefault()
  }
  return (

<div className="flex justify-center bg-cover bg-center mt-16">
      <div className="form-box bg-white p-8 rounded-md shadow-md w-full max-w-md mx-auto">
        <div className="button-box flex justify-center mb-8 bg-gray-100 mx-14 border border-transparent rounded-full">
          <button
            className={`toggle-btn font-bold px-16 py-2 border border-transparent rounded-full  ${
              isLoginFormVisible
                ? "bg-[#0E2C53] text-white transition  duration-500 ease-linear"
                : "bg-gray-100"
            }`}
            onClick={moveLogin}
            disabled={isLoginFormVisible}
          >
            Domestic
          </button>
          <button
            className={`toggle-btn font-bold px-16 py-2 border border-transparent rounded-full  ${
              !isLoginFormVisible
                ? "bg-[#0E2C53] text-white transition  duration-500 ease-linear"
                : "bg-gray-100"
            }`}
            onClick={moveRegister}
            disabled={!isLoginFormVisible}
          >International
          </button>
        </div>
        {/* Domestic Form */}
        <form
          id="Domestic"
          className={`input-group ${isLoginFormVisible ? " " : "hidden"} `}
        >
          <div className="flex flex-col ">
            <div className="mb-4">
              <label
                htmlFor="originPincode"
                className="block text-gray-700 font-medium mb-2"
              >
                Origin/Shipper Pincode
                <span >*</span>
              </label>
              <input
                type="number"
                id="originPincode"
                placeholder=" Enter Origin Pincode"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="originCountry"
                className="block text-gray-700 font-medium mb-2"
>
                Destination /Consignee Pincode
                <span className="">*</span>
              </label>
              <input
                type="number"
                id="originCountry"
                placeholder="Select Destination Country"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <button
              type="submit"
              className="submit-btn w-full py-2 rounded-full bg-[#0E2C53] text-white font-bold  my-5"
              onClick={HandleDomesticData}
            >
              Get Started
            </button>
          </div>
        </form>

        {/* International Form */}
        <form
          id="International"
          className={`input-group ${isLoginFormVisible ? "hidden" : "transition  duration-1000  ease-linear"} `}
        >
          <div className="flex flex-col ">
            <div className="mb-4">
              <label
                htmlFor="destinationCountry"
                className="block text-gray-700 font-medium mb-2"
              >
                Destination Country
                <span className="text-blue-950">*</span>
              </label>
              <input
                type="text"
                id="destinationCountry"
                placeholder=" Enter Destination Country"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="originPincode"
                className="block text-gray-700 font-medium mb-2"
              >
                Origin/Shipper Pincode
                <span >*</span>
              </label>
              <input
                type="number"
                id="originPincode"
                placeholder=" Enter Origin Pincode"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="originCountry"
                className="block text-gray-700 font-medium mb-2"
              >
                Destination /Consignee Pincode
                <span className="">*</span>
              </label>
              <input
                type="number"
                id="originCountry"
                placeholder="Select Destination Country"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full"
              />
            </div>
            <button
              type="submit"
              className="submit-btn w-full py-2 rounded-full  bg-[#0E2C53] text-white font-bold my-5"
              onClick={HandleInternationalData}
            >
              Get Started
           </button>
          </div>
        </form>
      </div>
    </div>





  
  );
};

export default LoginForm;
