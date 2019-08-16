import React from "react";
import PropTypes from "prop-types";
import Spare from "./Spare.jsx";
import states from "../states";

const SparesPage = ({ spares, broken, changeViewState, onPSAClick }) => {
  return (
    <div className="system">
      <div className="center">
        <h1>Spare PSAs Ready for Install</h1>
        <table className="spares">
          <tbody>
            <tr>
              <th>Serial</th>
              <th>Breaker Replacement</th>
              <th>WPPS</th>
              <th>WEC</th>
              <th />
              <th />
            </tr>
            {spares.map(spare => {
              return (
                <Spare
                  key={spare.serial}
                  psa={spare}
                  onPSAClick={onPSAClick}
                  changeViewState={() => changeViewState(states.detailView)}
                />
              );
            })}
          </tbody>
        </table>
        <h1>Candidate PSAs for Rework</h1>
        <table className="spares">
          <tbody>
            <tr>
              <th>Serial</th>
              <th>Breaker Replacement</th>
              <th>WPPS</th>
              <th>WEC</th>
              <th>Coil</th>
              <th>Y-Group</th>
            </tr>
            {broken.map(broke => {
              return (
                <Spare
                  key={broke.serial}
                  psa={broke}
                  onPSAClick={onPSAClick}
                  changeViewState={() => changeViewState(states.detailView)}
                />
              );
            })}
          </tbody>
        </table>
        <div
          className="backButton"
          onClick={() => {
            changeViewState(states.landing);
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
  changeViewState: PropTypes.func,
  onPSAClick: PropTypes.func
};

export default SparesPage;
