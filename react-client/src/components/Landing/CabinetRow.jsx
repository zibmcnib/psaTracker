import React from "react";
import PropTypes from "prop-types";
import PSA from "./PSA.jsx";

const CabinetRow = ({ order, row, onPSAClick, changeViewState }) => {
  return (
    <tr>
      {order.map((subgroup, i) => {
        return (
          <td key={i}>
            <PSA
              psa={row[subgroup]}
              subgroup={subgroup}
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
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function
};

export default CabinetRow;
