import React, { useContext, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const GameContainer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="game-container">
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
          <div className="game-ui">{props.game}</div>
        </div>
      </div>
    </>
  );
};

export default GameContainer;
