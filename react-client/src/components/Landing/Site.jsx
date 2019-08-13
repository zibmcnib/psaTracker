import React from "react";
import PropTypes from "prop-types";
import System from "./System.jsx";

const Site = ({ units: [u1, u2, u3], onClick }) => {
  return (
    <div>
      <System cabinets={u1} unit={1} onClick={onClick} />
      <System cabinets={u2} unit={2} onClick={onClick} />
      <System cabinets={u3} unit={3} onClick={onClick} />
    </div>
  );
};

Site.propTypes = {
  u1: PropTypes.object,
  u2: PropTypes.object,
  u3: PropTypes.object,
  units: PropTypes.array,
  onClick: PropTypes.function
};

export default Site;
