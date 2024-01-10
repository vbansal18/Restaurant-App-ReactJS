import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  }, [myNum]); // Include myNum in the dependency array to only trigger effect on myNum changes

  const handleIncrement = () => {
    // Limit increment to a maximum value, e.g., 10
    if (myNum < 10) {
      setMyNum(myNum + 1);
    }
  };

  const handleDecrement = () => {
    // Limit decrement to a minimum value, e.g., 0
    if (myNum > 0) {
      setMyNum(myNum - 1);
    }
  };

  return (
    <div className="center_div">
      <p>{myNum}</p>
      <div className="button2" onClick={handleIncrement}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div className="button2" onClick={handleDecrement}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>
    </div>
  );
};

export default UseEffect;

