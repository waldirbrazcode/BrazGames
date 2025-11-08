import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import GameContainer from "./components/game-container/GameContainer";
import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { BiMath } from "react-icons/bi";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <>
      <div
        className={`${
          showNav ? "translate-y-0" : "-translate-y-full"
        } z-10 flex transition-transform duration-500 ease-in-out justify-between items-center p-10 h-[60px] bg-gradient-to-b from-green-400 to-emerald-600 fixed w-full`}
      >
        <div className="flex gap-6 pointer">
          <HiCursorClick
            onClick={() => setSelectedGame("clicker")}
            size={50}
            className={selectedGame === "clicker" ? "border-b-2" : ""}
          />
          <BiMath
            onClick={() => setSelectedGame("math")}
            size={50}
            className={selectedGame === "math" ? "border-b-2" : ""}
          />
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
      <Landing />
      <GameContainer game={selectedGame} />
    </>
  );
}

export default App;
