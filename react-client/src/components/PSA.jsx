import React from "react";
import PropTypes from "prop-types";
import parsePSADetails from "../../../js-client/models/parsePSADetails";

const PSA = ({ psa, onClick, subgroup }) => {
  const currentPSA = parsePSADetails(psa, subgroup);

  return (
    <div>
      <div
        className={`PSA ${currentPSA.status}`}
        onClick={() => onClick(psa)}
        id={currentPSA.location}
      >
        <div className="text subgroup">{currentPSA.subgroup}</div>
        <div className="text group">{currentPSA.group}</div>
        <div className="text serial">{currentPSA.serial}</div>
        <div className="text origin">{currentPSA.origin}</div>
        <div className="text fingers">{currentPSA.fingers}</div>
      </div>
    </div>
  );
};

PSA.propTypes = {
  psa: PropTypes.object,
  subgroup: PropTypes.number,
  onClick: PropTypes.function
};

export default PSA;
