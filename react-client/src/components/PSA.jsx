import React from "react";

// PSA.propTypes = {
//   locationData: React.propTypes.object.isRequired,
//   fieldData: React.propTypes.object.isRequired
// };

// SG 1
// {fieldData: {…}, locationData: {…}}
const PSA = props => {
  return (
    <div>
      {props.psa.fieldData !== undefined && (
        <div className="PSA" id={props.psa.locationData.location}>
          <div className="text subgroup">SG{props.sg}</div>
          <div className="text group">{props.psa.locationData.group}</div>
          <div className="text serial">{props.psa.fieldData.serial}</div>
        </div>
      )}
      {props.psa.fieldData === undefined && (
        <div className="PSA">
          <div className="text subgroup"> </div>
          <div className="text group"> </div>
          <div className="text serial"> </div>
        </div>
      )}
    </div>
  );
};

export default PSA;

// failed, originalReplacement, originalRefurbishment, replacementRefurbishment, terroristWatch, finalReplacement
