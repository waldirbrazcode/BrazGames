import React from "react";

const Landing = () => {
  return (
    <>
      <div className="flex justify-between relative top-24 pl-12 pt-8 gap-12">
        <div>
          <h2 className="def-text font-[Lato] font-bold text-[50px]">
            Welcome to BrazGames!
          </h2>

          <h3 className="def-text font-[Lato] font-bold text-[30px]">
            Find cool games to play
          </h3>

          <h4 className="def-text font-[Lato] font-bold text-[20px] mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            perspiciatis inventore similique dolorum soluta fuga sit,
            perferendis sapiente officiis corrupti rerum reprehenderit at.
            Laborum incidunt sed maxime fugiat alias dolor?
          </h4>
        </div>

        <div className="bg-gray-800 w-[50vw] h-[700px] rounded-l-2xl p-6">
          <h1 className="def-text font-[Roboto] text-[20px] mb-2">
            Update Panel
          </h1>
          <p className="def-text font-[Roboto]">[2025-10-17] Site release!</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
