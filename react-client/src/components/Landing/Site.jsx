import React from "react";
import PropTypes from "prop-types";
import System from "./System.jsx";

const Site = ({ units: [u1, u2, u3], onPSAClick, changeViewState }) => {
  return (
    <div>
      <System
        cabinets={u1}
        unit={1}
        onPSAClick={onPSAClick}
        changeViewState={changeViewState}
      />
      <System
        cabinets={u2}
        unit={2}
        onPSAClick={onPSAClick}
        changeViewState={changeViewState}
      />
      <System
        cabinets={u3}
        unit={3}
        onPSAClick={onPSAClick}
        changeViewState={changeViewState}
      />
    </div>
  );
};

Site.propTypes = {
  u1: PropTypes.object,
  u2: PropTypes.object,
  u3: PropTypes.object,
  units: PropTypes.array,
  onPSAClick: PropTypes.func,
  changeViewState: PropTypes.func
};

export default Site;
