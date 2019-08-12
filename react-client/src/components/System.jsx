import React from "react";
import Cabinet from "./Cabinet.jsx";

// System.propTypes = {
//   cabinets: React.propTypes.array.isRequired
// };
//        U1
// (3)[{…}, {…}, {…}]

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
                  <Cabinet cabinet={cabinet} />
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
//   cabinets: React.propTypes.array.isRequired
// };

export default System;
