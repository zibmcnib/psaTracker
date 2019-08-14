import React from "react";
import PropTypes from "prop-types";
import Spare from "../PSASparePage/Spare.jsx";
import states from "../states";

const PSASwapInitial = ({ changeViewState, spares, onSparePSAClick }) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <h1>Select Available Spare PSA</h1>
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
                  onPSAClick={onSparePSAClick}
                  changeViewState={() =>
                    changeViewState(states.swapPSAConfirmView)
                  }
                />
              );
            })}
          </tbody>
        </table>
        <button onClick={() => changeViewState(states.detailView)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

PSASwapInitial.propTypes = {
  onSparePSAClick: PropTypes.function,
  changeViewState: PropTypes.function,
  spares: PropTypes.array
};

export default PSASwapInitial;
