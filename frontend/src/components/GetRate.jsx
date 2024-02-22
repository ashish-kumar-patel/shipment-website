import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight,} from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1707904437338-f43375a10d8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707892656889-e7dc1edf54e1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707638121146-c0a0178a3e47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682535209719-839f625f8770?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707733005801-13548a5f36ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const timeoutRef = useRef()
  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(images.length);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(1);
    }
  };

  const handleSlide = () => {
    if (currentIndex < images.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleSlide();
    }, 6000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);
  return (
    <div className=" w-full  mt-60   ">
      <div>
        <h2 className=" text-center font-bold text-5xl   mt-8 mb-4">
          Get a Quick Shippment Rate
        </h2>
        <p className=" text-center  ">
          Competitive shipping rates designed for your needs
        </p>
      </div>

      <div className=" flex w-full mt-11   pl-44">
        <div className="  bg-slate-50 rounded-2xl   w-1/3  min-w-80   shadow-2xl shadow-black drop-shadow-xl">
          <form>
            <p className=" ml-8  pt-6 ">
              All <span className=" text-red-600">(*) </span> Field are
              mandatory
            </p>
            <div className=" ml-8  mt-1 mr-8">
              <label
                htmlFor="originCountry"
                className=" block text-gray-700 font-medium mb-2"
              >
                Origin Country
                <span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                id="originCountry"
                placeholder="Origin Country"
                className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full "
              />
            </div>
            <div className=" ml-8  mt-3 mr-8">
              <label
                htmlFor="destinationCountry"
                className="block text-gray-700 font-medium mb-2"
              >
                Destination Country
                <span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                id="destinationCountry"
                placeholder="Destination Country"
                className="shadow appearance-none border rounded  py-2   px-3 leading-tight focus:outline-none focus:shadow-outline  w-full"
              />
            </div>
            <div className=" flex  mb-4  ml-8  mt-3   justify-between  mr-8">
              <div className=" ">
                <label
                  htmlFor="weight"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Weight
                  <span className=" text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="weight"
                  placeholder="Weight"
                  className="shadow appearance-none border rounded py-2     px-3 leading-tight focus:outline-none "
                />
              </div>
              <div>
                <label
                  htmlFor="unit"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Unit
                  <span className="text-red-600">*</span>
                </label>
                <select
                  id="unit"
                  className="appearance-none border border-gray-200 text-gray-700 py-2.5  pr-14 pl-5   rounded leading-tight focus:outline-none focus:bg-white  shadow  "
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
            <p className=" ml-8 ">
              * The above shownfreight Charges is based on standard {" "}
              <span className=" ml-3">
              
                Calculations. For best price contact Us
              </span>
            </p>
            <div className=" flex   pb-10 ml-11  mt-8">
              <button
                className="bg-green-600 hover:bg-green-700 text-white   font-medium py-2 px-6 rounded focus:outline-none focus mr-8  "
              >
               
                Reset
              </button>
              <button
                className=" bg-green-600 hover:bg-green-700
           text-white font-medium py-2 px-8 rounded focus:outline-none focus"
              >
                Get Rate
              </button>
            </div>
          </form>
        </div>
        <div className=" mx-auto w-1/3  relative min-w-96  h-400px  overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
          <button
            onClick={previous}
            className={`absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md ${
              currentIndex === 1 ? "opacity-50" : "opacity-100"
            }`}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-2xl font-bold text-gray-500"
            />
          </button>

          <button
            onClick={forward}
            className={`absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md ${
              currentIndex === images.length ? "opacity-50" : "opacity-100"
            }`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-2xl font-bold text-gray-500"
            />
          </button>

          <div className="relative h-80 w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 w-full   transition-transform duration-500 transform ${
                  currentIndex === index + 1  ? "opacity-100 translate-x-0"  : "opacity-0 translate-x-full"
                }`}
              >
                <img
                  src={image}
                  alt="image"
                  className="rounded-sm  object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
