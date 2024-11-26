const CommentListItem = ({ comment }) => (
  <div
    key={comment.id}
    style={{
      width: "620px",
      backgroundColor: "#c3d0d6",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "10px",
      color: "#000",
    }}
  >
    <h4 style={{ marginBottom: "5px", textAlign: "center" }}>
      {comment.user.avatar} {comment.user.name}
    </h4>
    <p>{comment.text}</p>
  </div>
);
export default CommentListItem;
