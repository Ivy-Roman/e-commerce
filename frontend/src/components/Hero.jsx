import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[811px] w-full" id="home">
        <div className="relative top-24 xs:top-72">
          {/* <h4 className="uppercase medium-18 tracking-wider">
            Fashion Essentials
          </h4> */}
          <h2 className="h3 text-secondary capitalize max-w-[40rem]">
           <p></p><br />
           <p></p><br /><br />
           <p></p>
           The Reminisce Collection
          </h2>
          <p className="my-5 max-w-[33rem]">
            
          </p>
          {/* buttons */}
          <div className="flex items-center gap-x-4">
            <Link
              to={""}
              className="inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl"
            >
              {/* <div className="regular-14 leading-tight pl-4">
                <h5 className="uppercase font-bold">New Arrivals</h5>
                <p className="regular-14 mt-1">10% Off</p>
              </div>
              <div className="bg-primary h-10 w-10 p-1 rounded-full flexCenter">
                <FaArrowRight />
              </div> */}
            </Link>
            <Link
              to={""}
              className="inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl"
            >
              <div className="regular-14 leading-tight pl-4">
                <h5 className="uppercase font-bold">Shop Now</h5>
                {/* <p className="regular-14 mt-1">50% Off</p> */}
              </div>
              <div className="bg-primary h-10 w-10 p-1 rounded-full flexCenter text-tertiary">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
