const InputGroup = (props) => {
  console.log(props);
  const label = props.label;
  const type = props.type;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <label
        style={{
          fontFamily: "Arial",
          color: "#424242",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        htmlFor={type}
      >
        {label}
      </label>
      <input
        type={type}
        id="name"
        style={{
          padding: "0.5rem 1rem",
          outline: "none",
          border: "1px solid #ddd",
          borderRadius: "0.15rem",
          fontFamily: "monospace",
          fontSize: "0.9rem",
          color: "#666",
        }}
      />
    </div>
  );
};

export default InputGroup;
