import React from "react";
import PSA from "./PSA.jsx";

const CabinetRow = props => {
  return (
    <tr>
      {props.order.map(sg => {
        return (
          <td key={sg.id}>
            <PSA psa={props.row[sg]} sg={sg} />
          </td>
        );
      })}
    </tr>
  );
};

export default CabinetRow;
