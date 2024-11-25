/**
 *done: handle user input field
 *done: hanlde oparations
 *done: hanlde a list of histories
 *done: render history list
 *bug: restore the history
 */

import { useEffect, useState } from "react";
import NumberField from "./ui/NumberField";
import Button from "./ui/Button";
import InputSection from "./input/InputSection";
import OperationSection from "./operations/OperationSection";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = generateId();

const initialInputState = {
  a: 20,
  b: 10,
};

const SimpleApp = () => {
  //note: State Define
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

  useEffect(() => {
    if (restoredHistory != null) {
      handleOperations(restoredHistory.operation);
    }
  }, [inputState]);

  //note: input onchange function
  /**
  const handleInputFieldA = (e) => {
    // ei code shohoj. kintu code dublicate hocche.
    setInputState({
      ...inputState,
      a: parseInt(e.target.value),
    });
  };
  const handleInputFieldB = (e) => {
    setInputState({
      ...inputState, // prev state
      b: parseInt(e.target.value), // new state
    });
  };

  const handleInputFields = (key, value) => {
    //etao kothin. karon etar theke 1st tai valo chilo
    setInputState({
      ...inputState, //prev state
      [key]: value, // new state
    });
  };
  const handleInputFields2 = (inp) => {
    //etao valo
    setInputState({
      ...inputState, //previous state
      ...inp, // new state
    });
  };
   */

  const handleInputField = (e) => {
    // ei code choto kintu junior der jonno bujhte kothin
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  //note: handle clear button
  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };

  //note: handle operations
  const handleOperations = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("invalid Input");
      return;
    }
    /*const f = new Function("operation", `return ${inputState.a} ${operation} ${inputState.b}`);
    setResult(f(operation)); */ // eta kothin mone hote pare. kintu evabeo kora jay
    const result = `${inputState.a} ${operation} ${inputState.b}`;
    setResult(eval(result));

    if (!restoredHistory) {
      generateHistory(operation); //operation.result
    }
  };

  const generateHistory = (operation, result) => {
    const history = {
      id: getId.next().value,
      inputs: inputState,
      operation,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories]);
  };
  //note: handle restore button
  const handleRestoreBtn = (history) => {
    // setInputState(() => {
    //   return { ...history.inputs };
    // });
    // setRestoredHistory(history);
    alert("🚧 আমাদের সাইটের কাজ চলছে! আপনার ধৈর্যের জন্য ধন্যবাদ। 🚧");
    console.log("হিস্টোরি ব্যাক করতে পারি নাই");
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>Result: {result}</h1>
      <div>
        <InputSection inputs={inputState} handleInputField={handleInputField} />
        <OperationSection handleOperations={handleOperations} handleClearOps={handleClearOps} />
      </div>
    </div>
  );
};

export default SimpleApp;
