import React from "react";
import PropTypes from "prop-types";
import findYx from "../../../../js-client/models/findYx";
const DetailPage = ({ currentPSA, onClick }) => {
  let Y = findYx(currentPSA);
  return (
    <div>
      <h1>Location: {currentPSA.fieldData.location}</h1>
      <h3>Serial: {currentPSA.fieldData.serial}</h3>
      {currentPSA.fieldData.coil.length > 1 && (
        <div className="attention">
          {currentPSA.fieldData.coil} SCR on {Y["y"]}, CEA {Y["cea"]}
        </div>
      )}
      {currentPSA.locationData.ceas[1] === null && <div>CEA: 1</div>}
      {currentPSA.locationData.ceas[1] !== null && (
        <div>CEAs: {currentPSA.locationData.ceas.join(",")}</div>
      )}
      <div>Fingers: {currentPSA.locationData.finger}</div>
      <div>Regulating Group: {currentPSA.locationData.group}</div>
      <div>Comments: {currentPSA.fieldData.comments}</div>
      <div
        className="backButton"
        onClick={() => {
          onClick();
        }}
      >
        Go Back
      </div>
    </div>
  );
};

DetailPage.propTypes = {
  currentPSA: PropTypes.object,
  onClick: PropTypes.function
};

export default DetailPage;
