import React from "react";

const PSA = props => {
  const currentPsa = props.psa;
  let status = "";
  let origin = "    ";
  let sg = "";
  if (currentPsa.fieldData !== undefined) {
    if (props.sg === 81) {
      sg = "CEA1";
    } else {
      sg = `SG${props.sg}`;
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
          onClick={() => props.onClick(currentPsa)}
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

// PSA.propTypes = {
//   // psa: React.propTypes.object,
//   sg: React.propTypes.number,
//   onClick: React.propTypes.function
// };

export default PSA;
