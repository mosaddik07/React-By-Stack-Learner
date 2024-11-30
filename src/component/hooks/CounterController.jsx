const CounterController = ({ count, handleInc, handleDec }) => {
  return (
    <div>
      <button onClick={handleDec}>-</button>
      <span style={{ margin: "10px", fontSize: "59px" }}>{count}</span>
      <button onClick={handleInc}>+</button>
    </div>
  );
};
export default CounterController;
