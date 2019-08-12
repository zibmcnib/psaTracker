import React from "react";
import Spare from "./Spare.jsx";

const SparesTable = props => {
  return (
    <div className="system">
      <div className="center">
        <table className="spares">
          <tbody>
            <tr>
              <th>Serial</th>
              <th>WPPS</th>
              <th>Breaker Replacement</th>
            </tr>

            {props.spares.map(spare => {
              return <Spare key={spare.serial} psa={spare} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SparesTable;
