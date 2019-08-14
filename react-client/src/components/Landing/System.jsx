import React from "react";
import PropTypes from "prop-types";
import Cabinet from "./Cabinet.jsx";

const System = ({ unit, cabinets, onPSAClick, changeViewState }) => {
  return (
    <div className="system">
      <div className="center">
        <h2>Unit {unit}</h2>
        <div className="titles">
          <span>C01A</span>
          <span>C01B</span>
          <span>C01C</span>
        </div>
        <table className="outerTable">
          <tbody>
            <tr>
              {cabinets.map((cabinet, i) => (
                <td key={i}>
                  <Cabinet
                    cabinet={cabinet}
                    onPSAClick={onPSAClick}
                    changeViewState={changeViewState}
                  />
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
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function
};

export default System;
