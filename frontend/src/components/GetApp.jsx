import React from "react";
import phones from "../assets/phones.png";
import playStore from "../assets/android.svg";
import appStore from "../assets/apple.svg";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col" id="app">
      {/* <div className="mx-auto max-w-[1440px] relative w-full overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl bg-white"> */}
        <div className="mx-auto max-w-[1440px] relative overflow-hidden px-6 py-16 flex w-full flex-1 flex-col items-center justify-center gap-4 xl:max-w-[555px]">
          {/* <h2 className="bold-40 lg:bold-64 ">Get our app now!</h2> */}
          <h1 className="lg:bold-24 text-secondary">
          Elomuse Grandeur is a women’s fashion brand that creates phenomenal and timeless pieces for women who love to stand out. Established in 2020, Elomuse Grandeur is boundless when it comes to its source of inspiration, from Art and human experiences to the African culture.
          </h1>
          {/* <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            commodi sed dolores eaque. Possimus culpa quam ea debitis aliquid
            expedita ullam recusandae.
          </p> */}
          {/* <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row"> */}
            {/* <button className="flexCenter gap-x-3 btn-dark rounded-full !px-12 !py-3.5">
              <img src={appStore} alt="appStore" /> App Store
            </button> */}
            <button className="flexCenter gap-x-3 btn-secondary !px-12 !py-3.5">
              About Us
            </button>
          {/* </div> */}
        {/* </div> */}
        {/* <div className="flex flex-1 items-center justify-end">
          <img src={phones} alt="phones" width={550} height={870} />
        </div> */}
      </div>
    </section>
  );
};

export default GetApp;
