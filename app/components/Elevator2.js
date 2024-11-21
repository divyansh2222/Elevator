

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

const Elevator2 = ({ value }) => {
  const [floor, setFloor] = useState(0);

  useEffect(() => {
    // Simulate lift moving to the target floor
    const timeout = setTimeout(() => {
      setFloor(value); // Set the floor based on the input value
    }, 5);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [value]); // Re-run effect when `value` changes

  return (
    <div className="flex flex-col pl-8 items-center">
      <div className="flex  border h-[470px] mt-20 relative gap-5">
        {/* Lift */}
        <div
          id="lift2"
          className="absolute lofr transition-all duration-500 ease-in-out"
          style={{
            bottom: `${floor * 50}px`,// Adjusting position dynamically
          }
        }
        >
          <p>l2</p>
          <Image
            src="/icons8-elevator.svg"
            width={40}
            height={40}
            alt="Elevator Icon"
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default Elevator2;
