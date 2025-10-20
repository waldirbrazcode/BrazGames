import React from "react";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col justify-center pt-54 gap-22">
        <div className="flex justify-center px-10">
          <h2 className="max-w-4xl def-text font-[BBH Sans Bogle] font-bold text-center text-[min(12vw,5rem)]">
            Free Games to play and have fun
          </h2>
        </div>

        <div className="bg-emerald-600 w-full h-[52vh] mask-y-from-75% mask-radial-at-bottom mask-radial-from-5%"></div>
      </div>
    </>
  );
};

export default Landing;
