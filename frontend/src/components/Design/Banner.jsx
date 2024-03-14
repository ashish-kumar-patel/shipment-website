import React from "react";
import { MouseParallax } from "react-just-parallax";
function Homedesign() {
  return (
    <div>
      {/* Moving background colored circle balls */}

      <MouseParallax strength={0.07}>
        <div className="absolute hidden lg:block  left-20  bottom-80  rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>

        <div className="absolute hidden lg:block   bottom-40 -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>

        <div className="absolute     left-60 hidden lg:block bottom-[160px] rotate-[70deg] ">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b  from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>

        {/* right side */}

        <div className="absolute hidden lg:block  bottom-20  right-60  rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>

        <div className="absolute  hidden lg:block  bottom-96   right-40  ">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>

        <div className="absolute  hidden lg:block bottom-40  right-80     -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out `}
          />
        </div>
      </MouseParallax>
    </div>
  );
}

export default Homedesign;
