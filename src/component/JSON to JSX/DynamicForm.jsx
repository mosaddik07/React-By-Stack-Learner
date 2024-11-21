import { useState } from "react";

const formfields = {
  name: {
    type: "text",
    label: "What is your name?",
    placeholder: "John Doe",
  },
  email: {
    type: "email",
    label: "What is your email?",
    placeholder: "example@gmail.com",
  },
  phone: {
    type: "tel",
    label: "What is your phone?",
    placeholder: "+88 000 000 ",
  },
  password: {
    type: "password",
    label: "What is your password?",
    placeholder: "******",
  },
  Birth: {
    type: "date",
    label: "What is your birth Date?",
    placeholder: "",
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };
    return acc;
  }, {});
};

// Object To Array Function
const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formfields));
  const formData = mapObjectToArray(formState);
  //submit form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value;
      return acc;
    }, {});
    console.log(values);
  };

  //input field onchange logic
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  };
  return (
    <>
      <h1>Submit The form</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <>
            <div key={index}>
              <label>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={item.value}
                onChange={handleChange}
              />
            </div>
          </>
        ))}
        <div>
          <button type="submit">Submit </button>
        </div>
      </form>
    </>
  );
};
export default DynamicForm;
