import React from "react";
import PropTypes from "prop-types";
import PSA from "./PSA.jsx";

const CabinetRow = ({ order, row, onClick }) => {
  return (
    <tr>
      {order.map((sg, i) => {
        return (
          <td key={i}>
            <PSA psa={row[sg]} sg={sg} onClick={onClick} />
          </td>
        );
      })}
    </tr>
  );
};

CabinetRow.propTypes = {
  order: PropTypes.array,
  row: PropTypes.object,
  onClick: PropTypes.function
};

export default CabinetRow;
