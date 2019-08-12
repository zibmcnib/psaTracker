import React from "react";

// PSA.propTypes = {
//   locationData: React.propTypes.object.isRequired,
//   fieldData: React.propTypes.object.isRequired
// };

// SG 1
// {fieldData: {…}, locationData: {…}}
const PSA = props => {
  console.log(props, " propzies!");
  return (
    <div>
      {props.psa.fieldData !== undefined && (
        <div className="PSA" id={props.psa.locationData.location}>
          <div className="subgroup">SG{props.sg}</div>
          <div className="group">{props.psa.locationData.group}</div>
          <div className="serial">{props.psa.fieldData.serial}</div>
        </div>
      )}
      {props.psa.fieldData === undefined && (
        <div className="PSA">
          <div className="subgroup" />
          <div className="group" />
          <div className="serial" />
        </div>
      )}
    </div>
  );
};

export default PSA;
