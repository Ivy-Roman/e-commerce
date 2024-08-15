import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaBasketShopping, FaCircleUser } from "react-icons/fa6";
// import images / svg's
import logo from "../assets/logo.svg";
import { ShopContext } from "../context/ShopContext";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";


const Header = ({ setShowLogin }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartAmount, token, setToken } = useContext(ShopContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <header className="fixed right-0 left-0 mx-auto z-10">
      <div className="max-padd-container bg-white">
        <div className="flexBetween py-4 max-xs:px-2">
          <div className="flexCenter gap-x-20">
            {/* logo */}
            <Link to={""} className="bold-24">
              <img src={logo} alt="" height={100} width={100} />
            </Link>
            {/* Navbar Desktop*/}
            <Navbar
              containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-10"}
            />
            {/* navbar mobile */}
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                  : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
              }`}
            />
          </div>
          {/* buttons */}
          <div className="flexCenter gap-x-6">
            {!menuOpened ? (
              <MdMenu
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
                onClick={toggleMenu}
              />
            )}
            <div className="flexBetween gap-x-2 sm:gap-x-5">
              <Link to={"/cart"} className={"flex"}>
                <FaBasketShopping className="text-[22px]" />
                <span
                  className={
                    getTotalCartAmount() > 0
                      ? "relative flexCenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"
                      : "w-2 h-2 rounded-full bg-transparent"
                  }
                ></span>
              </Link>

              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="btn-outline rounded-full"
                >
                  Login
                </button>
              ) : (
                <div className="group relative">
                  <FaCircleUser className="text-2xl" />
                  <ul className="bg-white shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
                    <li
                      onClick={() => navigate("/myorders")}
                      className="flexCenter gap-x-2 cursor-pointer"
                    >
                      <FiPackage className="text-[19px]"/>
                      <p>Orders</p>
                    </li>
                    <hr className="my-2" />
                    <li
                      onClick={logout}
                      className="flexCenter gap-x-2 cursor-pointer"
                    >
                      <TbLogout className="text-[19px]"/>
                      <p>logout</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
