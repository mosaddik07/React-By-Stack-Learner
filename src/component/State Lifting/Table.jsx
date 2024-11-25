const Table = ({ contacts }) => {
  return (
    <div style={{ margin: "20px" }}>
      <table>
        <thead>
          <tr>
            {contacts.length > 0 ? (
              <>
                <th>Name</th>
                <th>Email</th>
              </>
            ) : (
              <th>Data Not Found</th>
            )}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
