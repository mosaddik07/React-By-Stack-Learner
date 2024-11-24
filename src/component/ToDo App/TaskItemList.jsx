const TaskItemList = ({ task }) => {
  return (
    <li
      key={task.id}
      style={{
        listStyle: "none",
        backgroundColor: "#90b082",
        width: "400px",
        padding: "20px",
        color: "#000",
        borderRadius: "30px",
      }}
    >
      {<h3 style={{ marginBottom: "2px" }}> {task.title}</h3>}
      <p style={{ marginBottom: "2px" }}>
        <small>{task.status}</small>
      </p>
      <p>{task.text}</p>
    </li>
  );
};
export default TaskItemList;
