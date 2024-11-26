/**
 * done:(filter) ekhankar filter er kaj valo moto bujhi nai. filter kaj kore na. eta thik korte hobe.
 * bug: (search) search kaj kore nai. eta thiik kora lagbe
 */
import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredContact = [];

  if (filter === "All") {
    filteredContact = contacts;
  } else {
    filteredContact = contacts.filter((contact) => contact.group == filter);
  }

  if (searchTerm) {
    filteredContact = filteredContact.filter(
      (contact) => contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
    );
  }

  return (
    <div style={{ margin: "20px" }}>
      <div>
        Filter
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            {contacts.length > 0 ? (
              <>
                <th>Name</th>
                <th>Email</th>
                <th>Group</th>
              </>
            ) : (
              <th>Data Not Found</th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredContact.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
