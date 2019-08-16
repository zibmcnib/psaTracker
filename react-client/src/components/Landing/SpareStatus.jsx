import React from "react";
import PropTypes from "prop-types";
import states from "../states";

const SpareStatus = ({ spares, changeViewState }) => {
  return (
    <div className="system">
      <div className="center">
        <a
          className="appButton"
          onClick={() => changeViewState(states.spareView)}
        >
          PSAs Ready For Install: {spares.length}x
        </a>
      </div>
    </div>
  );
};

SpareStatus.propTypes = {
  spares: PropTypes.array,
  changeViewState: PropTypes.func
};

export default SpareStatus;
