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
        <table className="outerTable">
          <div className="titles">
            <span>C01A</span>
            <span>C01B</span>
            <span>C01C</span>
          </div>
          <tbody>
            <tr>
              {props.cabinets.map(cabinet => (
                <td key={cabinet.id}>
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

export default System;
