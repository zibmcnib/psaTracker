import React from "react";
import PropTypes from "prop-types";
import Cabinet from "./Cabinet.jsx";

const System = ({ unit, cabinets, onClick }) => {
  return (
    <div className="system">
      <div className="center">
        <h2>Unit {unit}</h2>
        <div className="titles">
          <span>C01A</span>
          <span>C01B</span>
          <span>C01C</span>
        </div>
        {/* cabinets,{" "} */}
        <table className="outerTable">
          <tbody>
            {/* cabinets,{" "} */}
            <tr>
              {cabinets.map((cabinet, i) => (
                <td key={i}>
                  <Cabinet cabinet={cabinet} onClick={onClick} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

System.propTypes = {
  unit: PropTypes.number,
  cabinets: PropTypes.array,
  onClick: PropTypes.function
};

export default System;
