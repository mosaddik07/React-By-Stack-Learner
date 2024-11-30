import { useEffect, useState } from "react";
/**
 * todo: fetch and update state
 * todo: handle loading
 * todo:handle error
 */

const AnotherExample = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const [postError, setPostError] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  //todo: Users
  const fetchUsers = async () => {
    setUserLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setUserError("");
      setUserLoading(false);
    } catch (error) {
      setUserError("Server error occurred while fetching users");
      setUserLoading(false);
    }
  };

  //todo: Posts
  const fetchPosts = async () => {
    setPostLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setPostError("");
      setPostLoading(false);
    } catch (error) {
      setPostError("Server error occurred while fetching users");
      setPostLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "900px",
        display: "flex",
        gap: "5rem",
        justifyContent: "space-between",
        marginLeft: "20px",
      }}
    >
      <div>
        <h1>Users</h1>
        <hr />
        {userLoading && <img style={{ width: "60px" }} src="src/assets/images/loader2.svg" />}
        {userError && <h3>{userError}</h3>}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      <div>
        <h1>Posts</h1>
        <hr />
        {postLoading && <img style={{ width: "60px" }} src="src/assets/images/loader2.svg" />}
        {postError && <h3>{postError}</h3>}
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </div>
    </div>
  );
};

export default AnotherExample;
