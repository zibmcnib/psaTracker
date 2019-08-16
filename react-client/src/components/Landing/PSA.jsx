import React from "react";
import PropTypes from "prop-types";
import parsePSADetails from "../../../../js-client/models/parsePSADetails";
import states from "../states";

const PSA = ({ psa, onPSAClick, changeViewState }) => {
  const currentPSA = parsePSADetails(psa);
  return (
    <div>
      <div
        className={`PSA ${currentPSA.status}`}
        onClick={() => {
          onPSAClick(psa);
          changeViewState(states.detailView);
        }}
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
  onPSAClick: PropTypes.func,
  changeViewState: PropTypes.func
};

export default PSA;
