import { useState } from "react";
const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContact(values);
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={email} onChange={handleChange} />
        </div>
        <input
          type="submit"
          disabled={name === "" || email === "" ? true : false}
          value={"Create new contact"}
        />
      </form>
    </div>
  );
};
export default ContactForm;
