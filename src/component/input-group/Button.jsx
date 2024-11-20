const variant = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#cddc39",
    color: "#fff",
  },
  info: {
    backgroundColor: "#03a9f4",
    color: "#fff",
  },
};

const sizes = {
  small: {
    width: "100px",
    height: "30px",
  },
  medium: {
    width: "130px",
    height: "45px",
  },
  large: {
    width: "140px",
    height: "60px",
  },
};

const Button = (props) => {
  const label = props.label;
  const type = props.type;

  const userVariant = variant[props.variant];
  const usersize = sizes[props.size];

  return (
    <button
      type={type}
      style={{
        ...usersize,
        border: "none",
        outline: "none",
        cursor: "pointer",
        borderRadius: "3px",
        marginRight: "8px",
        ...userVariant,
      }}
    >
      {label}
    </button>
  );
};
export default Button;
