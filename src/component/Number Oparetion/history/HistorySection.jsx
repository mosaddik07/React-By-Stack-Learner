import HistoryItem from "./history/HistoryItem";
import PropTypes from "prop-types";

const HistorySection = ({ histories, restoredHistory }) => {
  return (
    <div>
      <h3 style={{ marginTop: "35px" }}>HISTORY</h3>
      {histories.length === 0 ? (
        <p>There is no history</p>
      ) : (
        <div>
          <ul>
            {histories.map((historyItem) => (
              <HistoryItem
                key={historyItem.id}
                historyItem={historyItem}
                disabled={restoredHistory === histories.id}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

HistoryItem.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }),
    })
  ),
  restoredHistory: PropTypes.number.isRequired,
};

export default HistorySection;
