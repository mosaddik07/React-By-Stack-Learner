import { useEffect, useState } from "react";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  const max = 10;

  function prevHandler() {
    setId(id - 1);
  }
  function nextHandler() {
    setId(id + 1);
  }

  useEffect(() => {
    if (id < 10) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    } else {
      console.log("Done");
    }
  }, [id]);

  console.log(user);
  const mainDivStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={mainDivStyle}>
      <h1>User Details - {id}</h1>
      {user && (
        <div style={{}}>
          <div style={{ alignItems: "center" }}>
            Name: {user.name}
            <br />
            UserName: {user.username} <br /> Email: {user.email} <br />
            Phone: {user.phone} <br />
            {/* Address: City: {user.address.city}, Street: {user.address.street} */}
          </div>
          <div>
            <button disabled={id == 1} onClick={prevHandler} style={{ margin: "15px" }}>
              Prev
            </button>
            <button disabled={id == max ? true : false} onClick={nextHandler}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleUser;
