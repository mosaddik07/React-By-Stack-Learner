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
};
// Object To Array Function
const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...formfields[key] }));
};
const DynamicForm = () => {
  const formData = mapObjectToArray(formfields);
  return (
    <>
      <h1>Submit The form</h1>
      <form>
        {formData.map((item, index) => (
          <>
            <div key={index}>
              <label>{item.label}</label>
              <input type={item.type} name={item.name} placeholder={item.placeholder} />
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
