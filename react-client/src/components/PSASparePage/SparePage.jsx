import React from "react";
import PropTypes from "prop-types";
import Spare from "./Spare.jsx";

const SparesPage = ({ spares, broken, onClick }) => {
  console.log(broken);
  return (
    <div className="system">
      <div className="center">
        <h1>Spare PSAs</h1>
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
        <h1>Candidate PSAs for Rework</h1>
        <table className="spares">
          <tbody>
            <tr>
              <th>Serial</th>
              <th>WPPS</th>
              <th>Breaker Replacement</th>
            </tr>
            {broken.map(broke => {
              return <Spare key={broke.serial} psa={broke} />;
            })}
          </tbody>
        </table>
        <div
          className="backButton"
          onClick={() => {
            onClick();
          }}
        >
          Go Back
        </div>
      </div>
    </div>
  );
};

SparesPage.propTypes = {
  spares: PropTypes.array,
  broken: PropTypes.array,
  onClick: PropTypes.function
};

export default SparesPage;
