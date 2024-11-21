import React from "react";

const ButtonsControl = ({ handleButtonClick, buttonStates }) => {
  // State to manage the text for each button

  return (
    <div>
      <div className="flex-col gap-2 mt-20 rotate-180 ">
        {buttonStates.map((btn, index) => (
          <div key={index} className="mt-2">
            <button
              className={`text-center w-20 h-10 rotate-180 text-white ${
                btn === "call"
                  ? "bg-blue-500"
                  : btn === "waiting"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonsControl;
