import { useState } from "react";
import Layout from "../layout/Layout";
const Count = () => {
  let [count, setCount] = useState(0);
  let [encrementValue, setEncrementValue] = useState(10);
  let [decrementValue, setdecrementValue] = useState(5);
  function encrement() {
    setCount(count + encrementValue);
  }

  function descrement() {
    setCount(count - decrementValue);
  }
  return (
    <>
      <Layout>
        <h1>Count: {count}</h1>
        <button onClick={encrement}>encrement + </button>
        <button onClick={descrement}>descrement - </button>
      </Layout>
    </>
  );
};
export default Count;
