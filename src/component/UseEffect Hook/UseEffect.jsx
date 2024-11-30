import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (count == 5) {
      setLock(true);
    }
    // console.log("count", count);
  }, [count]);

  // console.log("Count ->", count, "Lock ->", lock);

  return (
    <div>
      {/** style={{ margin: "200px" }}*/}

      <h1>{count}</h1>
      <button
        disabled={lock}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add {lock && "Locked"}
      </button>
    </div>
  );
};
export default UseEffect;
