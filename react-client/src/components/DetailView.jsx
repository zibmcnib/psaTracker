import React from "react";

const DetailPage = props => {
  console.log(props.currentPSA);
  return (
    <div>
      <h1>Location: {props.currentPSA.fieldData.location}</h1>
      <h3>Serial: {props.currentPSA.fieldData.serial}</h3>
      {props.currentPSA.fieldData.coil.length > 1 && (
        <div className="attention">{props.currentPSA.fieldData.coil} SCR</div>
      )}
      {props.currentPSA.locationData.ceas[1] === null && <div>CEA: 1</div>}
      {props.currentPSA.locationData.ceas[1] !== null && (
        <div>CEAs: {props.currentPSA.locationData.ceas.join(",")}</div>
      )}
      <div>Fingers: {props.currentPSA.locationData.finger}</div>
      <div>Regulating Group: {props.currentPSA.locationData.group}</div>
      <div>Comments: {props.currentPSA.fieldData.comments}</div>
      <div
        className="backButton"
        onClick={() => {
          props.onClick();
        }}
      >
        Go Back
      </div>
    </div>
  );
};

// DetailPage.propTypes = {
//   // u1: React.propTypes.object,
//   // u2: React.propTypes.object,
//   // u3: React.propTypes.object,
//   onClick: React.propTypes.function
// };

export default DetailPage;
