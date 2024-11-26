import { useState } from "react";
import ContactForm from "./ContactForm";
import Table from "./Table";

const StateLifting = () => {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact) => {
    setContacts([].concat(contacts, contact));
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
};
export default StateLifting;
