import React from "react";
import PropTypes from "prop-types";
import Spare from "./Spare.jsx";

const SparesTable = ({ spares }) => {
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
            {spares.map(spare => {
              return <Spare key={spare.serial} psa={spare} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

SparesTable.propTypes = {
  spares: PropTypes.object
};

export default SparesTable;
