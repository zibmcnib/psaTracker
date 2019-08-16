import React from "react";
import PropTypes from "prop-types";
import makeSpare from "../../../../js-client/models/makeSpare";
import makeBroke from "../../../../js-client/models/makeBroke";
import states from "../states";

const SpareDetail = ({ currentPSA, refreshSpares, changeViewState }) => {
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
      {currentPSA.spare == 0 && (
        <div
          className="backButton details"
          onClick={async () => {
            await makeSpare(currentPSA.serial);
            await refreshSpares();
            changeViewState(states.spareView);
          }}
        >
          Add {currentPSA.serial} to Spare Pool
        </div>
      )}
      {currentPSA.spare == 1 && (
        <div
          className="backButton details"
          onClick={async () => {
            await makeBroke(currentPSA.serial);
            await refreshSpares();
            changeViewState(states.spareView);
          }}
        >
          Remove {currentPSA.serial} from Spare Pool
        </div>
      )}
      <div
        className="backButton details"
        onClick={() => {
          changeViewState(states.spareView);
        }}
      >
        Go Back
      </div>
    </div>
  );
};

SpareDetail.propTypes = {
  currentPSA: PropTypes.object,
  changeViewState: PropTypes.func,
  refreshSpares: PropTypes.func
};

export default SpareDetail;
