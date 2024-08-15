import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="max-padd-container flexBetween py-2">
      <img src={logo} alt="" height={100} width={100} />
      <img
        src={profile}
        alt=""
        height={46}
        width={46}
        className="rounded-full"
      />
    </div>
  );
};

export default Navbar;
