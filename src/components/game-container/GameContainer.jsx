import React, { useContext, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Games from "../games/Games";
import Clicker from "../games/Clicker/Clicker";
import MathGame from "../games/Math/Math";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const GameContainer = (props) => {
  const fullscreen = useFullScreenHandle();
  if (props.game === "clicker") {
    return (
      <>
        <div className="game-container select-none">
          <div className="instructions def-text font-[Lato]">
            <h2 className="text-4xl">Instructions</h2>

            <h3>
              <ul className="list-decimal text-2xl list-inside">
                <li>Click on the game you want to play on game bar</li>
                <li>Have fun!</li>
              </ul>
            </h3>

            <button
              onClick={fullscreen.enter}
              className="text-2xl bg-neutral-900 p-3 rounded-[10px]"
            >
              Enter Fullscreen
            </button>
          </div>

          <FullScreen className="game" handle={fullscreen}>
            <div className="game-ui">
              <Clicker></Clicker>
            </div>
          </FullScreen>
        </div>
      </>
    );
  }
  if (props.game === "math") {
    return (
      <>
        <div className="game-container select-none">
          <div className="instructions def-text font-[Lato]">
            <h2 className="text-4xl">Instructions</h2>

            <h3>
              <ul className="list-decimal text-2xl list-inside">
                <li>Click on the game you want to play on game bar</li>
                <li>Have fun!</li>
              </ul>
            </h3>

            <button
              onClick={fullscreen.enter}
              className="text-2xl bg-neutral-900 p-3 rounded-[10px]"
            >
              Enter Fullscreen
            </button>
          </div>

          <FullScreen className="game" handle={fullscreen}>
            <div className="game-ui">
              <MathGame></MathGame>
            </div>
          </FullScreen>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="game-container select-none">
          <div className="instructions def-text font-[Lato]">
            <h2 className="text-4xl">Instructions</h2>

            <h3>
              <ul className="list-decimal text-2xl list-inside">
                <li>Click on the game you want to play on game bar</li>
                <li>Have fun!</li>
              </ul>
            </h3>
          </div>

          <div className="game">
            <div className="game-ui"></div>
          </div>
        </div>
      </>
    );
  }
};

export default GameContainer;
