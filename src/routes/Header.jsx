import { IoIosHome } from "react-icons/io";

const Header = () => {
  return (
    <div className="text-white  w-full flex gap-2 justify-between px-8 py-3 uppercase tracking-wider fixed top-0 left-0 z-50  backdrop-blur-sm bg-black bg-opacity-20 ">
      <div>
        <IoIosHome className="h-7 w-7 cursor-pointer" />
      </div>
      <div className="flex gap-4">
        {" "}
        <p className=" cursor-pointer ">SHowreel</p>
        <p className=" cursor-pointer">Contact</p>
        <p className=" ">|</p>
        <p className=" cursor-pointer">About</p>
        <p className=" cursor-pointer">Portfolio</p>
      </div>
    </div>
  );
};

export default Header;
