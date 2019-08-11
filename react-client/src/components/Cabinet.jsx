import React from "react";
import PSA from "./PSA.jsx";

Cabinet.propTypes = {
  topPSAs: React.propTypes.array.isRequired,
  bottomPSAs: React.propTypes.array.isRequired
};

const Cabinet = ({ topPSAs, bottomPSAs }) => (
  <div className="cabinet">
    <table>
      <tr>
        {topPSAs.map(psa => (
          <td key={psa.id}>
            <PSA psa={psa} />
          </td>
        ))}
      </tr>
      <tr>
        {bottomPSAs.map(psa => (
          <td key={psa.id}>
            <PSA key={psa.id} psa={psa} />
          </td>
        ))}
      </tr>
    </table>
  </div>
);

export default Cabinet;
