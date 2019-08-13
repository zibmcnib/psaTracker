import React from "react";
import Cabinet from "./Cabinet.jsx";

const System = props => {
  return (
    <div className="system">
      <div className="center">
        <h2>Unit {props.unit}</h2>
        <div className="titles">
          <span>C01A</span>
          <span>C01B</span>
          <span>C01C</span>
        </div>
        <table className="outerTable">
          <tbody>
            <tr>
              {props.cabinets.map((cabinet, i) => (
                <td key={i}>
                  <Cabinet cabinet={cabinet} onClick={props.onClick} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// System.propTypes = {
//   unit: React.propTypes.number,
//   cabinets: React.propTypes.array,
//   onClick: React.propTypes.function
// };

export default System;
