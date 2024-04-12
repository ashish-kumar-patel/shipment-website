import React from "react";
import { MouseParallax } from "react-just-parallax";
import Airdelivery from "../Design/Airdelivery.png";
import Package from "../Design/Package.png";
import Cargo from "../Design/Cargo.png";
import Aeroplane from "../Design/Aeroplane.png";

function Homedesign() {
  return (
    <div>
      {/* Moving background boxes */}

      <MouseParallax strength={0.07}>
        <div className="absolute hidden lg:block    bottom-80  ">
          <img src={Aeroplane} alt="airdeleviry" height={300} width={300} />
        </div>

        <div className="absolute hidden lg:block   bottom-60   left-28 ">
          <img src={Airdelivery} alt="airdeleviry" height={300} width={200} />
        </div>

        <div className="absolute     left-60 hidden lg:block bottom-[40px]  ">
          <img src={Cargo} alt="cargo" height={300} width={200} />
        </div>

        {/* right side */}

        <div className="absolute  hidden lg:block     right-40  bottom-20  ">
          <img src={Package} alt="package" height={300} width={200} />
        </div>
      </MouseParallax>
    </div>
  );
}

export default Homedesign;
