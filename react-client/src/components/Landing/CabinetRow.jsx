import React from "react";
import PropTypes from "prop-types";
import PSA from "./PSA.jsx";

const CabinetRow = ({ unit, order, row, onPSAClick, changeViewState }) => {
  return (
    <tr>
      {order.map((DCID, i) => {
        return (
          <td key={i}>
            <PSA
              psa={row[`${unit}${DCID}`]}
              onPSAClick={onPSAClick}
              changeViewState={changeViewState}
            />
          </td>
        );
      })}
    </tr>
  );
};

CabinetRow.propTypes = {
  order: PropTypes.array,
  row: PropTypes.object,
  onPSAClick: PropTypes.func,
  changeViewState: PropTypes.func,
  unit: PropTypes.number
};

export default CabinetRow;
