import { useState } from "react";
const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = values;

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
        <div>
          <label htmlFor="group">Group</label>
          <select name="group" id="group" onChange={handleChange} value={group}>
            <option value="">Select Group</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
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
