import { useState } from "react";
import CounterController from "./CounterController";
import useCounter from "./useCounter";

const AppHook = () => {
  const {
    counter: counter1,
    handleInc: handleInc1,
    handleDec: handleDec1,
  } = useCounter({ initial: 10, min: 10, max: 20 });
  const {
    counter: counter2,
    handleInc: handleInc2,
    handleDec: handleDec2,
  } = useCounter({ initial: 20, min: 20, max: 30 });
  const counter = useCounter({});

  return (
    <>
      <h1>App Component</h1>
      {/* //todo: counter 1 */}
      <CounterController count={counter1} handleInc={handleInc1} handleDec={handleDec1} />

      {/* //todo: counter 2 */}
      <CounterController count={counter2} handleInc={handleInc2} handleDec={handleDec2} />

      {/*//todo: counter 3  */}
      <CounterController
        count={counter.counter}
        handleInc={counter.handleInc}
        handleDec={counter.handleDec}
      />
    </>
  );
};
export default AppHook;
