import react from "react";

function Admin() {
  const HandleAddDetail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="    bg-slate-300  py-32  ">
      <div className=" md:container md:mx-auto  rounded-xl  bg-violet-100 min-h-[80vh] md:w-[55%]   overflow-hidden  top-11 mx-2 ">
        <h1 className="font-bold text-center text-3xl  bg-violet-950 text-white  py-4 ">
          Tracking Detail
        </h1>

        <div className=" md:my-7   md:mx-5   mx-8 my-7">
          <form className="space-y-4 md:space-y-6  ">
            <div className=" flex   flex-col md:flex-row   md:justify-between md:mr-9  space-y-3  md:space-y-0 ">
              <div className=" md:ml-[70px]  flex flex-col md:flex-row md:items-center">
                <label
                  htmlFor="awb-no"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  AWB No:-
                </label>
                <input
                  type="number"
                  id="awb-no"
                  placeholder="AWB No"
                  className="  md:w-60    shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col md:flex-row  md:items-center">
                <label
                  htmlFor="date"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  Date:-
                </label>

                <input
                  type="date"
                  id="date"
                  className="   md:w-52 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className=" flex   flex-col md:flex-row  md:items-center ">
              <label
                htmlFor="consignee-name"
                className="  text-gray-500 font-medium  "
              >
                Consignee Name :-
              </label>

              <input
                type="text"
                id="consignee-name"
                placeholder="Consignee Name"
                className=" md:w-3/4 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  md:ml-6"
              />
            </div>

            <div className=" flex   flex-col md:flex-row  md:items-center ">
              <label
                htmlFor="receiver-name"
                className=" text-gray-500  font-medium  "
              >
                Receiver Name :-
              </label>

              <input
                type="text"
                id="receiver-name"
                placeholder="Receiver Name"
                className=" md:w-3/4 shadow appearance-none border rounded py-2  px-3 leading-tight focus:outline-none focus:shadow-outline  md:ml-10"
              />
            </div>

            <div className=" flex   flex-col md:flex-row   justify-between md:mr-9 space-y-4   md:space-y-0">
              <div className=" flex flex-col md:flex-row">
                <label
                  htmlFor="origin-country"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  Origin Country:-
                </label>
                <input
                  type="text"
                  id="origin-country"
                  placeholder="Origin"
                  className="shadow  md:ml-11 appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="origin-country"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  Origin City:-
                </label>
                <input
                  type="text"
                  id="origin-city"
                  placeholder="Origin City"
                  className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className=" flex   flex-col md:flex-row   justify-between md:mr-9 space-y-4  md:space-y-0">
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="destination-country"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  Destination Country :-
                </label>
                <input
                  type="text"
                  id="destination-country"
                  placeholder="Destination"
                  className="shadow   appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="destination-city"
                  className=" text-gray-500 font-medium md:text-right mb-1 md:mb-0 pr-4"
                >
                  Destination City:-
                </label>
                <input
                  type="text"
                  id="origin-city"
                  placeholder="Destination-city"
                  className="shadow   appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className=" flex justify-center   ">
              <button
                onClick={HandleAddDetail}
                className="bg-violet-800 rounded-full hover:bg-violet-950 px-20   mt-6 disabled:bg-violet-500  py-3 text-sm font-bold text-white"
                type="submit"
              >
                Add Detail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin
