import React from "react";
import PropTypes from "prop-types";

const PSA = ({ psa, onClick }) => {
  const currentPsa = psa;
  let status = "";
  let origin = "    ";
  let sg = "";
  if (currentPsa.fieldData !== undefined) {
    if (sg === 81) {
      sg = "CEA1";
    } else {
      sg = `SG${sg}`;
    }
    if (currentPsa.fieldData.failed) {
      status = "failed";
      if (currentPsa.fieldData.wecRefurb === 1) {
        origin = "WEC";
      } else {
        origin = "oh crap...";
      }
    } else if (currentPsa.fieldData.terrorist) {
      status = "terroristWatch";
      if (currentPsa.fieldData.wecRefurb) {
        origin = "WEC";
      } else {
        origin = "NO!";
      }
    } else if (currentPsa.fieldData.breakerRep && !currentPsa.fieldData.wpps) {
      status = "originalReplacement";
      origin = "OEM";
    } else if (currentPsa.fieldData.wpps) {
      status = "finalReplacement";
      origin = "WPPS";
    } else if (
      currentPsa.fieldData.replaced &&
      currentPsa.fieldData.wecRefurb
    ) {
      status = "replacementRefurbishment";
      origin = "WEC";
    } else if (
      currentPsa.fieldData.wecRefurb &&
      !currentPsa.fieldData.replaced
    ) {
      origin = "WEC";
      status = "originalRefurbishment";
    }
  } else {
    status = "blank";
  }
  return (
    <div>
      {currentPsa.fieldData !== undefined && (
        <div
          className={`PSA ${status}`}
          onClick={() => onClick(currentPsa)}
          id={currentPsa.locationData.location}
        >
          <div className="text subgroup">{sg}</div>
          <div className="text group">{currentPsa.locationData.group}</div>
          <div className="text serial">{currentPsa.fieldData.serial}</div>
          <div className="text origin">{origin}</div>
          <div className="text fingers">{currentPsa.locationData.finger}</div>
        </div>
      )}
      {currentPsa.fieldData === undefined && (
        <div className={`PSA ${status}`}>
          <div className="text subgroup"> - </div>
          <div className="text group"> - </div>
          <div className="text serial">No PSA</div>
          <div className="text origin"> - </div>
          <div className="text fingers"> - </div>
        </div>
      )}
    </div>
  );
};

PSA.propTypes = {
  psa: PropTypes.object,
  sg: PropTypes.number,
  onClick: PropTypes.function
};

export default PSA;
