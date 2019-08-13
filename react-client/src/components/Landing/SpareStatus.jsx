import React from "react";
import PropTypes from "prop-types";

const SpareStatus = ({ spares, onSpareStatusClick }) => {
  return (
    <div className="system">
      <div className="center">
        <a className="appButton" onClick={() => onSpareStatusClick()}>
          PSAs Ready For Install: {spares.length}x
        </a>
      </div>
    </div>
  );
};

SpareStatus.propTypes = {
  spares: PropTypes.array,
  onSpareStatusClick: PropTypes.function
};

export default SpareStatus;
