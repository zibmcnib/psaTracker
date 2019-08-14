import React from "react";
import PropTypes from "prop-types";
import states from "../states";

const PSASwapConfirm = ({ spares, onPSAClick, changeViewState }) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <button onClick={() => changeViewState(states.detailView)}>
          {this.state.selectedPSA}
        </button>
      </div>
    </div>
  );
};

PSASwapConfirm.propTypes = {
  onPSAClick: PropTypes.function,
  changeViewState: PropTypes.function,
  spares: PropTypes.array
};

export default PSASwapConfirm;
