import PropTypes from "prop-types";
import NumberField from "../ui/NumberField";

const InputSection = ({ inputs, handleInputField }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#efefef",
        borderRadius: "0.10rem",
      }}
    >
      <h3 style={{ fontFamily: "Monospace", marginBottom: "1rem", textAlign: "center" }}>Inputs</h3>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between" }}>
        {" "}
        <NumberField name="a" value={parseInt(inputs.a)} onChange={handleInputField} />
        <NumberField name="b" value={parseInt(inputs.b)} onChange={handleInputField} />
      </div>
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({ a: PropTypes.number.isRequired, b: PropTypes.number.isRequired }).isRequired,
  handleInputField: PropTypes.func.isRequired,
};
export default InputSection;
