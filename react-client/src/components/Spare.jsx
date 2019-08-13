import React from "react";
import PropTypes from "prop-types";

const Spare = ({ psa }) => {
  return (
    <tr key={psa.serial}>
      <td>{psa.serial}</td>
      <td>{psa.breakerRep}</td>
      <td>{psa.wpps}</td>
    </tr>
  );
};

Spare.propTypes = {
  psa: PropTypes.object,
  serial: PropTypes.string,
  breakerRep: PropTypes.number,
  wpps: PropTypes.number
};

export default Spare;
