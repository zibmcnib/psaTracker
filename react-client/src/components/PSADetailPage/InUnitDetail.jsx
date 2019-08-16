import React from "react";
import PropTypes from "prop-types";
import findYx from "../../../../js-client/models/findYx";
import parsePSADetails from "../../../../js-client/models/parsePSADetails";
import states from "../states";

const InUnitDetail = ({ currentPSA, changeViewState }) => {
  let Y = findYx(currentPSA);
  let parsedPSA = parsePSADetails(currentPSA);
  return (
    <div>
      <h1 className={`details ${parsedPSA.status}`}>
        Location: {currentPSA.fieldData.location}
      </h1>
      <h3 className="details">Serial: {currentPSA.fieldData.serial}</h3>
      {currentPSA.fieldData.coil.length > 1 && (
        <div className="attention">
          {currentPSA.fieldData.coil} SCR on {Y["y"]}, CEA {Y["cea"]}
        </div>
      )}
      {currentPSA.locationData.ceas[1] === null && (
        <div className="details">CEA: 1</div>
      )}
      {currentPSA.locationData.ceas[1] !== null && (
        <div className="details">
          CEAs: {currentPSA.locationData.ceas.join(",")}
        </div>
      )}
      <div className="details">Fingers: {currentPSA.locationData.finger}</div>
      <div className="details">
        Regulating Group: {currentPSA.locationData.group}
      </div>
      <div className="details">Comments: {currentPSA.fieldData.comments}</div>
      <div
        className="backButton details"
        onClick={() => {
          changeViewState(states.swapPSAInitialView);
        }}
      >
        Swap PSA with Spare
      </div>
      <div
        className="backButton details"
        onClick={() => {
          changeViewState(states.landing);
        }}
      >
        Go Back
      </div>
    </div>
  );
};

InUnitDetail.propTypes = {
  currentPSA: PropTypes.object,
  changeViewState: PropTypes.func
};

export default InUnitDetail;
