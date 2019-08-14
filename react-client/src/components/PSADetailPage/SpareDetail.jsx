import React from "react";
import PropTypes from "prop-types";
import makeSpare from "../../../../js-client/models/makeSpare";
import makeBroke from "../../../../js-client/models/makeBroke";

const SpareDetail = ({ currentPSA, refreshSpares, onSpareStatusClick }) => {
  console.log(currentPSA);
  let y = ["y1", "y2", "y3", "y4"]
    .filter(y => currentPSA[y])
    .join(",")
    .toLocaleUpperCase();
  return (
    <div>
      <h1 className="details">Serial: {currentPSA.serial}</h1>
      <h3 className={`details`}>Location: {currentPSA.location}</h3>
      {currentPSA.coil.length > 1 && (
        <div className="details">
          {currentPSA.coil} SCR on {y}
        </div>
      )}
      <div className="details">Comments: {currentPSA.comments}</div>
      {currentPSA.spare === 0 && (
        <div
          className="backButton details"
          onClick={() => {
            makeSpare(currentPSA.serial)
              .then(() => {
                refreshSpares();
                onSpareStatusClick();
              })
              .catch(e => console.error(e));
          }}
        >
          Spare {currentPSA.serial}
        </div>
      )}
      {currentPSA.spare === 1 && (
        <div
          className="backButton details"
          onClick={() => {
            makeBroke(currentPSA.serial)
              .then(() => {
                refreshSpares();
                onSpareStatusClick();
              })
              .catch(e => console.error(e));
          }}
        >
          Remove {currentPSA.serial} from Spare Pool
        </div>
      )}
      <div
        className="backButton details"
        onClick={() => {
          onSpareStatusClick();
        }}
      >
        Go Back
      </div>
    </div>
  );
};

SpareDetail.propTypes = {
  currentPSA: PropTypes.object,
  onBackClick: PropTypes.function,
  onSpareStatusClick: PropTypes.function,
  refreshSpares: PropTypes.function
};

export default SpareDetail;
