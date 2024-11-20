const SingleDiv = (props) => {
  const label = props.label;
  return (
    <div
      style={{
        width: "300px",
        height: "40px",
        backgroundColor: "#fff",
        borderRadius: "30px",
        marginBottom: "10px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginTop: "8px",
        }}
      >
        {label}
      </h3>
    </div>
  );
};
export default SingleDiv;
