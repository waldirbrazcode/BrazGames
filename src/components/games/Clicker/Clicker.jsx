import React, { useEffect, useRef, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

/*const Point = ({ x, y }) => {
  return (
    <div
      style={{
        width: "1.5em",
        height: "1.5em",
        borderRadius: "100%",
        backgroundColor: "brown",
        position: "absolute",
        top: x + "px",
        left: y + "px",
      }}
      //className={`relative top-[${x}px] left-[${y}px] w-6 h-6 rounded-full bg-amber-700`}
    ></div>
  );
};*/

const Clicker = () => {
  const [click, setClick] = useState(0);
  const [points, setPoints] = useState([]);

  const touchZoneRef = useRef();

  useEffect(() => {
    const computedStyleTouchZone = getComputedStyle(touchZoneRef.current);

    let timeToAppear = setInterval(() => {
      const point = {
        id: Math.random(),
        x: Math.random() * (parseFloat(computedStyleTouchZone.width) - 48),
        y: Math.random() * (parseFloat(computedStyleTouchZone.height) - 48),
      };

      console.log(point.x, point.y);

      setPoints([point]);
      //setPoints((prev) => [...prev, point]);
    }, 500);

    return () => clearInterval(timeToAppear);
  }, []);
  return (
    <>
      <div className="w-full h-full bg-amber-200 rounded-[20px]">
        <div className="flex rounded-t-[20px] p-4 justify-between bg-amber-300">
          <div className="text-4xl">{click}</div>
          <IoSettingsSharp size={40} />
        </div>

        <div ref={touchZoneRef} className="clicker-touchzone">
          {points.map((point) => (
            <div
              style={{
                width: "3em",
                height: "3em",
                borderRadius: "100%",
                backgroundColor: "brown",
                position: "relative",
                left: point.x + "px",
                top: point.y + "px",
              }}
              //className={`relative top-[${x}px] left-[${y}px] w-6 h-6 rounded-full bg-amber-700`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clicker;
