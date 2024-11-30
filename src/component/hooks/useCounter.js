import { useState } from "react";

const useCounter = ({ initial = 0, min = 0, max = 10 }) => {
  const [counter, setCounter] = useState(initial);

  const handleInc = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleDec = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    handleInc,
    handleDec,
  };
};
export default useCounter;
