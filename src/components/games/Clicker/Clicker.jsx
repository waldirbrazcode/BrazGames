import React, { useEffect, useRef, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { FaPlay } from "react-icons/fa";

const Clicker = () => {
  const [click, setClick] = useState(0);
  const [points, setPoints] = useState([]);
  const [appearTime, setAppearTime] = useState(1000);
  const [time, setTime] = useState(10000);
  let [timeLeft, setTimeLeft] = useState(time / 1000);

  const touchZoneRef = useRef();

  useEffect(() => {
    let decrementTimer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(decrementTimer);
    }

    return () => clearInterval(decrementTimer);
  }, [timeLeft]);

  useEffect(() => {
    const computedStyleTouchZone = getComputedStyle(touchZoneRef.current);

    let timeToAppear = setInterval(() => {
      const point = {
        id: Math.random(),
        x:
          Math.random() *
          (parseFloat(computedStyleTouchZone.width) -
            parseInt(computedStyleTouchZone.width) * 0.08),
        y:
          Math.random() *
          (parseFloat(computedStyleTouchZone.height) -
            parseInt(computedStyleTouchZone.width) * 0.08),
      };

      console.log(point.x, point.y);

      setPoints([point]);
    }, appearTime);

    if (timeLeft <= 0) {
      clearInterval(timeToAppear);
    }

    return () => clearInterval(timeToAppear);
  }, [timeLeft]);

  function restartGame() {
    setTimeLeft(time / 1000);
    setClick(0);
    setPoints([]);
  }

  function startGame() {
    setPlay(true);
    restartGame();
  }

  const [play, setPlay] = useState(false);

  if (play) {
    return (
      <>
        <div className="w-full h-full bg-amber-200 rounded-[20px]">
          <div className="flex rounded-t-[20px] p-4 justify-between bg-amber-300">
            <div className="text-4xl">{click}</div>
            <div className="text-3xl">{timeLeft}s</div>
            <div className="config-clicker">
              <VscDebugRestart
                className="pointer"
                size={40}
                onClick={() => restartGame()}
              />
            </div>
          </div>

          <div ref={touchZoneRef} className="clicker-touchzone">
            {timeLeft <= 0 ? (
              <div className="flex justify-center items-center w-[25%] h-[30%] ml-auto mr-auto relative top-[30%] bg-amber-300 rounded-[15px] p-2 text-3xl max-lg:text-2xl">
                Your score: {click}
              </div>
            ) : (
              points.map((point) => (
                <div
                  key={point.id}
                  onClick={() => setClick((prev) => prev + 1)}
                  style={{
                    width: "3em",
                    height: "3em",
                    borderRadius: "100%",
                    backgroundColor: "brown",
                    position: "relative",
                    left: point.x + "px",
                    top: point.y + "px",
                  }}
                ></div>
              ))
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <FaPlay
          ref={touchZoneRef /*i need refer to this or it crashes */}
          onClick={() => startGame()}
          size={80}
          color="white"
        />
      </>
    );
  }
};

export default Clicker;
