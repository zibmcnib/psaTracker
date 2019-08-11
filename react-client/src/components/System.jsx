import React from "react";
import Cabinet from "./Cabinet.jsx";

System.propTypes = {
  cabinets: React.propTypes.array.isRequired,
};

const System = ({ cabinets }) => (
  <div className="system">
    <table>
      <tr>
        {cabinets.map(cabinet => (
          <td key={cabinet.id}>
            <Cabinet cabinet={cabinet} />
          </td>
        ))}
      </tr>
    </table>
  </div>
);

export default System;
