import useFetch from "./useFetch";
/**
 * todo: fetch and update state
 * todo: handle loading
 * todo:handle error
 */

const AnotherExample = () => {
  const users = useFetch("https://jsonplaceholder.typicode.com/users", (data) => {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
  });
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts", (data) => data.slice(0, 15));
  const email = useFetch("https://jsonplaceholder.typicode.com/comments", (data) => data.slice(0, 15));

  const userData = users.data?.map((data) => ({ name: data.name }));

  return (
    <div
      style={{
        // width: "900px",
        display: "flex",
        gap: "5rem",
        // justifyContent: "center",
        marginLeft: "10px",
      }}
    >
      <div>
        <h1>Users</h1>
        <hr />
        {users.loading && <img style={{ width: "60px" }} src="src/assets/images/loader2.svg" />}
        {users.error && <h3>{users.error}</h3>}
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        {posts.loading && <img style={{ width: "60px" }} src="src/assets/images/loader2.svg" />}
        {posts.error && <h3>{posts.error}</h3>}
        {posts.data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </div>
      <div>
        <h1>Email</h1>
        <hr />
        {email.loading && <img style={{ width: "60px" }} src="src/assets/images/loader2.svg" />}
        {email.error && <h3>{posts.error}</h3>}
        {email.data.map((post) => {
          return <li key={post.id}>{post.email}</li>;
        })}
      </div>
    </div>
  );
};

export default AnotherExample;
