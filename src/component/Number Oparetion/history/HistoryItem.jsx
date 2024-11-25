import PropTypes from "prop-types";

const HistoryItem = ({ historyItem, disabled }) => {
  return (
    <li key={historyItem.id} style={{ listStyle: "none" }}>
      <p style={{ marginBottom: "5px" }}>
        Operation: {historyItem.inputs.a} {historyItem.operation} {historyItem.inputs.b}
        ,Result:
        {" " + eval(`${historyItem.inputs.a} ${historyItem.operation} ${historyItem.inputs.b}`)}, Time:{" "}
        {historyItem.date.toLocaleString()}
      </p>
      <button
        onClick={() => handleRestoreBtn(historyItem)}
        disabled={disabled} //restoredHistory != null && restoredHistory.id === historyItem.id
      >
        restore
      </button>
    </li>
  );
};

HistoryItem.propType = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};
export default HistoryItem;
