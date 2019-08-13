import React from "react";
import PSA from "./PSA.jsx";

const CabinetRow = props => {
  return (
    <tr>
      {props.order.map((sg, i) => {
        return (
          <td key={i}>
            <PSA psa={props.row[sg]} sg={sg} onClick={props.onClick} />
          </td>
        );
      })}
    </tr>
  );
};

// CabinetRow.propTypes = {
//   order: React.propTypes.array,
//   row: React.propTypes.object,
//   onClick: React.propTypes.function
// };

export default CabinetRow;
