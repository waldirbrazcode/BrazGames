import { createContext, useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { BiMath } from "react-icons/bi";
import GameContainer from "../game-container/GameContainer";
import Games from "../games/Games";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  console.log(selectedGame);

  return (
    <>
      <div
        className={`${
          showNav ? "translate-y-0" : "-translate-y-full"
        } z-10 flex transition-transform duration-500 ease-in-out justify-between items-center p-10 h-[60px] bg-gradient-to-b from-green-400 to-emerald-600 fixed w-full`}
      >
        <div className="flex gap-6 pointer">
          <a href="#">
            <HiCursorClick
              onClick={() => setSelectedGame(props.games.Clicker)}
              size={50}
              className="bg-blur"
            />
          </a>
          <a href="#">
            <BiMath
              onClick={() => setSelectedGame(props.games.Math)}
              size={50}
              className="bg-blur"
            />
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
