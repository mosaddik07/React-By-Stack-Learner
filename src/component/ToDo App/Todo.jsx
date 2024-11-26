import CommentListItem from "./CommentListItem";
import TagListItem from "./TagListItem";
import TaskItemList from "./TaskItemList";

const task = {
  id: "unique_id_001",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae deserunt adipisci, sequi, hic, ",
  creactedAt: "2024-11-23T11:41:42.069Z",
  tags: [
    {
      id: "tag_001",
      text: "It's Done",
      icon: "✅",
    },
    {
      id: "tag_002",
      text: "It's Cancelled",
      icon: "❌",
    },
    {
      id: "tag_003",
      text: "It's Progress",
      icon: "➖",
    },
    {
      id: "tag_004",
      text: "Just Wrote It",
      icon: "⚪",
    },
  ],
  comments: [
    {
      id: "comment_id_001",
      user: {
        avatar: "👦",
        name: "Mosaddik",
        id: "user_id_001",
      },
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae deserunt adipisci, sequi, hic, voluptates distinctio assumenda asperiores ducimus explicabo obcaecati maiores. Numquam quo repellat aspernatur aperiam omnis iste incidunt.",
    },
  ],
  tasks: [
    {
      title: "Foggy Nelson",
      text: "Here to clean the streets of Hells Kitchen",
      status: "✅ Done",
    },
    {
      title: "Louis CK",
      text: "Here to clean the streets of Hells Kitchen",
      status: "❌ Cancelled",
    },
    {
      title: "Albert Einstein",
      text: "Here to clean the streets of Hells Kitchen",
      status: "➖ In Progress",
    },
    {
      title: "Albert Einstein",
      text: "Here to clean the streets of Hells Kitchen",
      status: "⚪ In Progress",
    },
  ],
};

//note: date calculation
function getDay(datestr) {
  const date = new Date(datestr).getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date];
}
function formateDate(datestr) {
  const date = new Date(datestr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const Todo = () => {
  return (
    <div style={{ padding: "29px" }}>
      <h1 style={{ textAlign: "center" }}>To Do</h1>
      <h2>
        {getDay(task.creactedAt)}, {formateDate(task.creactedAt)}
      </h2>
      <p>{task.subtitle}</p>
      <ul style={{ backgroundColor: "#ddd", padding: "10px", borderRadius: "20px", width: "620px" }}>
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <hr />
      <p>Notes Linked to people</p>
      <div>
        {task.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
      <ul>
        {task.tasks.map((task) => (
          <TaskItemList key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
