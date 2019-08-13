import React from "react";
import PropTypes from "prop-types";
import findYx from "../../../../js-client/models/findYx";
import parsePSADetails from "../../../../js-client/models/parsePSADetails";

const DetailPage = ({ currentPSA, onBackClick, onSpareStatusClick }) => {
  if (currentPSA.fieldData !== undefined) {
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
            onBackClick();
          }}
        >
          Go Back
        </div>
      </div>
    );
  } else {
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
  }
};

DetailPage.propTypes = {
  currentPSA: PropTypes.object,
  onBackClick: PropTypes.function,
  onSpareStatusClick: PropTypes.function
};

export default DetailPage;
