import { useState } from "react";
import { GiTicTacToe } from "react-icons/gi";
import { HiCursorClick } from "react-icons/hi";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { BiMath } from "react-icons/bi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div
        className={`${
          showNav ? "translate-y-0" : "-translate-y-full"
        } z-10 flex transition-transform duration-500 ease-in-out justify-between items-center p-10 h-[60px] bg-gradient-to-b from-green-400 to-emerald-600 fixed w-full`}
      >
        <div className="flex gap-6 pointer">
          <a href="#">
            <GiTicTacToe size={50} className="bg-blur" />
          </a>
          <a href="#">
            <HiCursorClick size={50} className="bg-blur" />
          </a>
          <a href="#">
            <BiMath size={50} className="bg-blur" />
          </a>
        </div>

        <h2 className="font-[Lato] font-bold text-[20px]">BrazGames</h2>
      </div>

      <MdOutlineKeyboardDoubleArrowUp
        onClick={() => setShowNav(!showNav)}
        color="#FFFFFF"
        size={30}
        className={`${
          showNav ? "translate-y-20" : "translate-y-0"
        } z-20 fixed transition-transform duration-500 ease-in-out font-extrabold pointer text-[20px] left-[50%] translate-x-[-50%] bg-gradient-to-b from-emerald-600 to-green-400 rounded-b-[5px]`}
      />
    </>
  );
};

export default Navbar;
