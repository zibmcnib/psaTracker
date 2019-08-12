import React from "react";

const Spare = props => {
  return (
    <tr key={props.psa.serial}>
      <td>{props.psa.serial}</td>
      <td>{props.psa.breakerRep}</td>
      <td>{props.psa.wpps}</td>
    </tr>
  );
};

export default Spare;
