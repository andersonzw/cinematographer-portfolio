import { useContext } from "react";
import { IoIosHome } from "react-icons/io";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollContext } from "../util/ScrollContext";

const Header = () => {
  const { showreelRef, heroRef, scrollToRef } = useContext(ScrollContext);
  const location = useLocation();

  const clickHandler = (ref) => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      scrollToRef(ref);
    }
  };

  return (
    <>
      <section className="text-white w-full flex gap-2 justify-between  px-8 py-3 uppercase tracking-wider fixed top-0 left-0 right-0 z-50  backdrop-blur-sm bg-black bg-opacity-20 ">
        <IoIosHome
          className="h-7 w-7 cursor-pointer"
          onClick={() => clickHandler(heroRef)}
        />

        <div className="flex gap-4">
          <p
            className=" cursor-pointer "
            onClick={() => clickHandler(showreelRef)}
          >
            SHowreel
          </p>
          <p className="cursor-context-menu ">|</p>
          <a href="/about" className=" cursor-pointer">
            About
          </a>
          <a href="/portfolio" className=" cursor-pointer">
            Portfolio
          </a>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
