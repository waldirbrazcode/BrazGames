import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const MathGame = () => {
  const [play, setPlay] = useState(false);
  const [mathQuestion, setMathQuestion] = useState(null);
  const [mathQuestionResult, setMathQuestionResult] = useState(null);
  const [score, setScore] = useState(-1);
  const [response, setResponse] = useState(null);
  const responseRef = useRef(null);

  function startGame() {
    setPlay(true);
    generateQuestion();
  }

  function generateQuestion() {
    const op = ["+", "-", "*", "/"];
    const randomOp = op[Math.floor(Math.random() * 4)];

    let n1 = 0;
    let n2 = 0;

    if (randomOp === "+") {
      n1 = Math.floor(Math.random() * 501);
      n2 = Math.floor(Math.random() * 601);

      let result = n1 + n2;

      setMathQuestion(`${n1} ${randomOp} ${n2}`);
      setMathQuestionResult(result);
    }

    if (randomOp === "-") {
      n1 = Math.floor(Math.random() * 501);
      n2 = Math.floor(Math.random() * 601);

      let result = n1 - n2;

      setMathQuestion(`${n1} ${randomOp} ${n2}`);
      setMathQuestionResult(result);
    }

    if (randomOp === "*") {
      n1 = Math.floor(Math.random() * 501);
      n2 = Math.floor(Math.random() * 21);

      let result = n1 * n2;

      setMathQuestion(`${n1} ${randomOp} ${n2}`);
      setMathQuestionResult(result);
    }

    if (randomOp === "/") {
      n1 = Math.floor(Math.random() * 501) + 1;
      n2 = Math.floor(Math.random() * 21) + 1;

      let result = n1 / n2;

      setMathQuestion(`${n1} ${randomOp} ${n2}`);
      setMathQuestionResult(result);
    }
  }

  function sendResponse(e) {
    if (e.key === "Enter") {
      let questionResponse = responseRef.current.value;
      setResponse(parseFloat(questionResponse));

      responseRef.current.value = null;
    }
  }

  function sendResponseButton() {
    let questionResponse = responseRef.current.value;
    setResponse(parseFloat(questionResponse));

    responseRef.current.value = null;
  }

  useEffect(() => {
    if (response === mathQuestionResult) {
      console.log("Correct");
      setScore(score + 1);
    } else {
      console.log("Incorrect!");
    }

    generateQuestion();
  }, [response]);

  if (play) {
    console.log(mathQuestion, mathQuestionResult, response);
    return (
      <>
        <div className="w-full h-full bg-amber-200 rounded-[20px]">
          <div className="flex p-4">
            <h1 className="text-3xl">Score: {score}</h1>
          </div>
          <div className="flex flex-col items-center gap-8 h-full">
            <div className="w-[50%] h-[40%] p-2 bg-amber-400 rounded-[20px] mt-[12%] flex justify-center items-center">
              <h1 className="text-[min(9vw,4em)]">{mathQuestion}</h1>
            </div>
            <div className="flex items-center gap-4">
              <input
                ref={responseRef}
                placeholder="Response"
                className="focus:outline-0 bg-amber-500 rounded-[8px] w-60 h-12 p-2 max-md:w-40"
                type="number"
                onKeyUp={(e) => sendResponse(e)}
              />
              <button
                onClick={() => sendResponseButton()}
                className="bg-amber-600 w-18 h-12 rounded-[8px]"
              >
                <FaAnglesRight className="m-auto" size={30} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <FaPlay size={80} color="white" onClick={() => startGame()} />
      </>
    );
  }
};

export default MathGame;
