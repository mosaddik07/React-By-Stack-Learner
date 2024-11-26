import shortid from "shortid";
import Button from "../ui/Button";
import PropTypes from "prop-types";

const OperationSection = ({ handleOperations, handleClearOps }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleOperations("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleOperations("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleOperations("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleOperations("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleOperations("%"),
    },
    {
      id: shortid.generate(),
      text: "**",
      onClick: () => handleOperations("**"),
    },
    {
      id: shortid.generate(),
      text: "clear",
      onClick: () => handleClearOps(),
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <p>Operations</p>
      <div>
        {operations.map((ops) => {
          return <Button key={ops.id} text={ops.text} onClick={ops.onClick} />;
        })}
      </div>
    </div>
  );
};

OperationSection.propType = {
  handleOperations: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
