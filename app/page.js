"use client";

import React, { useState } from "react";
import Floor from "./components/Floor";
import Elevator from "./components/Elevator";
import Elevator2 from "./components/Elevator2";
import Elevator3 from "./components/Elevator3";
import Elevator4 from "./components/Elevator4";
import Elevator5 from "./components/Elevator5";
import ButtonsControl from "./components/ButtonsControl";

const Page = () => {
  const [value, setValue] = useState(0); // Target floor
  const [elevatorPositions, setElevatorPositions] = useState([0, 0, 0, 0, 0]); // Positions of elevators
  const [buttonStates, setButtonStates] = useState(Array(10).fill("call")); // Button states
const handleButtonClick = (index) => {
  const distances = elevatorPositions.map((pos) => Math.abs(pos - index));
  const closestElevator = distances.indexOf(Math.min(...distances));
  const newPositions = [...elevatorPositions];
  newPositions[closestElevator] = index;

  // Change the button state to 'waiting' after a click
  setButtonStates((prevStates) =>
    prevStates.map((state, i) => (i === index ? "waiting" : state))
  );

  setTimeout(() => {
    // Change the button state to 'arrived' after a delay
    setButtonStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? "arrived" : state))
    );

    setElevatorPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[closestElevator] = index;
      return updatedPositions;
    });

    setTimeout(() => {
      // Change the button state back to 'call' after another delay
      setButtonStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? "call" : state))
      );
    }, 2000);
  }, 2000);

  setValue(index);
};

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
  {/* Header Section */}
  <div className="flex justify-center items-center mb-8">
    <h2 className="text-3xl font-bold text-violet-700">Exercise Elevator</h2>
  </div>

  {/* Main Content Section */}
  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-yellow-300 p-6 rounded-lg shadow-lg">
    {/* Floor Component */}
    <div className="bg-teal-400 p-4 rounded-lg shadow-md">
      <Floor />
    </div>

    {/* Elevators Section */}
    <div className="flex justify-center items-center gap-5 bg-violet-400 p-4 rounded-lg shadow-md">
      <Elevator value={elevatorPositions[0]} /> {/* First elevator */}
      <Elevator2 value={elevatorPositions[1]} /> {/* Second elevator */}
      <Elevator3 value={elevatorPositions[2]} /> {/* Third elevator */}
      <Elevator4 value={elevatorPositions[3]} /> {/* Fourth elevator */}
      <Elevator5 value={elevatorPositions[4]} /> {/* Fifth elevator */}
    </div>

    <div className="bg-teal-400 p-4 rounded-lg shadow-md">
    <ButtonsControl
      handleButtonClick={handleButtonClick}
      buttonStates={buttonStates}
    />
  </div>
  </div>

  {/* Buttons Section */}
 
</div>

    </>
  );
};

export default Page;
