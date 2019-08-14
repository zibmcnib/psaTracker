import React from "react";
import PropTypes from "prop-types";

const Spare = ({ psa, onPSAClick, changeViewState }) => {
  let y = ["y1", "y2", "y3", "y4"]
    .filter(y => psa[y])
    .join(",")
    .toLocaleUpperCase();
  return (
    <tr
      className="itemHover"
      key={psa.serial}
      onClick={() => {
        onPSAClick(psa);
        changeViewState();
      }}
    >
      <td>{psa.serial}</td>
      <td>{psa.breakerRep === 1 && "X"}</td>
      <td>{psa.wpps === 1 && "X"}</td>
      <td>{psa.wecRefurb === 1 && "X"}</td>
      <td>{psa.coil.length > 1 && `${psa.coil}`}</td>
      <td>{y.length > 0 && `${y}`}</td>
    </tr>
  );
};

Spare.propTypes = {
  psa: PropTypes.object,
  serial: PropTypes.string,
  breakerRep: PropTypes.number,
  wpps: PropTypes.number,
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function
};

export default Spare;
