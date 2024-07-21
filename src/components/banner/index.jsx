import React from "react";

const Banner = (props) => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(247,153,191,.7),rgb(252,214,255,.7))]">
      <div className="container ">
        <p className="">
          <span className="hidden sm:inline">
            Refer now and get upto Rs 15000 -
          </span>{" "}
          <a href="#" className="underline underline-offset-4 font-medium">
            Explore 
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
