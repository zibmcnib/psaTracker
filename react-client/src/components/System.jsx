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
      <table>
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
  );
};

export default System;
