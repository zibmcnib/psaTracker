import React from "react";
import PropTypes from "prop-types";

const SpareStatus = ({ spares, onClick }) => {
  return (
    <div className="system">
      <div className="center">
        <a onClick={() => onClick()}>
          Spare PSAs Ready For Install: {spares.length}x
        </a>
      </div>
    </div>
  );
};

SpareStatus.propTypes = {
  spares: PropTypes.array,
  onClick: PropTypes.function
};

export default SpareStatus;
