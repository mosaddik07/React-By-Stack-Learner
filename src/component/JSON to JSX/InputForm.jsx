import { useState } from "react";

const InputForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const hanldeSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0]).value;
    // console.log(e.target[1]).value;
    // console.log(e.target[2].value);
    console.log(formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    // console.log(formState);
  };

  return (
    <>
      {/* <h1 style={{ fontFamily: "cursive" }}>Submit your Form</h1> */}
      {/* <form onSubmit={hanldeSubmit}>
        <div>
          <label>What is your name?</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your Email?</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your Phone No?</label>
          <input
            type="phone"
            name="phone"
            placeholder="+88017993477**"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit </button>
        </div>
      </form> */}
    </>
  );
};
export default InputForm;
