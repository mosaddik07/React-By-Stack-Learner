import { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log(user);
  }, []);

  return (
    <>
      <h1>User</h1>
      <ul>
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </ul>
      <h1>Email</h1>
      <ul>
        <ul>
          {user.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </ul>
    </>
  );
};
export default Fetch;
