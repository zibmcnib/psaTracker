import React from "react";

// PSA.propTypes = {
//   locationData: React.propTypes.object.isRequired,
//   fieldData: React.propTypes.object.isRequired
// };

const PSA = props => {
  const psa = props.psa;
  let status = "";
  let origin = "    ";
  let sg = "";
  if (psa.fieldData !== undefined) {
    if (props.sg === 81) {
      sg = "CEA1";
    } else {
      sg = `SG${props.sg}`;
    }
    if (psa.fieldData.failed) {
      status = "failed";
      if (psa.fieldData.wecRefurb === 1) {
        origin = "WEC";
      } else {
        origin = "oh crap...";
      }
    } else if (psa.fieldData.terrorist) {
      status = "terroristWatch";
      if (psa.fieldData.wecRefurb) {
        origin = "WEC";
      } else {
        origin = "NO!";
      }
    } else if (psa.fieldData.breakerRep && !psa.fieldData.wpps) {
      status = "originalReplacement";
      origin = "OEM";
    } else if (psa.fieldData.wpps) {
      status = "finalReplacement";
      origin = "WPPS";
    } else if (psa.fieldData.replaced && psa.fieldData.wecRefurb) {
      status = "replacementRefurbishment";
      origin = "WEC";
    } else if (psa.fieldData.wecRefurb && !psa.fieldData.replaced) {
      origin = "WEC";
      status = "originalRefurbishment";
    }
  } else {
    status = "blank";
  }
  return (
    <div>
      {psa.fieldData !== undefined && (
        <div className={`PSA ${status}`} id={psa.locationData.location}>
          <div className="text subgroup">{sg}</div>
          <div className="text group">{psa.locationData.group}</div>
          <div className="text serial">{psa.fieldData.serial}</div>
          <div className="text origin">{origin}</div>
          <div className="text fingers">{psa.locationData.finger}</div>
        </div>
      )}
      {psa.fieldData === undefined && (
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

export default PSA;
